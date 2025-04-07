/**
 * Stats component
 */
import { getIcon } from '../utilities/iconUtils.js';

export default function Stats(args) {
  const { items = [] } = args;

  return `<ul class="no-bullets list--stats grid grid-sm-3">
  ${items.map((item) => {
    const iconHtml = item.icon ? getIcon(item.icon, 'stat-icon icon--xl') : '';
    return `<li class="stat-item">
    ${iconHtml}
    <span class="stat-value">${item.value}</span>
    <span class="stat-label">${item.label}</span>
  </li>`;
  }).join('\n  ')}
</ul>
`;
}