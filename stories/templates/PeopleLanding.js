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
import { defaultNavigationItems } from '../components/NavigationPrimary.js';
import Avatar from '../components/Avatar.js';
import SiteFooter from '../collections/SiteFooter.js';

export default function PeopleLanding(props) {
  const {
    personName = '',
    personTitle = '',
    personAddress = '123 Example St. Notre Dame, IN 46556',
    personPhone = '574-631-0000',
    personFax = '',
    personEmail = 'email@nd.edu',
    personWebsite = 'www.example.com',
    profileImage = true,
    personCopy = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,
    personBiography = '',
    personResearch = '',
    personEducation = '',
    navTop = false,
  } = props;
  
  const container = document.createElement('div');
  const navStateClass = navTop ? 'nav-top--true page--full-width' : 'nav-top--false';
  container.className = `wrapper ${navStateClass}`;
  container.id = 'wrapper';
  
  container.innerHTML = `
  ${SiteHeader({ siteName:'Department Title', showNavigation:navTop, showNavButton:false, markRight:false, groupModifier: 'inline-xl' })}
    <main id="content" class="site-content">
      <div class="page-header">
        <div class="page-title-wrapper">
          <h1 class="page-title person-name">${personName}</h1>
          ${personTitle ? `<p class="person-title">${personTitle}</p>` : ''}
        </div>
      </div>
      <div class="page-primary">
        <div class="grid grid-md-3">
        <div class="person-photo order-md-2">  
          ${profileImage ? `${Avatar({ size: 'xl', type:'placeholder' })}` : ''} 
          <dl class="list--grid">
            ${personAddress ? `<dt>Address</dt><dd>${personAddress}</dd>` : ''}
            ${personPhone ? `<dt>Phone</dt><dd><a href="tel:${personPhone}">${personPhone}</a></dd>` : ''}
            ${personFax ? `<dt>Fax</dt><dd>${personFax}</dd>` : ''}
            ${personEmail ? `<dt>Email</dt><dd><a href="mailto:${personEmail}">${personEmail}</a></dd>` : ''}
          </dl> 
          ${personWebsite ? `<a class="btn" href="${personWebsite}" rel="noopener">${personWebsite}</a>` : ''}
        </div>
          <div class="person-content span-md-2">
            ${personCopy ? `<div class="person-copy">${personCopy}</div>` : ''}
            ${personBiography ? `<div class="person-biography"><h2>Biography</h2>${personBiography}</div>` : ''}
            ${personResearch ? `<div class="person-research"><h2>Research</h2>${personResearch}</div>` : ''}
            ${personEducation ? `<div class="person-education"><h2>Education</h2>${personEducation}</div>` : ''}
          </div>
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
