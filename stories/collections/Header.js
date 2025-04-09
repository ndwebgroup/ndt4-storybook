/**
 * Header component
 * @param {Object} props - Component properties
 * @param {Array} [props.navHeaderLinks=[]] - Links for the navigation
 * @param {string} [props.siteName=''] - Name of the site
 * @returns {string} - The header HTML
 */

import NavigationPrimary from '/stories/components/NavigationPrimary';

export default function Header(props) {
  const {
    // Site organization props
    siteName = '',
  } = props;

  // Build nav header links HTML if needed
  const navHeaderLinks = [
    { label: 'Academics', url: '#' },
    { label: 'Admissions', url: '#' },
    { label: 'Research', url: '#' },
    { label: 'Global', url: '#' },
    { label: 'Faith', url: '#' },
    { label: 'Community', url: '#' },
    { label: 'About', url: '#' },
  ];

  const navElement = NavigationPrimary({ items:navHeaderLinks });


  // Need help with the following:
  // - Adding toggle to show/hide navigation for DIY sites
  // - Adding toggle for mega-menu icon (I can start on menu-menu build)
  // - Tieing navHeaderLinks control to imported NavigationPrimary component

  // Create the header HTML
  const headerHTML = `
    <header id="header" class="site-header">
    <p class="mark-header"><a href="https://www.nd.edu/">University of Notre Dame</a></p>
    
    <div class="site-title-group has-parent">
      <h1 id="site-title" class="site-title "><a href="/" accesskey="1" title="Homepage shortcut key = 1">${siteName}</a></h1>
    </div>

    <!-- Header Search/Nav  -->
    <div class="nav-header">
      ${navElement }
    </div>

    <!-- Mobile Navbar -->
    <div class="nav-mobile-util">
      <ul class="no-bullets">
        <li><a href="/"><svg class="icon" data-icon="home" width="16" height="16"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-home"></use></svg> Home</a></li>
        <li><button type="button" class="btn-search search-toggle"><svg class="icon" data-icon="search" width="16" height="16"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-search"></use></svg> Search</button></li>
        <li>
          <a href="#nav" class="nav-menu nav-skip">
          <svg version="1.1" class="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20 20" xml:space="preserve">
            <line class="ni ni1" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" x1="0.98" y1="2" x2="18.94" y2="2"></line>
            <line class="ni ni2" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" x1="0.98" y1="8.69" x2="18.94" y2="8.69"></line>
          </svg>
          <span class="ni ni3">Menu</span>
        </a>
        </li>
      </ul>
      <search title="Site search" role="search" class="nav-search-wrapper">
        <form method="get" action="/search/" id="search-navbar-mobile" class="search-form" role="search" aria-label="Site search">
          <input type="hidden" name="as_sitesearch" value="ndt4.conductor.nd.edu">
          <input type="hidden" name="entqr" value="3">
          <input type="search" name="q" class="search-input" id="search-input-navbar-mobile" placeholder="Search this site" title="type your search term" aria-label="Site Search input">
          <button type="submit" class="search-button" aria-label="Search"><svg class="icon" data-icon="search" width="16" height="16"><use xlink:href="#icon-search"></use></svg></button>
          <button type="button" class="search-close search-toggle" aria-label="Close Search"><svg class="icon" data-icon="close" width="16" height="16"><use xlink:href="#icon-close"></use></svg></button>
        </form>
      </search>
    </div>
  </header>
  `;

  return headerHTML;
}
