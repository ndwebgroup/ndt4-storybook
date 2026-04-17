/**
 * Home components
 * @param {Object} props - Component properties
 * @param {boolean} props.navTop - If true, navigation is at the top
 * @param {boolean} props.fullWidth - If true, page secondary is full width
 * @param {string} [props.siteTitle=''] - Title of the site
 * @param {string} [props.pageContent=''] - HTML content for the main area of the home page
 * @param {select} [props.heroLayout=''] - Layout style for the hero (e.g., 'inset', 'inline')
 * @param {('Cards'|'News'|'Events'|'Feature')} [props.bannerOptions=''] - Selected banner options
 * @returns {string} - The home HTML
 */

import SiteHeader from '../collections/SiteHeader.js';
import PageHeaderDefault from '../collections/PageHeader/PageHeaderDefault.js';
import PageHeaderFade from '../collections/PageHeader/PageHeaderFade.js';
import PageHeaderInset from '../collections/PageHeader/PageHeaderInset.js';
import PageHeaderContainer from '../collections/PageHeader/PageHeaderContainer.js';
import PageHeaderScreen from '../collections/PageHeader/PageHeaderScreen.js';
import NavigationSidebar from '../components/NavigationSidebar.js';
import Banner from '../collections/Banners/BannerDefault.js';
import { defaultNavigationItems } from '../components/NavigationPrimary.js';
import Card from '../components/Cards/Card.js';
import NewsCard from '../components/Cards/NewsCard.js';
import EventCard from '../components/Cards/EventCard.js';
import SiteFooter from '../collections/SiteFooter.js';

export default function Home(props) {
  const {
    heroLayout = 'Default',
    pageTitle = '',
    pageLede = '',
    pageCopy = `<h2>Welcome to Department Title</h2>
    <p>This is a sample home page layout. Use the controls to customize the content.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,
    navTop = false,
    fullWidth = false,
    bannerOptions = '',
  } = props;
  
  const container = document.createElement('div');
  const navStateClass = navTop ? 'nav-top--true page--full-width' : 'nav-top--false';
  container.className = `wrapper ${navStateClass}`;
  container.id = 'wrapper';

  container.innerHTML = `
  ${SiteHeader({ siteName:'Department Title', showNavigation:navTop, showNavButton:false, markRight:false, groupModifier:`${navTop === true ? 'header-group--inline-xl' : ''}` })}
    <main id="content" class="site-content">
      ${heroLayout === 'Default' ? PageHeaderDefault({ pageTitle:pageTitle, pageLede:pageLede, showFeaturedImage:true }) : ''}
      ${heroLayout === 'Fade' ? PageHeaderFade({ pageTitle:pageTitle, pageLede:pageLede, showFeaturedImage:true }) : ''}
      ${heroLayout === 'Inset' ? PageHeaderInset({ pageTitle:pageTitle, pageLede:pageLede, showFeaturedImage:true }) : ''}
      ${heroLayout === 'Container' ? PageHeaderContainer({ pageTitle:pageTitle, pageLede:pageLede, showFeaturedImage:true }) : ''}
      ${heroLayout === 'Screen' ? PageHeaderScreen({ pageTitle:pageTitle, pageLede:pageLede, showFeaturedImage:true }) : ''}
      <div class="page-primary${navTop ? ' full-width' : ''}">
        <div class="section home-primary${navTop ? ' col--md' : ''}">${pageCopy}</div>
      </div>
      <div class="page-secondary${fullWidth ? ' full-width' : ''}"></div>
      <div class="page-sidebar">
        ${NavigationSidebar({ items: defaultNavigationItems })}
      </div>
    </main>
    ${SiteFooter({ siteName:'Department Title' })}
`;

const bannerWidth = fullWidth ? 'full-width' : 'default';

const pageSecondary = container.querySelector('.page-secondary');
if (bannerOptions.includes('Cards')) {
    pageSecondary.innerHTML += `
      <section class="section section--home-cards">
        <ul class="grid grid-lg-3">
          ${Card({ label:``, title:'Academic Excellence', showImage:true, link:'#', wrapperTag:'li' }).outerHTML}
          ${Card({ label:``, title:'Research Opportunities', showImage:true, link:'#', wrapperTag:'li' }).outerHTML}
          ${Card({ label:``, title:'Student Success', showImage:true, link:'#', wrapperTag:'li' }).outerHTML}
        </ul>
      </section>
    `
  }
if (bannerOptions.includes('News')) {
    pageSecondary.innerHTML += `
      <section class="section section--home-news">
        <h2 class="section-title">Latest News</h2>
        <ul class="grid grid-lg-3">
          <li>${NewsCard({ label:``, title:'New Research Initiative Launched', showImage:true, link:'#', publishDate:`September 9, 2025` }).outerHTML}</li>
          <li>${NewsCard({ label:``, title:'Department Receives Major Grant', showImage:true, link:'#', publishDate:`August 22, 2025` }).outerHTML}</li>
          <li>${NewsCard({ label:``, title:'Upcoming Events in the Community', showImage:true, link:'#', publishDate:`August 15, 2025` }).outerHTML}</li>
        </ul>
      </section>
    `
  }
  if (bannerOptions.includes('Events')) {
    pageSecondary.innerHTML += `
      <section class="section section--home-events">
        <h2 class="section-title">Upcoming Events</h2>
        <ul class="grid grid-lg-3">
          <li>${EventCard({ title: 'Big Party at the Art Museum', startDate: '2025-09-22T10:00', endDate: '2025-09-22T12:00', location: 'Raclin Murphy Art Museum', link: '#', variant:`compact`}).outerHTML}</li>
          <li>${EventCard({ title: 'Community Meeting', startDate: '2025-10-15T18:00', endDate: '2025-10-15T20:00', location: 'Bond Hall', link: '#', variant:`compact`}).outerHTML}</li>
          <li>${EventCard({ title: 'Charity Run', startDate: '2025-11-05T08:00', endDate: '2025-11-05T11:00', location: 'Joyce Center - Gate 2', link: '#', variant:`compact`}).outerHTML}</li>
        </ul>
      </section>
    `
  }
  if (bannerOptions.includes('Feature')) {
    pageSecondary.innerHTML += `
      ${Banner({ bannerWidth:'default', media:'image', order:'default', headingTag:'h2', title:'Spotlight on Faculty Research', titleSize:'default', summary:'Discover the groundbreaking work being done by our faculty members across various disciplines.', backgroundColor:'brand-blue-dark', backgroundWidth:bannerWidth })}
    `
  }
  return container.outerHTML;
}
