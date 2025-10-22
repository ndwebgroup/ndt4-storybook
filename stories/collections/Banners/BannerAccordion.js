/**
 * Banner component
 * @param {Object} props - Component properties
 * @param {('sm'|'md'|'lg'|'xl'|'screen')} props.bannerWidth - The width of the banner
 * @param {string} props.label - The label of the banner
 * @param {string} [props.headingTag='h2'] - The heading tag to use for the title
 * @param {string} props.title - The title of the banner
 * @param {('default'|'sm'|'md'|'lg'|'xl')} props.titleSize - The title size of the banner
 * @param {string} props.summary - The summary of the banner
 * @param {string} props.backgroundColor - The background color of the banner
 * @returns {HTMLElement} - The banner element
 */

import Accordion from '/stories/components/Accordion.js';

export default function Banner(props) {
  const container = document.createElement('div');
  const { 
    bannerWidth, 
    headingTag, 
    label, 
    title, 
    titleSize, 
    summary, 
    backgroundColor, 
    accordions 
  } = props;

  container.className = `section details-group grid grid-ml-2${ bannerWidth !== 'default' ? ` col--${bannerWidth}` : '' }${ backgroundColor !== 'none' ? ` bg--${backgroundColor} bg--full-bleed` : '' }`;

  // Create banner secondary content
  container.innerHTML = `
  <div class="section-content">
    <${headingTag} class="section-title${titleSize == 'default' ? '' : ` section-title--${titleSize}`}">${title}</${headingTag}>
    ${summary ? `<p>${summary}</p>` : ''}
  </div>
  <ul class="details-group--aside-list section-images">

  </ul>
`
  // Get the banner body element
  const bannerBody = container.querySelector('.section-content');
  const bannerImages = container.querySelector('.section-images');

  // Handle accordions
  if (accordions && accordions.length > 0) {
    
    const accordionElement = Accordion({
      items: accordions.map(item => ({
        summary: item.summary,
        detail: item.detail
      }))
    });

    if (typeof accordionElement === 'string') {
      const temp = document.createElement('div');
      temp.innerHTML = accordionElement;
      Array.from(temp.childNodes).forEach(node => bannerBody.appendChild(node));
    } else {
      bannerBody.appendChild(accordionElement);
    }
  }

  // Handle accordion images
  if (accordions && accordions.length > 0) {
    accordions.forEach((item, index) => {
      const figure = document.createElement('figure');
      figure.className = 'details-group--aside';
      const img = document.createElement('img');
      img.src = `/images/placeholder-campus-${index + 1}-1600x900.jpg`;
      img.alt = item.imageAlt || `Accordion Image ${index + 1}`;
      img.width = 600;
      img.height = 400;
      figure.appendChild(img);
      bannerImages.appendChild(figure);
    });
  }

  // Handle label
  if (label) {
    const labelElement = document.createElement('p');
    labelElement.className = 'section-label';
    labelElement.textContent = label;
    bannerBody.prepend(labelElement);
  }

  return container.outerHTML;
}