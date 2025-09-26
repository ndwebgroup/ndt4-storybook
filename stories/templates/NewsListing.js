/**
 * News Listing components
 * @param {Object} props - Component properties
 * @param {boolean} props.navTop - If true, navigation is at the top
 * @param {string} [props.siteTitle=''] - Title of the site
 * * @param {string} [props.pageContent=''] - HTML content for the main area of the home page
 * @param {string} [props.heroLayout=''] - Layout style for the hero (e.g., 'inset', 'inline')
 * @returns {string} - The home HTML
 */

import SiteHeader from '../collections/SiteHeader.js';
import PageHeader from '../collections/PageHeader.js';
import NavigationSidebar from '../components/NavigationSidebar.js';
import { defaultNavigationItems } from '../components/NavigationPrimary.js';
import NewsCard from '../components/Cards/NewsCard.js';
import Pagination from '../components/Pagination.js';
import SiteFooter from '../collections/SiteFooter.js';

export default function NewsListing(props) {
  const {
    siteTitle = '',
    pageContent = '',
    navTop = true,
  } = props;
  
  const container = document.createElement('div');
  const navStateClass = navTop ? 'nav-top--true page--full-width' : 'nav-top--false';
  container.className = `wrapper ${navStateClass}`;
  container.id = 'wrapper';

  container.innerHTML = `
  ${SiteHeader({ siteName:siteTitle, showNavigation:navTop, showNavButton:false, markRight:false })}
    <main id="content" class="site-content">
      ${PageHeader({ pageTitle:`Latest News`, pageTitleSize:`default`, pageLede:``, heroLayout:`default`, showFeaturedImage:false })}
      <div class="page-primary">
        ${pageContent}
        <ol class="list--news no-bullets">
          <li>${NewsCard({ label:``, title:'New Research Initiative Launched', showImage:true, link:'#', publishDate:`September 9, 2025` }).outerHTML}</li>
          <li>${NewsCard({ label:``, title:'Department Receives Major Grant', showImage:true, link:'#', publishDate:`August 22, 2025` }).outerHTML}</li>
          <li>${NewsCard({ label:``, title:'Upcoming Seminar on Innovation', showImage:true, link:'#', publishDate:`August 15, 2025` }).outerHTML}</li>
          <li>${NewsCard({ label:``, title:'Alumni Spotlight: Success Stories', showImage:true, link:'#', publishDate:`August 1, 2025` }).outerHTML}</li>
          <li>${NewsCard({ label:``, title:'Faculty Member Wins Award', showImage:true, link:'#', publishDate:`July 18, 2025` }).outerHTML}</li>
          <li>${NewsCard({ label:``, title:'New Course Offerings This Fall', showImage:true, link:'#', publishDate:`July 5, 2025` }).outerHTML}</li>
          <li>${NewsCard({ label:``, title:'Community Outreach Programs Expand', showImage:true, link:'#', publishDate:`June 20, 2025` }).outerHTML}</li>
          <li>${NewsCard({ label:``, title:'Research Published in Top Journal', showImage:true, link:'#', publishDate:`June 10, 2025` }).outerHTML}</li>
          <li>${NewsCard({ label:``, title:'Student Achievements Recognized', showImage:true, link:'#', publishDate:`May 30, 2025` }).outerHTML}</li>
          <li>${NewsCard({ label:``, title:'Annual Conference Highlights', showImage:true, link:'#', publishDate:`May 15, 2025` }).outerHTML}</li>
        </ol>
        ${Pagination({ currentPage:1, totalPages:5, baseUrl:'#' }).outerHTML}
      </div>
      <div class="page-sidebar">
        ${NavigationSidebar({ items: defaultNavigationItems })}
      </div>
    </main>
    ${SiteFooter({ siteName:siteTitle })}
`;
  return container.outerHTML;
}
