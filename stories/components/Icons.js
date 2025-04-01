/**
 * Icons component to showcase available icons
 */
import { getIcon } from '../utilities/iconUtils.js';

export default function Icons(args) {
  const { icons = [], showNames = true, size = 'md' } = args;

  return `
    <div class="icon-showcase">
      <style>
        .icon-showcase {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          gap: 1rem;
        }
        .icon-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          width: 120px;
          min-height: 120px;
          text-align: center;
        }
        .icon {
          margin-bottom: 0.5rem;
        }
        .icon-name {
          font-size: 0.8rem;
          line-height: 1.2em;
          color: #666;
          max-width: 100%;
        }
      </style>
      ${icons.map(iconId => {
        const iconName = iconId.replace('icon-', '');
        return `
          <div class="icon-item">
            ${getIcon(iconId, '', '', size)}
            ${showNames ? `<span class="icon-name">${iconId}</span>` : ''}
          </div>
        `;
      }).join('')}
    </div>
  `;
}