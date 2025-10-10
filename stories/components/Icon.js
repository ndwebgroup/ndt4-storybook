/**
 * Icon component to showcase available icons
 */
import { getIcon } from '../utils/iconUtils.js';

export default function Icon(args) {
  const { icons = [], showNames = true, size = 'md' } = args;

  return `
  <div class="icon-showcase">
  ${icons.map(iconId => {
  return `<div class="icon-item">
    ${getIcon(iconId, '', '', size)}
    ${showNames ? `<span class="icon-name">${iconId}</span>` : ''}
  </div>`;
  }).join('\n  ')}
</div>
`;
}