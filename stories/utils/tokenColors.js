/**
 * Token → docs bridge.
 * Reads tokens/color.sem.json (DTCG format) and exposes display-ready data
 * for the Foundation/Colors page. Edit the token file, not colors.mdx.
 */
import tokens from '../../tokens/color.sem.json';

/** Resolve a {color.palette.x.y} reference to its raw node. */
function getByPath(root, dotted) {
  return dotted.split('.').reduce((acc, key) => (acc ? acc[key] : undefined), root);
}

function resolveValue(value, root) {
  if (typeof value === 'string' && value.startsWith('{') && value.endsWith('}')) {
    const node = getByPath(root, value.slice(1, -1));
    return node ? resolveValue(node.$value, root) : undefined;
  }
  return value;
}

/** "Brand Blue Bright" → "--brand-blue-bright" */
const toCssVar = (name) => `--${name.trim().toLowerCase().replace(/[,\s]+/g, '-')}`;

export function hexToHsl(hex) {
  let h = hex.replace('#', '');
  if (h.length === 3) h = h.split('').map((c) => c + c).join('');
  const r = parseInt(h.slice(0, 2), 16) / 255;
  const g = parseInt(h.slice(2, 4), 16) / 255;
  const b = parseInt(h.slice(4, 6), 16) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let hue = 0, sat = 0;
  const light = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    sat = light > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) hue = ((g - b) / d + (g < b ? 6 : 0)) * 60;
    else if (max === g) hue = ((b - r) / d + 2) * 60;
    else hue = ((r - g) / d + 4) * 60;
  }
  const rnd = (n) => Math.round(n * 100) / 100;
  return `hsl(${rnd(hue)}, ${Math.round(sat * 100)}%, ${Math.round(light * 100)}%)`;
}

/** All palette groups: [{ group, colors: [{ name, hex, hsl, cssVar }] }] */
export const paletteGroups = Object.entries(tokens.color.palette).map(([group, shades]) => ({
  group,
  colors: Object.entries(shades)
    .filter(([, node]) => node && node.$value)
    .map(([shade, node]) => ({
      shade,
      name: node.$name ?? `${group}-${shade}`,
      hex: node.$value.toLowerCase(),
      hsl: hexToHsl(node.$value),
      cssVar: toCssVar(node.$name ?? `${group}-${shade}`),
    })),
}));

const BASE_GROUPS = ['brand-blue', 'brand-gold', 'brand-green'];
export const basePalette = paletteGroups.filter((g) => BASE_GROUPS.includes(g.group));
export const supportingPalette = paletteGroups.filter(
  (g) => !BASE_GROUPS.includes(g.group) && g.group !== 'other'
);

/** Flat list for the CSS variables table (skips internal-only groups). */
export const cssVariableRows = paletteGroups
  .filter((g) => g.group !== 'other')
  .flatMap((g) => g.colors)
  .filter((c) => c.name !== 'White');

/** Semantic tokens: [{ path, ref, hex }] for e.g. color.text.primary */
export const semanticTokens = ['brand', 'text', 'surface', 'border'].flatMap((section) =>
  Object.entries(tokens.color[section] ?? {}).map(([key, node]) => ({
    path: `color.${section}.${key}`,
    ref: typeof node.$value === 'string' ? node.$value.replace(/[{}]/g, '') : '',
    hex: (resolveValue(node.$value, tokens) ?? '').toLowerCase(),
  }))
);
