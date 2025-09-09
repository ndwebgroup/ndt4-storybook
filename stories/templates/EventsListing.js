/**
 * Events Listing components
 * @param {Object} props - Component properties
 * @param {string} [props.siteTitle=''] - Title of the site
 * @param {string} [props.pageContent=''] - HTML content for the main area of the home page
 * @returns {string} - The HTML
 */

import Header from '../collections/Header.js';
import Hero from '../collections/Hero.js';
import NavigationSidebar from '../components/NavigationSidebar.js';
import { defaultNavigationItems } from '../components/NavigationPrimary.js';
import EventCard from '../components/Cards/EventCard.js';
import Pagination from '../components/Pagination.js';
import Footer from '../collections/Footer.js';

export default function EventsListing(props) {
  const {
    siteTitle = '',
    pageContent = '',
    navTop = true,
  } = props;
  
  const container = document.createElement('div');
  container.innerHTML = `
  ${Header({ siteName:siteTitle, showNavigation:navTop, showNavButton:false, markRight:false })}
    <main id="content" class="site-content">
      ${Hero({ pageTitle:`Upcoming Events`, pageLede:``, heroLayout:`inset`, showFeaturedImage:false })}
      <div class="page-primary">
        ${pageContent}
        <ol class="list--events no-bullets">
          <li>${EventCard({ title: 'Big Party at the Art Museum', startDate: '2025-09-22T10:00', endDate: '2025-09-22T12:00', location: 'Raclin Murphy Art Museum', link: '#'}).outerHTML}</li>
          <li>${EventCard({ title: 'Community Meeting', startDate: '2025-10-15T18:00', endDate: '2025-10-15T20:00', location: 'Bond Hall', link: '#'}).outerHTML}</li>
          <li>${EventCard({ title: 'Charity Run', startDate: '2025-11-05T08:00', endDate: '2025-11-05T11:00', location: 'Joyce Center - Gate 2', link: '#'}).outerHTML}</li>
          <li>${EventCard({ title: 'Tech Conference 2025', startDate: '2025-12-01T09:00', endDate: '2025-12-03T17:00', location: 'Stepan Center', link: '#'}).outerHTML}</li>
          <li>${EventCard({ title: 'Holiday Market', startDate: '2025-12-10T10:00', endDate: '2025-12-10T18:00', location: 'God Quad', link: '#'}).outerHTML}</li>
          <li>${EventCard({ title: 'New Year\'s Eve Celebration', startDate: '2025-12-31T20:00', endDate: '2026-01-01T01:00', location: 'University of Notre Dame', link: '#'}).outerHTML}</li>
          <li>${EventCard({ title: 'Spring Festival', startDate: '2026-03-20T11:00', endDate: '2026-03-20T16:00', location: 'Raclin Murphy Sculpture Park', link: '#'}).outerHTML}</li>
          <li>${EventCard({ title: 'Summer Concert Series', startDate: '2026-06-15T19:00', endDate: '2026-06-15T22:00', location: 'Debartolo Performing Arts Center', link: '#'}).outerHTML}</li>
          <li>${EventCard({ title: 'Art Exhibition Opening', startDate: '2026-07-10T17:00', endDate: '2026-07-10T20:00', location: 'Raclin Murphy Art Museum', link: '#'}).outerHTML}</li>
          <li>${EventCard({ title: 'Food Truck Festival', startDate: '2026-08-05T12:00', endDate: '2026-08-05T20:00', location: 'Hesburgh Library', link: '#'}).outerHTML}</li>
        </ol>
        ${Pagination({ currentPage:1, totalPages:5, baseUrl:'#' }).outerHTML}
      </div>
      <div class="page-sidebar">
        ${NavigationSidebar({ items: defaultNavigationItems })}
      </div>
    </main>
    ${Footer({ siteName:siteTitle })}
`;
  return container.innerHTML;
}
