/**
 * Stat component
 * @param {('default'|'lg')} [props.size='default'] - The size of the stat number
 * @param {('left'|'center')} [props.alignment='left'] - Alignment of the stats)
 * @param {string} [props.value_modifier] - Additional class to add to the stat value
 */
import { getSticker } from '../utils/stickerUtils.js';

export default function Stat(args) {
  const { items = [], size, alignment, value_modifier } = args;

  return `<ul class="no-bullets list--stats grid grid-sm-3">
  ${items.map((item) => {
    const stickerHtml = item.sticker ? getSticker(item.sticker, 'stat-sticker sticker--md') : '';
    return `<li class="stat-item${ alignment === 'center' ? ' stat-item--center' : '' }">
    ${stickerHtml}
    <span class="stat-value${size !== 'md' ? ` stat-value--${size}` : ''}${value_modifier ? ` ${value_modifier}` : ''}">${item.value}</span>
    <span class="stat-label">${item.label}</span>
  </li>`;
  }).join('\n  ')}
</ul>
`;
}