/**
 * Utility functions for working with SVG icons
 */

/**
 * Get an SVG icon from the icon sprite
 * @param {string} iconName - The name of the icon to use (without the 'icon-' prefix)
 * @param {string} className - Additional CSS classes to add to the SVG
 * @param {string} title - Optional title for accessibility
 * @param {string} size - Size of the icon (sm, md, lg, xl)
 * @returns {string} - SVG HTML as a string
 */
export function getIcon(iconName, className = '', title = '', size = '') {
  const iconId = iconName.startsWith('icon-') ? iconName : `icon-${iconName}`;
  const titleTag = title ? `<title>${title}</title>` : '';
  const sizeClass = size ? ` icon--${size}` : '';
  const classAttr = className ? ` class="icon${sizeClass} ${className}"` : ` class="icon${sizeClass}"`;

  return `<svg${classAttr} aria-hidden="${!title}" role="${title ? 'img' : 'presentation'}" focusable="false">
      ${titleTag}<use href="#${iconId}"></use>
    </svg>`;
}

/**
 * Get a list of all available icons in the icons-nd-base.svg file
 * @returns {Array} Array of icon IDs
 */
export function getAvailableIcons() {
  // Return all icon IDs found in the icons-nd-base.svg file
  return [
    //Interface
    'icon-search',
    'icon-hamburger',
    'icon-resize',
    'icon-refresh',
    'icon-sort-down',
    'icon-sort-up',
    'icon-plus',
    'icon-minus',
    'icon-check',
    'icon-box-arrow-up',
    'icon-calendar',
    'icon-calendar-add',
    'icon-map-pin',
    'icon-envelope-o',
    'icon-user',
    'icon-download',
    'icon-home',
    'icon-clock-o',
    'icon-history',
    'icon-external-link',
    'icon-close',
    'icon-lock',
    'icon-play',
    'icon-feed',
    'icon-mode',
    //Brands
    'icon-bluesky',
    'icon-linkedin',
    'icon-twitter-x',
    'icon-facebook',
    'icon-google',
    'icon-vimeo',
    'icon-youtube',
    'icon-snapchat',
    'icon-instagram',
    //Arrows
    'icon-arrow-left',
    'icon-arrow-right',
    'icon-arrow-up',
    'icon-arrow-down',
    'icon-angle-left',
    'icon-angle-right',
    //Alerts
    'icon-exclamation',
    'icon-success',
    'icon-info',
    'icon-question',
    'icon-flag',
    'icon-prohibited'
  ];
}