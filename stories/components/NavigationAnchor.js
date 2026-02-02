/**
 * Default items used in the Anchor Navigation component
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
 * Anchor Navigation component
 * @param {Object} args - Component arguments
 * @param {Array} [args.items] - Navigation items array with label and url properties
 */
export default function NavigationAnchor(args) {
  const { items = defaultNavigationItems } = args;
  const navItems = Array.isArray(items) ? items : defaultItems;
  return `
<nav id="nav-anchor" class="nav-anchor" aria-label="Anchor">
  <ul>
    ${navItems.map((item) => {
        return `<li><a href="${item.url ? item.url : '#' }">${item.label}</a></li>`;
      }).join('\n    ')}
  </ul>
</nav>
  `;
}
