/**
 * Sidebar Navigation component
 */
export default function NavigationSidebar(args) {
  const { items = [] } = args;

  return `
  <nav class="nav-site nav-site--section" aria-label="Section">
  <div id="nav_sub">
    <ul>
      ${items.map((item, index) => {
          const isLast = index === items.length - 1;
          return `<li><a href="${item.href}">${item.text}</a></li>`;
        }).join('\n      ')}
    </ul>
  </div>
</nav>
  `;
}