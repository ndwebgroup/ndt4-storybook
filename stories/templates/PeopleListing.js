/**
 * Events Listing components
 * @param {Object} props - Component properties
 * @param {string} [props.pageCopy=''] - HTML content for the main area of the home page
 * @param {select} [props.format='grid'] - The format of the page, either 'grid' or 'list'
 * @returns {string} - The HTML
 */

import SiteHeader from '../collections/SiteHeader.js';
import NavigationSidebar from '../components/NavigationSidebar.js';
import { defaultNavigationItems } from '../components/NavigationPrimary.js';
import PeopleCard from '../components/Cards/PeopleCard.js';
import Pagination from '../components/Pagination.js';
import SiteFooter from '../collections/SiteFooter.js';

export default function PeopleListing(props) {
  const {
    pageCopy = '<p>This is an example of a people listing page. It features a selection of staff members displayed in a list or grid format. Each profile includes a name, title, summary, and link to their full profile.</p>',
    navTop = true,
    format = 'grid',
  } = props;
  
  const container = document.createElement('div');
  const navStateClass = navTop ? 'nav-top--true page--full-width' : 'nav-top--false';
  container.className = `wrapper ${navStateClass}`;
  container.id = 'wrapper';

  container.innerHTML = `
  ${SiteHeader({ siteName:'Department Title', showNavigation:navTop, showNavButton:false, markRight:false })}
    <main id="content" class="site-content">
      <div class="page-header">
        <div class="page-title-wrapper">
          <h1 class="page-title">People</h1>
        </div>
      </div>
      <div class="page-primary">
        ${pageCopy}
        <ul class="no-bullets ${format === 'grid' ? 'grid grid-md-2 grid-ml-3 grid-lg-4 grid-xl-5' : 'list--directory'}">
          <li>${PeopleCard({ name: 'Alice Johnson', title: 'Assistant Professor of Physics', summary:'', placeholder: true, layout: format === 'list' ? 'compact' : null }).outerHTML}</li>
          <li>${PeopleCard({ name: 'Bob Brown', title: 'Lecturer in Mathematics', summary:'', placeholder: true, layout: format === 'list' ? 'compact' : null }).outerHTML}</li>
          <li>${PeopleCard({ name: 'Carol White', title: 'Senior Researcher in Computer Science', summary:'', placeholder: true, layout: format === 'list' ? 'compact' : null }).outerHTML}</li>
          <li>${PeopleCard({ name: 'David Green', title: 'Professor of History', summary:'', placeholder: true, layout: format === 'list' ? 'compact' : null }).outerHTML}</li>
          <li>${PeopleCard({ name: 'Eva Blue', title: 'Assistant Professor of English', summary:'', placeholder: true, layout: format === 'list' ? 'compact' : null }).outerHTML}</li>
          <li>${PeopleCard({ name: 'Frank Black', title: 'Associate Professor of Economics', summary:'', placeholder: true, layout: format === 'list' ? 'compact' : null }).outerHTML}</li>
          <li>${PeopleCard({ name: 'Grace Yellow', title: 'Lecturer in Political Science', summary:'', placeholder: true, layout: format === 'list' ? 'compact' : null }).outerHTML}</li>
          <li>${PeopleCard({ name: 'Hank Purple', title: 'Senior Researcher in Sociology', summary:'', placeholder: true, layout: format === 'list' ? 'compact' : null }).outerHTML}</li>
          <li>${PeopleCard({ name: 'Jane Doe', title: 'Professor of Biology', summary:'', placeholder: true, layout: format === 'list' ? 'compact' : null }).outerHTML}</li>
          <li>${PeopleCard({ name: 'John Smith', title: 'Associate Professor of Chemistry', summary:'', placeholder: true, layout: format === 'list' ? 'compact' : null }).outerHTML}</li>
        </ul>
        ${Pagination({ currentPage:1, totalPages:5, baseUrl:'#' }).outerHTML}
      </div>
      <div class="page-sidebar">
        ${NavigationSidebar({ items: defaultNavigationItems })}
      </div>
    </main>
    ${SiteFooter({ siteName:"Department Title" })}
`;
  return container.outerHTML;
}
