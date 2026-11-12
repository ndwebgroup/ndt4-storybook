/**
 * Default items used in the Primary Navigation component.
 * Items may include `children` ([{ label, url }]). The primary navigation only
 * shows the top-level items; children appear in the Site Header's global menu.
 */
export const defaultNavigationItems = [
  { label: 'Academics', url: '#', children: [
    { label: 'Programs', url: '#' },
    { label: 'Colleges, Schools, and Departments', url: '#' },
    { label: 'Centers and Institutes', url: '#' },
    { label: 'Libraries', url: '#' },
  ] },
  { label: 'Admissions', url: '#', children: [
    { label: 'Financial Aid', url: '#' },
    { label: 'Undergraduate Admissions', url: '#' },
    { label: 'Graduate Admissions', url: '#' },
    { label: 'International Admissions', url: '#' },
  ] },
  { label: 'Research', url: '#', children: [
    { label: 'A History of Impact', url: '#' },
    { label: 'Graduate Research', url: '#' },
    { label: 'Undergraduate Research', url: '#' },
    { label: 'Innovation and Entrepreneurship', url: '#' },
  ] },
  { label: 'Global', url: '#', children: [
    { label: 'Notre Dame Global', url: '#' },
    { label: 'Global Network', url: '#' },
    { label: 'Education Abroad', url: '#' },
  ] },
  { label: 'Faith', url: '#', children: [
    { label: 'Offices and Initiatives', url: '#' },
    { label: 'Centers and Institutes', url: '#' },
    { label: 'Congregation of Holy Cross', url: '#' },
  ] },
  { label: 'Community', url: '#', children: [
    { label: 'Undergraduate Student Life', url: '#' },
    { label: 'Graduate Student Life', url: '#' },
    { label: 'Student Health', url: '#' },
    { label: 'Arts and Culture', url: '#' },
    { label: 'Alumni and Friends', url: '#' },
  ] },
  { label: 'About', url: '#', children: [
    { label: 'Visit', url: '#' },
    { label: 'Mission', url: '#' },
    { label: 'Leadership', url: '#' },
    { label: 'History', url: '#' },
    { label: 'Contact', url: '#' },
  ] },
];

/**
 * Primary Navigation component
 * @param {Object} args - Component arguments
 * @param {Array} [args.items] - Navigation items array with label and url properties
 */
export default function NavigationPrimary(args) {
  const { items = defaultNavigationItems } = args;
  const navItems = Array.isArray(items) ? items : defaultNavigationItems;
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
