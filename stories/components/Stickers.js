/**
Stickers component to showcase available stickers
 */
import { getSticker } from '../utils/stickerUtils.js';

export default function Stickers(args) {
  const { stickers = [], showNames = true, size = 'md' } = args;

  return `
  <div class="sticker-showcase">
  ${stickers.map(stickerId => {
  const stickerName = stickerId.replace('sticker-', '');
  return `<div class="sticker-item">
    ${getSticker(stickerId, '', '', size)}
    ${showNames ? `<span class="sticker-name">${stickerId}</span>` : ''}
  </div>`;
  }).join('\n  ')}
</div>
`;
}