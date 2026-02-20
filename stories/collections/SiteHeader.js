/**
 * Header component
 * @param {Object} props - Component properties
 * @param {Array} [props.navHeaderLinks] - Optional custom links for the navigation (each with label and url properties)
 * @param {string} [props.siteName=''] - Name of the site
 * @param {string} [props.siteTagline=''] - Tagline of the site
 * @param {boolean} [props.showNavigation=true] - Whether to show the navigation
 * @param {boolean} [props.showNavButton=true] - Whether to show the navigation button
 * @param {boolean} [props.markRight=true] - Whether to align the mark to the right
 * @param {boolean} [props.showGlobalMenu=true] - Whether to show the global menu button
 * @param {string} [props.groupModifier=''] - Additional layout modifier classes
 * @returns {string} - The site header HTML
 */

// TODO:
// - Adding toggle for mega-menu icon (I can start on menu-menu build)

import NavigationPrimary from '/stories/components/NavigationPrimary';

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

  if (markRight) {
    utilHTML = showNavigation ? utilHTML : '';
  }

  // Create the site header HTML
  const headerHTML = document.createElement('header');
  headerHTML.id = 'header';
  headerHTML.className = `site-header${showGlobalMenu ? '' : ' global-nav-false'}`;
  headerHTML.innerHTML = `
  <a class="header-mark-mobile" href="https://www.nd.edu/" title="University of Notre Dame">
    <svg width="512" height="86" aria-hidden="true" alt="University of Notre Dame"><use xlink:href="#mobile-mark"></use></svg>
    <span class="visually-hidden">University of Notre Dame</span>
  </a>
  <div class="header-group${markRight ? ' header-group--logo' : ''}${groupModifier ? ` header-group--${groupModifier}` : ''}">
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

  return headerHTML.outerHTML;
}
