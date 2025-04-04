import MediaMention from './MediaMention';
import Pagination from './Pagination';

/**
 * MediaMentionList component
 * @param {Object} props - Component properties
 * @param {Array} props.items - Array of media mention items
 * @param {string} [props.headingTag='h2'] - The heading tag to use for the titles
 * @param {boolean} [props.showPublication=true] - Whether to show the publication information
 * @param {boolean} [props.showDate=true] - Whether to show the publication date
 * @param {boolean} [props.showPeople=true] - Whether to show the mentioned people
 * @param {boolean} [props.showPagination=true] - Whether to show pagination
 * @param {number} [props.currentPage=1] - Current page for pagination
 * @param {number} [props.totalPages=7] - Total pages for pagination
 * @param {string} [props.baseUrl='#'] - Base URL for pagination links
 * @returns {HTMLElement} - The media mention list element
 */
export default function MediaMentionList(props) {
  const container = document.createElement('div');
  const {
    items = [],
    headingTag = 'h2',
    showPublication = true,
    showDate = true,
    showPeople = true,
    showPagination = true,
    currentPage = 1,
    totalPages = 7,
    baseUrl = '#'
  } = props;

  // Create list items
  const listItems = items.map(item => {
    const mentionElement = MediaMention({
      item,
      headingTag,
      showPublication,
      showDate,
      showPeople
    });

    return `<li>${mentionElement.innerHTML}</li>`;
  }).join('');

  // Create the list HTML
  const listHTML = `
    <ol class="no-bullets list-media">
      ${listItems}
    </ol>
  `;

  // Set the list HTML
  container.innerHTML = listHTML;

  // If pagination is enabled, create and append Pagination component
  if (showPagination) {
    const paginationWrapper = document.createElement('div');
    paginationWrapper.className = 'pagination-wrapper';

    const paginationElement = Pagination({
      currentPage,
      totalPages,
      baseUrl,
      showEllipsis: true,
      displayRange: 2
    });

    paginationWrapper.appendChild(paginationElement);
    container.appendChild(paginationWrapper);
  }

  return container;
}