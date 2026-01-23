/**
 * Home components
 * @param {Object} props - Component properties
 * @param {boolean} props.navTop - If true, navigation is at the top
 * @param {string} [props.siteTitle=''] - Title of the site
 * * @param {string} [props.pageContent=''] - HTML content for the main area of the home page
 * @param {string} [props.heroLayout=''] - Layout style for the hero (e.g., 'inset', 'inline')
 * @returns {string} - The home HTML
 */

import SiteHeader from '../collections/SiteHeader.js';
import NavigationSidebar from '../components/NavigationSidebar.js';
import PageHeaderDefault from '../collections/PageHeaderDefault.js';
import PageHeaderInset from '../collections/PageHeaderInset.js';
import { defaultNavigationItems } from '../components/NavigationPrimary.js';
import SiteFooter from '../collections/SiteFooter.js';

export default function DefaultPage(props) {
  const {
    pageTitle = '',
    featuredImage = false,
    pageCopy = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,
    navTop = false,
  } = props;
  
  const container = document.createElement('div');
  const navStateClass = navTop ? 'nav-top--true page--full-width' : 'nav-top--false';
  container.className = `wrapper ${navStateClass}`;
  container.id = 'wrapper';
  
  container.innerHTML = `
  ${SiteHeader({ siteName:'Department Title', showNavigation:navTop, showNavButton:false, markRight:false, groupModifier: 'inline-xl' })}
    <main id="content" class="site-content">
      ${navTop ? PageHeaderInset({ pageTitle:pageTitle, featuredImage:featuredImage }) : PageHeaderDefault({ pageTitle:pageTitle, featuredImage:false })}
      <div class="page-primary">
        <div class="${navTop ? ' col--md' : ''}">
        ${featuredImage && !navTop ? `<figure class="image-right"><img src="/images/placeholder-campus-3-1600x900.jpg" width="1600" height="900" alt=""></figure>` : ''}  
        ${pageCopy}
        </div>
      </div>
      <div class="page-sidebar">
        ${NavigationSidebar({ items: defaultNavigationItems })}
      </div>
    </main>
    ${SiteFooter({ siteName:'Department Title' })}
`;
  return container.outerHTML;
}
