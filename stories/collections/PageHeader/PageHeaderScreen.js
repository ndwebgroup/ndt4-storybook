/**
 * PageHeaderScreen component
 * @param {Object} props - Component properties
 * @param {string} [props.pageTitle=''] - Title of the page
 * @param {string} [props.pageTitleSize=''] - Size of the page title (e.g., 'sm', 'md', 'lg')
 * @param {string} [props.pageLede=''] - Lede or subtitle of the page
 * @param {boolean} [props.showFeaturedImage=true] - Whether to show the featured image
 * @param {string} [props.imageUrl='/images/placeholder-campus-3-1600x900.jpg'] - URL of the featured image
 * @param {boolean} [props.backgroundGradient=true] - Whether to show the background gradient
 * @param {string} [props.backgroundColor='brand-blue'] - Background color of the page header
 * @param {string} [props.fadeDirection='left-to-right'] - Direction of the fade effect
 * @returns {string} - The page header HTML
 */

import PageTitle from '../../components/PageTitle.js';

export default function PageHeaderScreen(props) {
  const {
    pageTitle = '',
    pageTitleSize = '',
    pageLede = '',
    featuredImage = true,
    imageUrl = '/images/placeholder-campus-3-1600x900.jpg',
    backgroundGradient = true,
    backgroundColor = 'brand-blue',
    fadeDirection = 'left-to-right',
  } = props;

  var headerBackground = '';

  // Create the hero HTML
  const container = document.createElement('div');
  container.className = `page-header page-header--screen ${featuredImage === true ? 'bg--dark' : ''}`;

  container.innerHTML = `
    ${featuredImage ? `<figure class="page-image ${backgroundGradient ? 'bg--gradient' : 'bg--transparent'}${fadeDirection && fadeDirection !== 'to-right' ? ` bg--${fadeDirection}` : ''} bg--${backgroundColor}"><img src="${imageUrl ?? '/images/placeholder-campus-3-1600x900.jpg'}" width="1600" height="900" alt=""></figure>` : ''}
    <div class="page-title-wrapper">
      ${PageTitle({ title: pageTitle, size: pageTitleSize })}
    </div>
  `;

  const titleWrapper = container.querySelector('.page-title-wrapper');

  if (pageLede) {
    const lede = document.createElement('p');
    lede.className = 'page-lede';
    lede.textContent = pageLede;
    titleWrapper.innerHTML += `  ${lede.outerHTML}
    `;
  }

  return container.outerHTML;
}
