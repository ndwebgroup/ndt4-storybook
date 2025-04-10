/**
 * Default items used in the Primary Navigation component
 */
export const defaultNavigationItems = [
  { label: 'Academics', url: '#' },
  { label: 'Admissions', url: '#' },
  { label: 'Research', url: '#' },
  { label: 'Global', url: '#' },
  { label: 'Faith', url: '#' },
  { label: 'Community', url: '#' },
  { label: 'About', url: '#' },
];

/**
 * Primary Navigation component
 * @param {Object} args - Component arguments
 * @param {Array} [args.items] - Navigation items array with label and url properties
 */
export default function NavigationPrimary(args) {
  const { items = defaultNavigationItems } = args;
  const navItems = Array.isArray(items) ? items : defaultItems;
  return `
<nav id="nav-top" class="nav-top" aria-label="Primary">
  <div id="primary">
    <ul>
      ${navItems.map((item) => {
          return `<li><a href="${item.url ? item.url : '#' }">${item.label}</a></li>`;
        }).join('\n      ')}
      <li class="nav-search"><button type="button" class="btn-search search-toggle" aria-label="Toggle search"><svg class="icon" data-icon="search" width="16" height="16"><use xlink:href="#icon-search"></use></svg></button></li>
    </ul>
  </div>
</nav>
  `;
}
