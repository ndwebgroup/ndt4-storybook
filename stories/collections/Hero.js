/**
 * Hero component
 * @param {Object} props - Component properties
 * @param {string} [props.pageTitle=''] - Title of the page
 * @param {string} [props.pageLede=''] - Lede or subtitle of the page
 * @param {boolean} [props.showFeaturedImage=true] - Whether to show the featured image
 * @returns {string} - The hero HTML
 */

export default function Hero(props) {
  const {
    pageTitle = '',
    pageLede = '',
    heroLayout = '',
    showFeaturedImage = true,
  } = props;

  // Create the hero HTML
  const heroHTML = `
    <div class="page-header ${heroLayout ? `page-header--${heroLayout}` : ''} ${heroLayout !== `inset` ? `bg--dark` : ``}">
      ${showFeaturedImage ? `<figure class="page-image ${heroLayout !== `inset` ? `bg--dark bg--gradient` : ``}" aria-hidden="true"><img src="/images/placeholder-campus-3-1600x900.jpg" width="1600" height="900" alt=""></figure>` : ''}
      <div class="page-title-wrapper">
        <h1 class="page-title">${pageTitle}</h1>
        ${pageLede ? `<p class="page-lede">${pageLede}</p>` : ''}
      </div>
    </div>
  `;

  return heroHTML;
}
