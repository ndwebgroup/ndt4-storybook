/**
 * PageHeaderScreen component
 * @param {Object} props - Component properties
 * @param {string} [props.pageTitle=''] - Title of the page
 * @param {string} [props.pageTitleSize=''] - Size of the page title (e.g., 'sm', 'md', 'lg')
 * @param {string} [props.pageLede=''] - Lede or subtitle of the page
 * @param {boolean} [props.showFeaturedImage=true] - Whether to show the featured image
 * @param {string} [props.imageUrl='/images/placeholder-campus-3-1600x900.jpg'] - URL of the featured image
 * @returns {string} - The page header HTML
 */

import PageTitle from '../components/PageTitle.js';

export default function PageHeaderScreen(props) {
  const {
    pageTitle = '',
    pageTitleSize = '',
    pageLede = '',
    featuredImage = true,
    imageUrl = '/images/placeholder-campus-3-1600x900.jpg',
  } = props;

  // Create the hero HTML
  const container = document.createElement('div');
  container.className = `page-header page-header--screen ${featuredImage === true ? 'bg--dark' : ''}`;

  container.innerHTML = `
      ${featuredImage ? `<figure class="page-image bg--gradient bg--brand-blue"><img src="${imageUrl ?? '/images/placeholder-campus-3-1600x900.jpg'}" width="1600" height="900" alt=""></figure>` : ''}
      <div class="page-title-wrapper">
        ${PageTitle({ title: pageTitle, size: pageTitleSize })}
        ${pageLede ? `<p class="page-lede">${pageLede}</p>` : ''}
      </div>
  `;

  return container.outerHTML;
}
