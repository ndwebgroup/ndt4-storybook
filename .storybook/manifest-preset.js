/**
 * Local Storybook preset that generates the components manifest
 * (`manifests/components.json`) for this HTML-framework Storybook.
 *
 * Storybook only ships a components manifest generator for React (via
 * react-docgen). This preset fills the gap by loading each `*.stories.js`
 * file through Vite's SSR loader with happy-dom providing `document`,
 * rendering every story to markup, and deriving "props" from `argTypes`.
 *
 * The output feeds `@storybook/mcp` (the `list-all-documentation`,
 * `get-documentation`, and `get-documentation-for-story` tools).
 *
 * Must be listed in `addons` BEFORE `@storybook/addon-docs` so that
 * addon-docs can attach MDX docs to the components produced here.
 */
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const projectRoot = fileURLToPath(new URL('..', import.meta.url));

function installDom() {
  if (globalThis.document) return () => {};
  return (async () => {
    const { Window } = await import('happy-dom');
    const win = new Window({ url: 'https://webtheme.nd.edu/' });
    const installed = [];
    for (const key of ['window', 'document', 'HTMLElement', 'Element', 'Node', 'DocumentFragment', 'NodeList', 'HTMLTemplateElement']) {
      if (!(key in globalThis)) {
        globalThis[key] = win[key] ?? win;
        installed.push(key);
      }
    }
    globalThis.window = win;
    globalThis.document = win.document;
    return () => {
      for (const key of installed) delete globalThis[key];
      delete globalThis.window;
      delete globalThis.document;
    };
  })();
}

function componentIdFromEntry(entry) {
  return entry.id.split('--')[0];
}

function argTypeToType(argType = {}, sampleValue) {
  const control = typeof argType.control === 'string' ? argType.control : argType.control?.type;
  const options = argType.options ?? argType.control?.options;
  if (Array.isArray(options)) return options.map((o) => JSON.stringify(o)).join(' | ');
  if (argType.type?.name) return argType.type.name;
  switch (control) {
    case 'boolean': return 'boolean';
    case 'number': case 'range': return 'number';
    case 'text': case 'color': case 'date': return 'string';
    case 'object': return Array.isArray(sampleValue) ? 'object[]' : 'object';
    default: return sampleValue === undefined ? 'any' : Array.isArray(sampleValue) ? 'object[]' : typeof sampleValue;
  }
}

/**
 * Build the `apiDescription` Markdown (Storybook 10.6+ manifest field for
 * framework-authored API docs) from CSF `argTypes` and default `args`.
 */
function apiDescriptionFromArgTypes(meta) {
  const argTypes = meta.argTypes ?? {};
  const defaults = meta.args ?? {};
  const names = [...new Set([...Object.keys(argTypes), ...Object.keys(defaults)])];
  const rows = [];
  for (const name of names) {
    const at = argTypes[name] ?? {};
    if (at.table?.disable) continue;
    const def = defaults[name];
    const desc = at.description || (at.name && at.name !== name ? at.name : '');
    const defText = def === undefined || typeof def === 'object' ? '' : `\`${JSON.stringify(def)}\``;
    rows.push(`| \`${name}\` | ${argTypeToType(at, def).replace(/\|/g, '\\|')} | ${defText} | ${desc.replace(/\|/g, '\\|')} |`);
  }
  if (rows.length === 0) return undefined;
  return ['## Options', '', '| Option | Type | Default | Description |', '| --- | --- | --- | --- |', ...rows].join('\n');
}

function toMarkup(result) {
  if (result == null) return '';
  if (typeof result === 'string') return result;
  if (typeof result.outerHTML === 'string') return result.outerHTML;
  if (result.nodeType === 11 /* DocumentFragment */) {
    return Array.from(result.childNodes).map((n) => n.outerHTML ?? n.textContent).join('');
  }
  return String(result);
}

function tidy(html) {
  const lines = html.replace(/\r\n/g, '\n').split('\n').filter((l) => l.trim() !== '');
  const indent = Math.min(...lines.map((l) => l.match(/^\s*/)[0].length));
  return lines.map((l) => l.slice(Number.isFinite(indent) ? indent : 0)).join('\n');
}

async function renderStory(meta, story, args) {
  // Mirrors the HTML renderer's default: story fn > story.render > meta.render > meta.component(args)
  let render = typeof story === 'function' ? story : story?.render ?? meta.render;
  if (typeof render !== 'function' && typeof meta.component === 'function') render = (a) => meta.component(a);
  if (typeof render !== 'function') throw new Error('Story has no render function');
  const context = { args, parameters: { ...meta.parameters, ...story?.parameters } };
  return toMarkup(await render(args, context));
}

export const experimental_manifests = async (existing = {}, { manifestEntries }) => {
  const storyEntries = manifestEntries.filter((e) => e.type === 'story');
  // addon-mcp probes availability with an empty entry list; it needs a `components`
  // key present to enable its docs toolset, so always return one.
  if (storyEntries.length === 0) return { ...existing, components: existing.components ?? { v: 0, components: {} } };

  const byComponent = new Map();
  for (const entry of storyEntries) {
    const id = componentIdFromEntry(entry);
    if (!byComponent.has(id)) byComponent.set(id, []);
    byComponent.get(id).push(entry);
  }

  const { createServer } = await import('vite');
  const vite = await createServer({
    root: projectRoot,
    configFile: false,
    logLevel: 'error',
    appType: 'custom',
    server: { middlewareMode: true, hmr: false, watch: null },
    optimizeDeps: { noDiscovery: true, include: [] },
  });
  const restoreDom = await installDom();

  const components = {};
  const started = performance.now();
  try {
    for (const [componentId, entries] of byComponent) {
      const importPath = entries[0].importPath;
      const title = entries[0].title;
      const name = title.split('/').pop();
      const component = { id: componentId, name, path: importPath, stories: [] };
      let mod;
      try {
        mod = await vite.ssrLoadModule('/' + importPath.replace(/^\.\//, ''));
      } catch (err) {
        component.error = { name: err.name ?? 'Error', message: err.message };
        components[componentId] = component;
        continue;
      }
      const meta = mod.default ?? {};
      const description = meta.parameters?.docs?.description?.component;
      if (description) component.description = description;
      const apiDescription = apiDescriptionFromArgTypes(meta);
      if (apiDescription) component.apiDescription = apiDescription;

      for (const entry of entries) {
        const story = mod[entry.exportName];
        const storyArgs = typeof story === 'function' ? story.args : story?.args;
        const args = { ...meta.args, ...storyArgs };
        const item = { id: entry.id, name: entry.name };
        const storyDescription = (typeof story === 'function' ? story.parameters : story?.parameters)?.docs?.description?.story;
        if (storyDescription) item.description = storyDescription;
        try {
          item.snippet = tidy(await renderStory(meta, story, args));
        } catch (err) {
          item.error = { name: err.name ?? 'Error', message: err.message };
        }
        component.stories.push(item);
      }
      components[componentId] = component;
    }
  } finally {
    restoreDom();
    await vite.close();
  }

  const errored = Object.values(components).filter((c) => c.error || c.stories.some((s) => s.error)).length;
  console.log(`[manifest-preset] generated ${Object.keys(components).length} components (${errored} with errors) in ${Math.round(performance.now() - started)}ms`);

  // v0 = inline manifest format (v1 is the docgen-server/JSON-ref layout)
  return { ...existing, components: { v: 0, components } };
};
