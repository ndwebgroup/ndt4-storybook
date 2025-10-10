/**
 * Stat component
 * @param {('default'|'lg')} [props.size='default'] - The size of the stat number
 * @param {('left'|'center')} [props.alignment='left'] - Alignment of the stats)
 */
import { getSticker } from '../utils/stickerUtils.js';

export default function Stat(args) {
  const { items = [], size, alignment } = args;

  return `<ul class="no-bullets list--stats grid grid-sm-3">
  ${items.map((item) => {
    const stickerHtml = item.sticker ? getSticker(item.sticker, 'stat-sticker sticker--md') : '';
    return `<li class="stat-item${ alignment === 'center' ? ' stat-item--center' : '' }">
    ${stickerHtml}
    <span class="stat-value stat-value--${size}">${item.value}</span>
    <span class="stat-label">${item.label}</span>
  </li>`;
  }).join('\n  ')}
</ul>
`;
}