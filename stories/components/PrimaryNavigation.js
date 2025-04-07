/**
 * Primary Navigation component
 */
export default function PrimaryNavigation(args) {
  const { items = [] } = args;

  return `
<nav id="nav-top" class="nav-top" aria-label="Primary">
  <div id="primary">
    <ul>  
      ${items.map((item, index) => {
          const isLast = index === items.length - 1;
          return `<li><a href="${item.href}">${item.text}</a></li>`;
        }).join('\n      ')}
      <li class="nav-search"><button type="button" class="btn-search search-toggle" aria-label="Toggle search"><svg class="icon" data-icon="search" width="16" height="16"><use xlink:href="#icon-search"></use></svg></button></li>
    </ul>
  </div>
</nav>
  `;
}