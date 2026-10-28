/**
 * Banner component
 * @param {Object} props - Component properties
 * @param {('sm'|'md'|'lg'|'xl'|'screen')} props.bannerWidth - The width of the banner
 * @param {('tiled'|'carousel')} props.variant - The variant of the testimonial in the banner
 * @param {string} props.label - The label of the banner
 * @param {string} [props.headingTag='h2'] - The heading tag to use for the title
 * @param {string} props.title - The title of the banner
 * @param {('default'|'sm'|'md'|'lg'|'xl')} props.titleSize - The title size of the banner
 * @param {string} props.summary - The summary of the banner
 * @param {string} props.backgroundColor - The background color of the banner
 * @param {('default'|'full-width')} [props.backgroundWidth='default'] - The background width of the banner
 * @returns {HTMLElement} - The banner element
 */

import QuoteStacked from '/stories/components/QuoteStacked';

import SectionTitle from '../../components/SectionTitle.js';
export default function Banner(props) {
  const container = document.createElement('section');
  const { bannerWidth, headingTag, label, title, titleSize, summary, backgroundColor, backgroundWidth, variant } = props;

  container.className = `section align-center${ bannerWidth !== 'default' ? ` col--${bannerWidth}` : '' }${ backgroundColor !== 'none' ? ` bg--${backgroundColor}` : '' }${ backgroundWidth == 'full-width' ? ' bg--full-bleed' : '' }`;

  // Create banner secondary content first without buttons
  container.innerHTML = `
  <div class="section-intro text-center col--sm">
    ${title ? `${SectionTitle({ title, size: titleSize, headingTag })}` : ''}
    ${summary ? `<p>${summary}</p>` : ''}
  </div>
  `
  const quoteElement = QuoteStacked({ text: '"As a premier Catholic research university, our research and learning drive insights, innovation, and impact for good around the world."', modifier:'bg--gray-extra-extra-light', layout:'left', cite:true, image:true });
  
  if (variant === 'carousel') {
    const carouselContainer = document.createElement('div');
    carouselContainer.className = `list--carousel-wrapper` ;
    carouselContainer.innerHTML = `
    <ul class="list--carousel snap-center list--carousel-lg">
      <li>${quoteElement.outerHTML}</li>
      <li>${quoteElement.outerHTML}</li>
      <li>${quoteElement.outerHTML}</li>
      <li>${quoteElement.outerHTML}</li>
      <li>${quoteElement.outerHTML}</li>
    </ul>  
    `;
    container.appendChild(carouselContainer);
  } else {
    container.appendChild(quoteElement);
  }

  // Get the banner body element to append buttons properly
  const bannerBody = container.querySelector('.section-content');

  // Handle label
  if (label) {
    const labelElement = document.createElement('p');
    labelElement.className = 'section-label';
    labelElement.textContent = label;
    bannerBody.prepend(labelElement);
  }

  return container.outerHTML;
}