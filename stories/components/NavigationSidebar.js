/**
 * Sidebar Navigation component
 * @param {Object} args - Component properties
 * @param {Array} args.items - Array of navigation items
 * @param {string} [args.navClass='nav-site--section'] - CSS class for the navigation
 * @param {string} [args.ariaLabel='Section'] - ARIA label for the navigation
 * @returns {string} - HTML string for the navigation
 */
export default function NavigationSidebar(args) {
  const {
    items = [],
    navClass = 'nav-site--section',
    ariaLabel = 'Section',
    activeItem = null
  } = args;

  /**
   * Recursively renders navigation items with support for nested levels
   * @param {Array} items - Array of navigation items
   * @param {number} depth - Current depth level
   * @returns {string} - HTML string for the navigation items
   */
  const renderItems = (items, depth = 1) => {
    return items.map((item, index) => {
      const isFirst = index === 0;
      const isLast = index === items.length - 1;
      const hasChildren = item.children && item.children.length > 0;
      const isActive = activeItem === item.label || (item.active === true);
      const isCurrent = item.current === true;

      // Build CSS classes
      let classes = [];
      if (isFirst) classes.push('first');
      if (isLast) classes.push('last');
      if (hasChildren) classes.push('li-has-children');
      if (isActive) classes.push('active');
      if (item.cssClass) classes.push(item.cssClass);

      // Build anchor classes
      let anchorClasses = [];
      if (isCurrent) {
        anchorClasses.push('current');
        if (!hasChildren) anchorClasses.push('current-last');
      }

      // Build children HTML if they exist
      const childrenHTML = hasChildren
        ? `<ul class="nav-level-${depth + 1} depth_${depth + 1}">${renderItems(item.children, depth + 1)}</ul>`
        : '';

      // Build the list item
      return `<li class="${classes.join(' ')}"${item.id ? ` id="${item.id}"` : ''}>
        <a href="${item.url}"${anchorClasses.length ? ` class="${anchorClasses.join(' ')}"` : ''}${isCurrent ? ' aria-current="page"' : ''}>${item.label}</a>
        ${childrenHTML}
      </li>`;
    }).join('\n      ');
  };

  return `
  <nav class="nav-site ${navClass}" aria-label="${ariaLabel}">
    <div id="nav_sub">
      <ul class="nav-level-1 depth_1">
        ${renderItems(items)}
      </ul>
    </div>
  </nav>
  `;
}