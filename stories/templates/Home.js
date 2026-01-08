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

import PageHeaderInset from '../collections/PageHeaderInset.js';
import PageHeaderContainer from '../collections/PageHeaderContainer.js';
import PageHeaderScreen from '../collections/PageHeaderScreen.js';

import NavigationSidebar from '../components/NavigationSidebar.js';
import { defaultNavigationItems } from '../components/NavigationPrimary.js';
import NewsCard from '../components/Cards/NewsCard.js';
import EventCard from '../components/Cards/EventCard.js';
import SiteFooter from '../collections/SiteFooter.js';

export default function Home(props) {
  const {
    siteTitle = '',
    pageTitle = '',
    pageContent = '',
    navTop = false,
  } = props;
  
  const container = document.createElement('div');
  const navStateClass = navTop ? 'nav-top--true page--full-width' : 'nav-top--false';
  container.className = `wrapper ${navStateClass}`;
  container.id = 'wrapper';
  
  container.innerHTML = `
  ${SiteHeader({ siteName:siteTitle, showNavigation:navTop, showNavButton:false, markRight:false })}
    <main id="content" class="site-content">
      ${PageHeaderScreen({ pageTitle:pageTitle, pageLede:``, showFeaturedImage:true })}
      <div class="page-primary${navTop ? ' full-width' : ''}">
        <div class="section home-primary${navTop ? ' col--md' : ''}">${pageContent}</div>
        <section class="section section--home-news">
          <h2 class="section-title">Latest News</h2>
          <ul class="grid grid-lg-3">
            <li>${NewsCard({ label:``, title:'New Research Initiative Launched', showImage:true, link:'#', publishDate:`September 9, 2025` }).outerHTML}</li>
            <li>${NewsCard({ label:``, title:'Department Receives Major Grant', showImage:true, link:'#', publishDate:`August 22, 2025` }).outerHTML}</li>
            <li>${NewsCard({ label:``, title:'Upcoming Events in the Community', showImage:true, link:'#', publishDate:`August 15, 2025` }).outerHTML}</li>
          </ul>
        </section>

        <section class="section section--home-events">
          <h2 class="section-title">Upcoming Events</h2>
          <ul class="grid grid-lg-3">
            <li>${EventCard({ title: 'Big Party at the Art Museum', startDate: '2025-09-22T10:00', endDate: '2025-09-22T12:00', location: 'Raclin Murphy Art Museum', link: '#', variant:`compact`}).outerHTML}</li>
            <li>${EventCard({ title: 'Community Meeting', startDate: '2025-10-15T18:00', endDate: '2025-10-15T20:00', location: 'Bond Hall', link: '#', variant:`compact`}).outerHTML}</li>
            <li>${EventCard({ title: 'Charity Run', startDate: '2025-11-05T08:00', endDate: '2025-11-05T11:00', location: 'Joyce Center - Gate 2', link: '#', variant:`compact`}).outerHTML}</li>
          </ul>
        </section>
      </div>
      <div class="page-sidebar">
        ${NavigationSidebar({ items: defaultNavigationItems })}
      </div>
    </main>
    ${SiteFooter({ siteName:siteTitle })}
`;
  return container.outerHTML;
}
