/**
 * Event Landing components
 * @param {Object} props - Component properties
 * @param {string} [props.title=''] - Title of the site
 * @param {boolean} props.featuredImage - Whether the event has a featured image 
 * @param {string} props.startDate - The start date/time of the event (ISO string)
 * @param {string} props.endDate - The end date/time of the event (ISO string)
 * @param {boolean} props.allDay - Whether the event is all day
 * @param {string} props.location - The location of the event
 * @param {string} [props.pageContent=''] - HTML content for the main area of the home page
 * @param {boolean} props.repeatDate - Whether the date is repeated (for grouping events by date)
 * @returns {string} - The HTML
 */

import Header from '../collections/Header.js';
import NavigationSidebar from '../components/NavigationSidebar.js';
import Breadcrumb from '../components/Breadcrumb.js';
import SocialShare from '../components/SocialShare.js';
import { defaultNavigationItems } from '../components/NavigationPrimary.js';
import Footer from '../collections/Footer.js';

export default function EventLanding(props) {
  const {
    title = '',
    featuredImage = false,
    startDate = new Date().toISOString(),
    endDate = new Date(new Date().getTime() + 60 * 60 * 1000).toISOString(),
    allDay = false,
    location = 'Main Building',
    pageContent = '',
    repeatDate = false,
    navTop = true,
  } = props;
  
  const container = document.createElement('div');
  const navStateClass = navTop ? 'nav-top--true page--full-width' : 'nav-top--false';
  container.className = `wrapper ${navStateClass}`;
  container.id = 'wrapper';

  const startDateObj = new Date(startDate);
  const endDateObj = new Date(endDate);

  const month = startDateObj.toLocaleString('en-US', { month: 'short' });
  const day = startDateObj.getDate();

  const startDateFormatted = startDateObj.toLocaleString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });

  const startTimeFormatted = startDateObj.toLocaleString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });

  const endTimeFormatted = endDateObj.toLocaleString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });

  const startDateISO = startDateObj.toISOString().split('T')[0] + 'T' +
                      startDateObj.toTimeString().substring(0, 5) + '-05:00';
  const endDateISO = endDateObj.toISOString().split('T')[0] + 'T' +
                    endDateObj.toTimeString().substring(0, 5) + '-05:00';


  container.innerHTML = `
  ${Header({ siteName:'Department of Example', showNavigation:navTop, showNavButton:false, markRight:false })}
    <main id="content" class="site-content">
      <div class="page-header"></div>
      <div class="page-primary">
        <article class="article" typeof="Event"> 
          ${Breadcrumb({ items: [ { text: 'Home', link: '#' }, { text: 'Events', link: '#' }, { text: title, link: '#' } ] })}
          <header class="article-header" style="view-transition-name:event-{{ event.id }}">
            <h1 class="article-title entry-title" property="name">${title}</h1>
            <div class="meta-share-group">
              <div class="meta">
                <link property="organizer" resource="#siteorg">
                <p class="meta-item" title="${startDateFormatted}, ${startTimeFormatted} - ${endTimeFormatted}">
                  <time property="startDate" datetime="${startDateISO}"><span class="icon" data-icon="clock">Time:</span>
                  <span class="date-string">${startDateFormatted}</span>${allDay ? ', All Day' : ` at ${startTimeFormatted}`}</time> ${!allDay ? ' - ' : ''}
                  <time property="endDate" datetime="${endDateISO}">${!allDay ? endTimeFormatted : ''}</time>
                  ${repeatDate ? `<span class="muted">(part of a series)</span>` : ''}
                </p>
                  ${location ? `<p class="meta-item" property="location" typeof="Place" ><span class="icon" data-icon="map-pin">Location:</span> <span property="name address">${location}</span>
                  <a href="{{ event.placemark_url }}" target="_blank" rel="noopener" aria-label="View on map.nd.edu">View on map <span class="icon" data-icon="external-link"></span></a>
                  </p>` : ''}
              </div>
              ${SocialShare({ url: '#', title: title, via: 'Example', hashtags: 'example,events' }).outerHTML}
            </div>
          </header> 
          <div class="article-content" property="description">
            ${featuredImage ? `
            <figure class="article-image">
              <img src="/images/placeholder-campus-1-1200x675.jpg" width="1200" height="675" alt="${title}" property="image">
            </figure>
            ` : ''}
            ${pageContent}
          </div>
          <footer class="article-footer">
            <div class="meta-tags">
              <p class="meta-label">Posted In:</p>
              <ul class="meta-list no-bullets list--inline">
                <li><a class="tag" href="#">Calendar Name</a></li>
              </ul>
            </div>

            <div class="article-actions">
              <a class="btn" href="#" target="_blank" rel="nofollow"><span class="icon" data-icon="calendar-add"></span> Add to Google Calendar</a>
              ${SocialShare({ url: '#', title: title, via: 'Example', hashtags: 'example,events' }).outerHTML}
            </div>
            
            ${repeatDate ? `
              <details class="article-series accordion accordion--highlight mb-4">
                <summary>All dates in this series</summary>
                <ul>
                {%- for entry in event.all_entries reversed %}
                  <li><a href="{{ entry.link }}">{{ entry.start_at | strftime:'%a %b %e, %Y' }}</a> {% if entry.id == event.id %}<strong>(Current)</strong>{% endif %}</li>
                {%- endfor %}
                </ul>
              </details>
            ` : ''}
            
          </footer>
        </article>
      </div>
      <div class="page-sidebar">
        ${NavigationSidebar({ items: defaultNavigationItems })}
      </div>
    </main>
    ${Footer({ siteName:'Department of Example' })}
`;
  return container.outerHTML;
}
