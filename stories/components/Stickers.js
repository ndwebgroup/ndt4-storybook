/**
Stickers component to showcase available stickers
 */
import { getSticker } from '../utils/stickerUtils.js';

export default function Stickers(args) {
  const { stickers = [], showNames = true, size = 'md' } = args;

  return `
  <div class="icon-showcase">
  ${stickers.map(stickerId => {
  const stickerName = stickerId.replace('sticker-', '');
  return `<div class="icon-item">
    ${getSticker(stickerId, '', '', size)}
    ${showNames ? `<span class="icon-name">${stickerId}</span>` : ''}
  </div>`;
  }).join('\n  ')}
</div>
`;
}