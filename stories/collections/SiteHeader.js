/**
 * Header component
 * @param {Object} props - Component properties
 * @param {Array} [props.navHeaderLinks] - Optional custom links for the navigation (each with label, url, and optional children [{label, url}]). Children appear in the global menu.
 * @param {string} [props.siteName=''] - Name of the site
 * @param {string} [props.siteTagline=''] - Tagline of the site
 * @param {boolean} [props.showNavigation=true] - Whether to show the navigation
 * @param {boolean} [props.showNavButton=true] - Whether to show the navigation button
 * @param {boolean} [props.markRight=true] - Whether to align the mark to the right
 * @param {boolean} [props.showGlobalMenu=true] - Whether to show the global menu button
 * @param {string} [props.groupModifier=''] - Additional layout modifier classes
 * @returns {string} - The site header HTML
 */

import NavigationPrimary, { defaultNavigationItems } from '/stories/components/NavigationPrimary';

export default function SiteHeader(props) {
  const {
    siteName = '',
    siteTagline = '',
    showNavigation = true,
    showNavButton = true,
    showGlobalMenu = true,
    markRight = false,
    navHeaderLinks,
    groupModifier = '',
  } = props;

  // Only pass navHeaderLinks to NavigationPrimary if it's provided, otherwise let NavigationPrimary use its defaults
  const navElement = NavigationPrimary({
    ...(navHeaderLinks && { items: navHeaderLinks })
  });

  let utilHTML = `
  <div class="header-util">
    <div class="header-nav-toggle">
      <button class="btn--action global-menu-toggle" aria-label="Open global menu and search" aria-controls="global-menu" aria-haspopup="dialog">
        <svg class="icon-search-menu" alt="Toggle Global Menu"><use xmlns:xlink="https://www.w3.org/1999/xlink" xlink:href="#icon-search-menu"></use></svg>
        <svg class="icon-search" alt="Toggle Search"><use xmlns:xlink="https://www.w3.org/1999/xlink" xlink:href="#icon-search"></use></svg>
      </button>
    </div>
  </div>`;

  // Global menu dialog. With the global menu icon on, it shows the search and the
  // navigation (with children). With it off, the toggle is a search icon and the
  // dialog only shows the search.
  const menuItems = Array.isArray(navHeaderLinks) ? navHeaderLinks : defaultNavigationItems;
  const menuLinks = menuItems.map((item) => {
    const children = Array.isArray(item.children) && item.children.length
      ? `\n            <ul>\n              ${item.children.map((c) => `<li><a href="${c.url || '#'}">${c.label}</a></li>`).join('\n              ')}\n            </ul>`
      : '';
    return `<li><a href="${item.url || '#'}">${item.label}</a>${children}</li>`;
  }).join('\n          ');

  const globalMenuHTML = `
<dialog id="global-menu" class="global-menu${showGlobalMenu ? '' : ' global-menu--search'}" aria-label="${showGlobalMenu ? 'Global menu and search' : 'Search'}">
  <div class="global-menu-header">
    <div class="global-menu-search">
      <form class="search-form" role="search" action="https://search.nd.edu/" method="get">
        <input class="search-input" type="search" name="q" placeholder="Search" aria-label="Search">
        <button class="search-button btn--action" type="submit" aria-label="Submit search"><svg class="icon" aria-hidden="true" focusable="false"><use xlink:href="#icon-search"></use></svg></button>
      </form>
    </div>
    <form method="dialog" class="global-menu-close">
      <button class="btn--action" type="submit" aria-label="Close ${showGlobalMenu ? 'global menu' : 'search'}"><svg class="icon" aria-hidden="true" focusable="false"><use xlink:href="#icon-close"></use></svg></button>
    </form>
  </div>${showGlobalMenu ? `
  <div class="global-menu-body">
    <nav class="nav-global-menu" aria-label="Global menu">
      <ul>
          ${menuLinks}
      </ul>
    </nav>
    <nav class="nav-mobile" aria-label="Mobile menu">
      <ul>
          ${menuLinks}
      </ul>
    </nav>
  </div>
  <div class="global-menu-footer">
    <ul class="global-menu-utils list--inline">
      <li class="light-dark">
        <label>
          <span class="switch">
            <input type="checkbox" name="light-dark" class="light-dark-toggle">
            <span class="slider"><svg class="icon" aria-hidden="true" focusable="false"><use xlink:href="#icon-mode"></use></svg></span>
          </span>
          <span>Light/Dark</span>
        </label>
      </li>
    </ul>
  </div>` : ''}
</dialog>`;

  // Create the site header HTML
  const headerHTML = document.createElement('header');
  headerHTML.id = 'header';
  headerHTML.className = `site-header${showGlobalMenu ? '' : ' global-nav-false'}`;
  headerHTML.innerHTML = `
  <a class="header-mark-mobile" href="https://www.nd.edu/" title="University of Notre Dame">
    <svg width="512" height="86" aria-hidden="true" alt="University of Notre Dame"><use xlink:href="#mobile-mark"></use></svg>
    <span class="visually-hidden">University of Notre Dame</span>
  </a>
  <div class="header-group${markRight ? ' header-group--logo' : ''}${groupModifier ? ` ${groupModifier}` : ''}">
    <div class="header-title">
      <svg class="header-mark" width="250" height="60" aria-hidden="true" alt="University of Notre Dame"><use xlink:href="#academic-mark"></use></svg>
      <div class="header-title-name">
        <h1 id="site-title" class="site-title "><a href="/" accesskey="1" title="Homepage shortcut key = 1">${siteName}</a></h1>
      </div>
    </div>
    <div class="header-nav">
      ${showNavigation ? `${navElement}` : ''}
      ${utilHTML}
    </div>
  </div>
`;

// Add tagline if provided
if (siteTagline) {
    const titleContainer = headerHTML.querySelector('.header-title-name');
    const tagline = document.createElement('p');
    tagline.className = 'site-tagline';
    tagline.textContent = siteTagline;
    titleContainer.appendChild(tagline);
}

// Add nav button if specified
if (showNavButton) {
    const utilContainer = headerHTML.querySelector('.header-util');
    const navButton = document.createElement('div');
    navButton.className = 'header-nav-button';
    navButton.innerHTML = `<a class="btn btn--secondary" href="#">Nav Button</a>`;
    utilContainer.prepend(navButton);
}

  return headerHTML.outerHTML + globalMenuHTML;
}
