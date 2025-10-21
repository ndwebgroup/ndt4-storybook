/**
 * PageHeader component
 * @param {Object} props - Component properties
 * @param {string} [props.pageTitle=''] - Title of the page
 * @param {string} [props.pageTitleSize=''] - Size of the page title (e.g., 'sm', 'md', 'lg')
 * @param {string} [props.pageLede=''] - Lede or subtitle of the page
 * @param {boolean} [props.showFeaturedImage=true] - Whether to show the featured image
 * @param {string} [props.imageUrl='/images/placeholder-campus-3-1600x900.jpg'] - URL of the featured image
 * @returns {string} - The page header HTML
 */

export default function PageHeader(props) {
  const {
    pageTitle = '',
    pageTitleSize = '',
    pageLede = '',
    layout = '',
    featuredImage = true,
    imageUrl = '/images/placeholder-campus-3-1600x900.jpg',
  } = props;

  // Create the hero HTML
  const container = document.createElement('div');
  container.className = `page-header${layout !== 'default' ? ` page-header--${layout}` : ''}`;

  // If featuredImage is true and layout is not 'inset', add the featured image
  if (featuredImage && layout !== 'inset') {
    container.classList.add('bg--dark');
  }

  container.innerHTML = `
      ${featuredImage ? `<figure class="page-image${layout !== `inset` ? ` bg--dark bg--gradient` : ``}" aria-hidden="true"><img src="${imageUrl ?? '/images/placeholder-campus-3-1600x900.jpg'}" width="1600" height="900" alt=""></figure>` : ''}
      <div class="page-title-wrapper">
        <h1 class="page-title${pageTitleSize !== 'default' ? ` page-title--${pageTitleSize}` : ''}">${pageTitle}</h1>
        ${pageLede ? `<p class="page-lede">${pageLede}</p>` : ''}
      </div>
  `;

  return container.outerHTML;
}
