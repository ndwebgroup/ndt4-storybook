/**
 * Stats component
 * @param {('default'|'lg')} [props.size='default'] - The size of the stat number
 */
import { getIcon } from '../utils/iconUtils.js';

export default function Stats(args) {
  const { items = [], size } = args;

  return `<ul class="no-bullets list--stats grid grid-sm-3">
  ${items.map((item) => {
    const iconHtml = item.icon ? getIcon(item.icon, 'stat-icon icon--xl') : '';
    return `<li class="stat-item">
    ${iconHtml}
    <span class="stat-value stat-value--${size}">${item.value}</span>
    <span class="stat-label">${item.label}</span>
  </li>`;
  }).join('\n  ')}
</ul>
`;
}