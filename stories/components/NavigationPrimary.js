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
<nav id="nav-primary" class="nav-primary" aria-label="Primary">
  <div id="primary">
    <ul>
      ${navItems.map((item) => {
          return `<li><a href="${item.url ? item.url : '#' }">${item.label}</a></li>`;
        }).join('\n      ')}
    </ul>
  </div>
</nav>
  `;
}
