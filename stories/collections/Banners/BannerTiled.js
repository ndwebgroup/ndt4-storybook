/**
 * BannerThree component
 * @param {Object} props - Component properties
 * @param {string} props.label - The label of the banner
 * @param {string} [props.headingTag='h2'] - The heading tag to use for the title
 * @param {string} props.title - The title of the banner
 * @param {('default'|'sm'|'md'|'lg'|'xl')} props.titleSize - The title size of the banner
 * @param {string} [props.imageCount='3'] - The amount of images in the banner
 * @param {string} props.summary - The summary of the banner
 * @param {string} props.imageModifiers - Additional modifier classes for the banner
 * @param {string} props.backgroundColor - The background color of the banner
 * @param {('sm'|'md'|'lg'|'xl'|'screen')} props.bannerWidth - The width of the banner
 * @returns {HTMLElement} - The banner element
 */

import Button from '/stories/components/Buttons/Button.js';

export default function BannerMulti(props) {
  const container = document.createElement('div');
  const { bannerWidth, order, imageCount, headingTag, label, title, titleSize, summary, buttons, buttonList, imageModifiers, backgroundColor } = props;

  container.className = `section grid grid-md-2 align-center${ bannerWidth !== 'default' ? ` col--${bannerWidth}` : '' }${ backgroundColor == 'none' ? '' : ` bg--${backgroundColor} bg--full-bleed` }`;

  // Limit imageCount to a maximum of 4 and ensure it's at least 1
  const count = Math.max(2, Math.min(parseInt(imageCount, 10) || 3, 4));
  let mediaHTML = `<figure class="section-media section-media--tiled${order == `default` ? `` : ` order-md-2 section-media--tiled-${order}`}${imageModifiers ? ` ${imageModifiers}` : ''}">
    ${Array.from({ length: count }).map(() => `<img src="/images/placeholder-campus-3-800x1400.jpg" width="800" height="1400" alt="Modern university campus with tall glass buildings surrounded by green lawns and trees under a clear sky, conveying a welcoming and vibrant academic atmosphere">`).join('')}
  </figure>`

  // Create banner body content first without buttons
  container.innerHTML = `
  ${mediaHTML}
  <div class="section-content">
    ${title ? `<${headingTag} class="section-title${titleSize == 'default' ? '' : ` section-title--${titleSize}`}">${title}</${headingTag}>` : ''}
    ${summary ? `<p>${summary}</p>` : ''}
  </div>
`

  // Get the banner body element to append buttons properly
  const bannerBody = container.querySelector('.section-secondary');

  // Handle label
  if (label) {
    const labelElement = document.createElement('p');
    labelElement.className = 'section-label';
    labelElement.textContent = label;
    bannerBody.insertBefore(labelElement, bannerBody.firstChild);
  }

  // Handle single button
  if (buttons) {
    const buttonContainer = document.createElement('p');
    buttonContainer.appendChild(Button(buttons));
    bannerBody.appendChild(buttonContainer);
  }

  // Handle button list
  if (buttonList && buttonList.length) {
    const buttonListContainer = document.createElement('ul');
    buttonListContainer.className = 'list--unstyled list--inline';

    buttonList.forEach(btn => {
      const buttonItem = document.createElement('li');
      buttonItem.appendChild(Button(btn));
      buttonListContainer.appendChild(buttonItem);
    });

    bannerBody.appendChild(buttonListContainer);
  }
  return container.outerHTML;
}