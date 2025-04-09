/**
 * Icons component to showcase available icons
 */
import { getIcon } from '../utils/iconUtils.js';

export default function Icons(args) {
  const { icons = [], showNames = true, size = 'md' } = args;

  return `
  <div class="icon-showcase">
  ${icons.map(iconId => {
  const iconName = iconId.replace('icon-', '');
  return `<div class="icon-item">
    ${getIcon(iconId, '', '', size)}
    ${showNames ? `<span class="icon-name">${iconId}</span>` : ''}
  </div>`;
  }).join('\n  ')}
</div>
`;
}