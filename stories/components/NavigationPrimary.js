/**
 * Primary Navigation component
 */
export default function NavigationPrimary(args) {
  const { items = [] } = args;

  return `
<nav id="nav-top" class="nav-top" aria-label="Primary">
  <div id="primary">
    <ul>
      ${items.map((item) => {
          return `<li><a href="${item.url ? item.url : '#' }">${item.label}</a></li>`;
        }).join('\n      ')}
      <li class="nav-search"><button type="button" class="btn-search search-toggle" aria-label="Toggle search"><svg class="icon" data-icon="search" width="16" height="16"><use xlink:href="#icon-search"></use></svg></button></li>
    </ul>
  </div>
</nav>
  `;
}