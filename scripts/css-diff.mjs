#!/usr/bin/env node
/**
 * NDT4 CSS release diff.
 *
 * Compares the live ndt.css against the last snapshot and reports:
 *   - added / removed CSS classes
 *   - added / removed / changed custom properties (--variables)
 *   - which story/doc files mention the affected classes
 *   - a paste-ready changelog snippet for stories/pages/changelog.mdx
 *
 * Usage:
 *   npm run css:diff             diff against the snapshot (read-only)
 *   npm run css:diff -- --update accept changes and refresh the snapshot
 *
 * First run creates the baseline snapshot at css/ndt.snapshot.css.
 * Commit the snapshot to git so diffs track your releases.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SNAPSHOT = path.join(root, 'css', 'ndt.snapshot.css');
const STORIES_DIR = path.join(root, 'stories');

// ---- locate the stylesheet URL (kept in .storybook/preview-head.html) --

function cssUrl() {
  const head = fs.readFileSync(path.join(root, '.storybook', 'preview-head.html'), 'utf8');
  const m = head.match(/href="(https?:\/\/[^"]+\.css)"/);
  if (!m) throw new Error('Could not find a stylesheet URL in .storybook/preview-head.html');
  return m[1];
}

// ---- CSS parsing (dependency-free, good enough for class/var diffing) --

const stripComments = (css) => css.replace(/\/\*[\s\S]*?\*\//g, ' ');

/** Selector preludes: text appearing before `{`, never declaration bodies. */
function preludes(css) {
  const out = [];
  let buf = '';
  for (const ch of stripComments(css)) {
    if (ch === '{') { out.push(buf); buf = ''; }
    else if (ch === '}') { buf = ''; }
    else buf += ch;
  }
  return out;
}

function classNames(css) {
  const set = new Set();
  for (const p of preludes(css)) {
    for (const m of p.matchAll(/\.(-?[a-zA-Z_][\w-]*)/g)) set.add(m[1]);
  }
  return set;
}

/** Map of --var → sorted unique values (a var may differ per mode/scope). */
function customProps(css) {
  const map = new Map();
  for (const m of stripComments(css).matchAll(/--([\w-]+)\s*:\s*([^;}]+)/g)) {
    const name = m[1], value = m[2].trim();
    if (!map.has(name)) map.set(name, new Set());
    map.get(name).add(value);
  }
  return new Map([...map].map(([k, v]) => [k, [...v].sort().join(' | ')]));
}

const diffSets = (oldSet, newSet) => ({
  added: [...newSet].filter((x) => !oldSet.has(x)).sort(),
  removed: [...oldSet].filter((x) => !newSet.has(x)).sort(),
});

// ---- map class changes to story/doc files -----------------------------

function storyFiles() {
  const files = [];
  (function walk(dir) {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else if (/\.(js|mdx)$/.test(e.name)) files.push(p);
    }
  })(STORIES_DIR);
  return files.map((f) => ({ file: path.relative(root, f), text: fs.readFileSync(f, 'utf8') }));
}

function affectedFiles(classes, files) {
  const hits = new Map(); // class → [files]
  for (const cls of classes) {
    const re = new RegExp(`(?<![\\w-])${cls.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?![\\w-])`);
    const found = files.filter((f) => re.test(f.text)).map((f) => f.file);
    if (found.length) hits.set(cls, found);
  }
  return hits;
}

// ---- main --------------------------------------------------------------

const update = process.argv.includes('--update');
const url = cssUrl();

console.log(`Fetching ${url} ...`);
const res = await fetch(url);
if (!res.ok) { console.error(`Fetch failed: ${res.status} ${res.statusText}`); process.exit(1); }
const live = await res.text();

if (!fs.existsSync(SNAPSHOT)) {
  fs.mkdirSync(path.dirname(SNAPSHOT), { recursive: true });
  fs.writeFileSync(SNAPSHOT, live);
  console.log(`Baseline created: ${path.relative(root, SNAPSHOT)} (${live.length.toLocaleString()} bytes)`);
  console.log('Commit it to git. Future runs will diff against it.');
  process.exit(0);
}

const old = fs.readFileSync(SNAPSHOT, 'utf8');
if (old === live) { console.log('No changes — live CSS matches the snapshot.'); process.exit(0); }

const cls = diffSets(classNames(old), classNames(live));
const oldVars = customProps(old), newVars = customProps(live);
const vars = diffSets(new Set(oldVars.keys()), new Set(newVars.keys()));
const changedVars = [...newVars]
  .filter(([k, v]) => oldVars.has(k) && oldVars.get(k) !== v)
  .map(([k, v]) => ({ name: k, from: oldVars.get(k), to: v }));

console.log('\n================ CSS RELEASE DIFF ================\n');
const section = (label, items, fmt = (x) => x) => {
  if (!items.length) return;
  console.log(`${label} (${items.length}):`);
  for (const i of items) console.log(`  ${fmt(i)}`);
  console.log('');
};
section('New classes', cls.added, (c) => `.${c}`);
section('Removed classes', cls.removed, (c) => `.${c}`);
section('New variables', vars.added, (v) => `--${v}: ${newVars.get(v)}`);
section('Removed variables', vars.removed, (v) => `--${v}`);
section('Changed variables', changedVars, (v) => `--${v.name}: ${v.from}  →  ${v.to}`);

if (!cls.added.length && !cls.removed.length && !vars.added.length && !vars.removed.length && !changedVars.length) {
  console.log('Only formatting/declaration changes — no class or variable differences.\n');
}

// Affected stories/docs
const touched = [...cls.removed, ...cls.added];
if (touched.length) {
  const hits = affectedFiles(touched, storyFiles());
  if (hits.size) {
    console.log('Stories/docs mentioning affected classes:');
    for (const [c, files] of hits) console.log(`  .${c}\n${files.map((f) => `      ${f}`).join('\n')}`);
    console.log('');
  }
}

// Changelog snippet
const today = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
const bullets = [
  ...cls.added.map((c) => `      <li><strong>TODO Component</strong>: New class <code>.${c}</code>.</li>`),
  ...cls.removed.map((c) => `      <li><strong>TODO Component</strong>: Removed class <code>.${c}</code>.</li>`),
  ...changedVars.map((v) => `      <li><strong>Colors</strong>: <code>--${v.name}</code> changed from <code>${v.from}</code> to <code>${v.to}</code>.</li>`),
  ...vars.added.map((v) => `      <li><strong>Colors</strong>: New variable <code>--${v}</code>.</li>`),
  ...vars.removed.map((v) => `      <li><strong>Colors</strong>: Removed variable <code>--${v}</code>.</li>`),
];
if (bullets.length) {
  console.log('Paste-ready changelog entry (stories/pages/changelog.mdx):\n');
  console.log(`  <li className="log-item">
    <p className="log-date">${today}</p>
    <h2 className="log-title h3">**x.y.z** | TODO Release Title</h2>
    <ul>
${bullets.join('\n')}
    </ul>
  </li>\n`);
}

if (update) {
  fs.writeFileSync(SNAPSHOT, live);
  console.log(`Snapshot updated: ${path.relative(root, SNAPSHOT)}`);
} else {
  console.log('Run with --update to accept these changes and refresh the snapshot.');
}
