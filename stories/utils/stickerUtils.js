/**
 * Utility functions for working with SVG stickers
 */

/**
 * Get an SVG sticker from the sticker sprite
 * @param {string} stickerName - The name of the sticker to use (without the 'sticker-' prefix)
 * @param {string} className - Additional CSS classes to add to the SVG
 * @param {string} title - Optional title for accessibility
 * @param {string} size - Size of the sticker (sm, md, lg, xl)
 * @returns {string} - SVG HTML as a string
 */
export function getSticker(stickerName, className = '', title = '', size = '') {
  const stickerId = stickerName.startsWith('sticker-') ? stickerName : `sticker-${stickerName}`;
  const titleTag = title ? `<title>${title}</title>` : '';
  const sizeClass = size ? ` sticker--${size}` : '';
  const classAttr = className ? ` class="sticker${sizeClass} ${className}"` : ` class="sticker${sizeClass}"`;

  return `<svg${classAttr} aria-hidden="${!title}" role="${title ? 'img' : 'presentation'}" focusable="false">
      ${titleTag}<use href="#${stickerId}"></use>
    </svg>`;
}

/**
 * Get a list of all available sticker in the sticker-nd-base.svg file
 * @returns {Array} Array of sticker IDs
 */
export function getAvailableStickers() {
  // Return all stickers IDs found in the sticker-nd-base.svg file
  return [
    'sticker-backpack',
    'sticker-book',
    'sticker-calculator',
    'sticker-cap',
    'sticker-chalk-board',
    'sticker-computer',
    'sticker-dna',
    'sticker-globe',
    'sticker-earth',
    'sticker-easel',
    'sticker-microscope',
    'sticker-translate',
    'sticker-trophy',
  ];
}