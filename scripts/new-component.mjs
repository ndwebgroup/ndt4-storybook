#!/usr/bin/env node
/**
 * NDT4 component scaffolding generator.
 *
 * Usage (interactive):  npm run new:component
 * Usage (flags):        npm run new:component -- --name QuoteBlock --dir components --status coming
 *
 * Generates three files matching the house style:
 *   <dir>/<Name>.js          vanilla DOM factory with JSDoc
 *   <dir>/<Name>.stories.js  CSF meta + Primary story
 *   <dir>/<Name>.mdx         docs page (optional)
 */

import fs from 'node:fs';
import path from 'node:path';
import readline from 'node:readline/promises';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const storiesRoot = path.join(root, 'stories');

const CATEGORIES = {
  '1': { dir: 'components', title: (n) => `Components/${n}` },
  '2': { dir: 'components/Buttons', title: (n) => `Components/Buttons/${n}` },
  '3': { dir: 'components/Cards', title: (n) => `Components/Cards/${n}` },
  '4': { dir: 'components/Forms', title: (n) => `Components/Forms/${n}` },
  '5': { dir: 'components/Media Mentions', title: (n) => `Components/Media Mentions/${n}` },
  '6': { dir: 'collections', title: (n) => `Collections/${n}` },
  '7': { dir: 'templates', title: (n) => `Templates/${n}` },
};

const STATUSES = ['stable', 'coming', 'modified'];

// ---- helpers ----------------------------------------------------------

const kebab = (s) =>
  s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase();

const titleWords = (s) =>
  s.replace(/([a-z0-9])([A-Z])/g, '$1 $2');

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i++) {
    const m = argv[i].match(/^--([a-z-]+)$/);
    if (m) out[m[1]] = argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[++i] : true;
  }
  return out;
}

// ---- templates --------------------------------------------------------

function componentJs(name, args) {
  const jsdocParams = args
    .map((a) => ` * @param {string} props.${a} - TODO: describe ${a}`)
    .join('\n');
  const destructure = args.map((a) => `    ${a},`).join('\n');
  return `/**
 * ${titleWords(name)} component
 * @param {Object} props - Component properties
${jsdocParams}
 * @returns {HTMLElement} - The ${kebab(name)} element
 */

export default function ${name}(props) {
  const {
${destructure}
  } = props;

  const container = document.createElement('div');
  container.classList.add('${kebab(name)}');

  container.innerHTML = \`
    <p>\${${args[0] ?? "''"}}</p>
  \`;

  return container;
}
`;
}

function storiesJs(name, { title, status, description, figma, args }) {
  const argTypes = args
    .map((a) => `    ${a}: { name: '${titleWords(a[0].toUpperCase() + a.slice(1))}' },`)
    .join('\n');
  const defaults = args.map((a) => `    ${a}: 'TODO',`).join('\n');
  const design = figma
    ? `    design: {
      name: "Figma Assets",
      allowFullscreen: true,
      type: "figma",
      url: "${figma}",
    },
`
    : '';
  return `import ${name} from './${name}.js';

export default {
  title: '${title}',
  tags: ['${status}'],
  argTypes: {
${argTypes}
  },
  parameters: {
${design}    docs: {
      description: {
        component: '${description.replace(/'/g, "\\'")}'
      }
    },
  },
  args: {
${defaults}
  }
};

export const Primary = (args) => {
  return ${name}(args);
};
Primary.args = {
};
`;
}

function mdx(name) {
  return `import { Title, Description, Primary, Canvas, Meta, Controls } from '@storybook/addon-docs/blocks';

import * as ${name}Stories from './${name}.stories';

<Meta of={${name}Stories} />

<Title />

<Description />

<Primary />

<Controls />

---

## Usage

<ul className="list--todo">
  <li>
    ### Dos
    <ul>
      <li>TODO</li>
    </ul>
  </li>
  <li>
    ### Don'ts
    <ul>
      <li>TODO</li>
    </ul>
  </li>
</ul>

---

## Accessibility

- TODO

## CSS References

| CSS Class${' '.repeat(24)} | Description${' '.repeat(24)} |
|----------------------------------|-------------------------------------|
| \`.${kebab(name)}\`${' '.repeat(Math.max(0, 30 - kebab(name).length))} | Base class.${' '.repeat(24)} |
`;
}

// ---- main -------------------------------------------------------------

const flags = parseArgs(process.argv.slice(2));
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

async function ask(q, fallback) {
  const a = (await rl.question(fallback !== undefined ? `${q} [${fallback}]: ` : `${q}: `)).trim();
  return a || fallback || '';
}

let name = flags.name || (await ask('Component name (PascalCase, e.g. QuoteBlock)'));
name = name.replace(/[^A-Za-z0-9]/g, '');
if (!name) { console.error('A component name is required.'); process.exit(1); }
name = name[0].toUpperCase() + name.slice(1);

let dir = flags.dir;
if (!dir) {
  console.log('\nCategory:');
  for (const [k, v] of Object.entries(CATEGORIES)) console.log(`  ${k}) ${v.dir}`);
  const pick = await ask('Choose category', '1');
  dir = (CATEGORIES[pick] ?? CATEGORIES['1']).dir;
}
const catEntry = Object.values(CATEGORIES).find((c) => c.dir === dir);
const title = flags.title || (await ask('Storybook title', catEntry ? catEntry.title(titleWords(name)) : `Components/${titleWords(name)}`));

let status = flags.status || (await ask(`Status (${STATUSES.join('/')})`, 'coming'));
if (!STATUSES.includes(status)) status = 'coming';

const str = (v) => (typeof v === 'string' ? v : '');
const description = str(flags.description) || (await ask('One-line description for docs'));
const figma = 'figma' in flags ? str(flags.figma) : (await ask('Figma URL (optional)', ''));
const argsRaw = str(flags.args) || (await ask('Args (comma-separated prop names)', 'text'));
const args = argsRaw.split(',').map((s) => s.trim()).filter(Boolean);
const wantMdx = 'no-mdx' in flags
  ? false
  : 'mdx' in flags
    ? true
    : (await ask('Generate MDX docs? (Y/n)', 'Y')).toLowerCase() !== 'n';

rl.close();

const targetDir = path.join(storiesRoot, dir);
fs.mkdirSync(targetDir, { recursive: true });

const files = [
  [path.join(targetDir, `${name}.js`), componentJs(name, args)],
  [path.join(targetDir, `${name}.stories.js`), storiesJs(name, { title, status, description, figma, args })],
];
if (wantMdx) files.push([path.join(targetDir, `${name}.mdx`), mdx(name)]);

for (const [file] of files) {
  if (fs.existsSync(file)) {
    console.error(`Refusing to overwrite existing file: ${path.relative(root, file)}`);
    process.exit(1);
  }
}
for (const [file, content] of files) {
  fs.writeFileSync(file, content);
  console.log(`Created ${path.relative(root, file)}`);
}
console.log(`\nDone. Search for TODO in the generated files and update`);
