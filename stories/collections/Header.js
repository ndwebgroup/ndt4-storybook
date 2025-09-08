/**
 * Header component
 * @param {Object} props - Component properties
 * @param {Array} [props.navHeaderLinks] - Optional custom links for the navigation (each with label and url properties)
 * @param {string} [props.siteName=''] - Name of the site
 * @param {string} [props.siteTagline=''] - Tagline of the site
 * @param {boolean} [props.showNavigation=true] - Whether to show the navigation
 * @param {boolean} [props.showNavButton=true] - Whether to show the navigation button
 * @returns {string} - The header HTML
 */

// TODO:
// - Adding toggle for mega-menu icon (I can start on menu-menu build)

import NavigationPrimary, { defaultNavigationItems } from '/stories/components/NavigationPrimary';

export default function Header(props) {
  const {
    siteName = '',
    siteTagline = '',
    showNavigation = true,
    showNavButton = true,
    navHeaderLinks,
  } = props;

  // Only pass navHeaderLinks to NavigationPrimary if it's provided, otherwise let NavigationPrimary use its defaults
  const navElement = NavigationPrimary({
    ...(navHeaderLinks && { items: navHeaderLinks })
  });

  // Create the header HTML
  const headerHTML = `
    <header id="header" class="site-header">
    <a class="header-mark-mobile" href="https://www.nd.edu/" title="University of Notre Dame">
      <svg width="512" height="86" aria-hidden="true" alt="University of Notre Dame"><use xlink:href="#mobile-mark"></use></svg>
      <span class="visually-hidden">University of Notre Dame</span>
    </a>
    <div class="header-group">
      <div class="header-title">
        <svg class="header-mark" width="250" height="60" aria-hidden="true" alt="University of Notre Dame"><use xlink:href="#academic-mark"></use></svg>
        <div class="header-title-name">
          <h1 id="site-title" class="site-title "><a href="/" accesskey="1" title="Homepage shortcut key = 1">${siteName}</a></h1>
          ${siteTagline ? `<p class="site-tagline">${siteTagline}</p>` : ''}
        </div>
      </div>
      <div class="header-nav">
        ${showNavigation ? `${navElement}` : ''}
        <div class="header-util">
          ${showNavButton ? `<div class="header-nav-button"><a class="btn btn--secondary" href="#">Nav Button</a></div>` : ''}
          <div class="header-nav-toggle">
            <button class="btn--action global-menu-toggle" aria-label="Open global menu and search" aria-controls="global-menu" aria-haspopup="dialog"><svg alt="Global Menu"><use xmlns:xlink="https://www.w3.org/1999/xlink" xlink:href="#icon-search-menu"></use></svg></button>
          </div>
        </div>
      </div>
    </div>
  </header>
  `;

  return headerHTML;
}
