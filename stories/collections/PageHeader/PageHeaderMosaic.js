/**
 * PageHeader component
 * @param {Object} props - Component properties
 * @param {string} [props.pageTitle=''] - Title of the page
 * @param {string} [props.pageTitleSize=''] - Size of the page title (e.g., 'sm', 'md', 'lg')
 * @param {string} [props.pageLede=''] - Lede or subtitle of the page
 * @param {boolean} [props.showFeaturedImage=true] - Whether to show the featured image
 * @param {number} [props.imageCount=3] - Number of images to display in tiled layout
 * @returns {string} - The page header HTML
 */

import PageTitle from '../../components/PageTitle.js';

export default function PageHeaderMosaic(props) {
  const {
    pageTitle = '',
    pageTitleSize = '',
    pageLede = '',
    featuredImage = true,
    imageCount = 3,
  } = props

  // Create the hero HTML
  const container = document.createElement('div');
  container.className = `page-header page-header--inset`;

  const fImage = document .createElement('figure');
  fImage.className = 'page-image image--mosaic image--mosaic-reversed';
  fImage.innerHTML = `
  ${[...Array(imageCount)].map(() => `<img src="/images/placeholder-campus-3-1600x900.jpg" width="1600" height="900" alt="">`).join('')}`;

  container.innerHTML = `
      ${featuredImage ? fImage.outerHTML : ''}
      <div class="page-title-wrapper">
        ${PageTitle({ title: pageTitle, size: pageTitleSize })}
        ${pageLede ? `<p class="page-lede">${pageLede}</p>` : ''}
      </div>
  `;

  return container.outerHTML;
}
