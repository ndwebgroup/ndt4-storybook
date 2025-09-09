/**
 * Home components
 * @param {Object} props - Component properties
 * @param {boolean} props.navTop - If true, navigation is at the top
 * @param {string} [props.siteTitle=''] - Title of the site
 * * @param {string} [props.pageContent=''] - HTML content for the main area of the home page
 * @param {string} [props.heroLayout=''] - Layout style for the hero (e.g., 'inset', 'inline')
 * @returns {string} - The home HTML
 */

import Header from '../collections/Header.js';
import Hero from '../collections/Hero.js';
import NavigationSidebar from '../components/NavigationSidebar.js';
import { defaultNavigationItems } from '../components/NavigationPrimary.js';
import NewsCard from '../components/Cards/NewsCard.js';
import EventCard from '../components/Cards/EventCard.js';
import Footer from '../collections/Footer.js';

export default function Home(props) {
  const {
    siteTitle = '',
    pageTitle = '',
    pageContent = '',
    navTop = false,
    heroLayout = ''
  } = props;
  
  const container = document.createElement('div');
  const sampleNews = NewsCard({
    title: 'Sample News Article Title',
    excerpt: '',
    showImage: true,
    label: '',
    link: '#',
  });
  const sampleEvent = EventCard({
    title: 'Sample Event Title',
    date: '2024-05-01T10:00',
    time: '10:00 AM - 12:00 PM',
    location: '',
    excerpt: 'Join us for an exciting event where we will discuss important topics and network with professionals in the field.',
    link: '#',
    variant:'compact',
  });
  container.innerHTML = `
  ${Header({ siteName:siteTitle, showNavigation:navTop, showNavButton:false, markRight:false })}
    <main id="content" class="site-content">
      ${Hero({ pageTitle:pageTitle, pageLede:``, heroLayout:heroLayout, showFeaturedImage:true })}
      <div class="page-primary">
        ${pageContent}
        <section class="section section--home-news">
          <h2 class="section-title">Latest News</h2>
          <div class="grid grid-lg-3">
            ${sampleNews.outerHTML}
            ${sampleNews.outerHTML}
            ${sampleNews.outerHTML}
          </div>
        </section>

        <section class="section section--home-events">
          <h2 class="section-title">Upcoming Events</h2>
          <div class="grid grid-lg-3">
            ${sampleEvent.outerHTML}
            ${sampleEvent.outerHTML}
            ${sampleEvent.outerHTML}
          </div>
        </section>
      </div>
      <div class="page-sidebar">
        ${NavigationSidebar({ items: defaultNavigationItems })}
      </div>
    </main>
    ${Footer({ siteName:`Department Title` })}
`;
  return container.innerHTML;
}
