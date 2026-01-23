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

import SiteHeader from '../collections/SiteHeader.js';
import NavigationSidebar from '../components/NavigationSidebar.js';
import Breadcrumb from '../components/Breadcrumb.js';
import Byline from '../components/Byline.js';
import SocialShare from '../components/SocialShare.js';
import { defaultNavigationItems } from '../components/NavigationPrimary.js';
import SiteFooter from '../collections/SiteFooter.js';

export default function NewsLanding(props) {
  const {
    title = '',
    featuredImage = false,
    publishDate = new Date().toISOString(),
    pageCopy = `<p>This is an example of a news landing page. It features details about a specific news item, including the date, time, location, and a description of what attendees can expect.</p>
     <p>Additional information about the news item can be included here, such as speakers, agenda, and registration details.</p>`,
    navTop = true,
  } = props;
  
  const container = document.createElement('div');
  const navStateClass = navTop ? 'nav-top--true page--full-width' : 'nav-top--false';
  container.className = `wrapper ${navStateClass}`;
  container.id = 'wrapper';

  const publishDateObj = new Date(publishDate);

  const publishDateFormatted = publishDateObj.toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  const publishDateISO = publishDateObj.toISOString().split('T')[0] + 'T' +
                      publishDateObj.toTimeString().substring(0, 5) + '-05:00';


  container.innerHTML = `
  ${SiteHeader({ siteName:'Department Title', showNavigation:navTop, showNavButton:false, markRight:false })}
    <main id="content" class="site-content">
        <article class="article article-page-wrapper" typeof="NewsArticle"> 
          <header class="page-header article-header">
            <div class="page-title-wrapper">
              ${Breadcrumb({ items: [ { text: 'Home', link: '#' }, { text: 'News', link: '#' }, { text: title, link: '#' } ] })}
              <h1 class="entry-title entry-title" property="headline" data-length="${title.length}">${title}</h1>
              <div class="meta-share-group grid grid-md-2">
                <div class="meta">
                  <p class="meta-item publish-info">
                    <time property="datePublished" class="published" datetime="${publishDateISO}">
                      <span class="visually-hidden">Published:</span>${publishDateFormatted}</time>
                  </p>
                  ${Byline({ name: 'Example Author', title: 'Staff Writer', link: '#', image: 'image' }).outerHTML}
                  <meta property="image" content="${featuredImage ? '/images/placeholder-campus-1-1200x675.jpg' : ''}">
                  <meta property="dateModified" content="TODO_LAST_MODIFIED_DATE_HERE">
                  <link property="publisher" resource="#siteorg">
                </div>
                ${SocialShare({ url: '#', title: title, via: 'Example', hashtags: 'example,events' }).outerHTML}
              </div>
            </div>
          </header> 
          <div class="page-primary article-content entry-content" property="mainEntityOfPage">
            ${featuredImage ? `
            <figure class="image-right">
              <img src="/images/placeholder-campus-1-1200x675.jpg" width="1200" height="675" alt="${title}">
            </figure>
            ` : ''}
            ${pageCopy}
          </div>

          <footer class="page-secondary article-footer">
            <div class="meta-share-group">
              <div class="meta-tags">
                <p class="meta-label">Posted In:</p>
                <ul class="meta-list">
                  <li><a class="tag" href="#">Calendar Name</a></li>
                </ul>
              </div>
              ${SocialShare({ url: '#', title: title, via: 'Example', hashtags: 'example,events' }).outerHTML}
            </div>
          </footer>
          <div class="page-sidebar">
            ${NavigationSidebar({ items: defaultNavigationItems })}
          </div>
        </article>
    </main>
    ${SiteFooter({ siteName:'Department of Example' })}
`;
  return container.outerHTML;
}
