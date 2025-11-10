/**
 * Banner component
 * @param {Object} props - Component properties
 * @param {string} props.label - The label of the banner
 * @param {string} [props.headingTag='h2'] - The heading tag to use for the title
 * @param {string} props.title - The title of the banner
 * @param {('default'|'sm'|'md'|'lg'|'xl')} props.titleSize - The title size of the banner
 * @param {string} props.summary - The summary of the banner
 * @param {Object} [props.textAlign] - Text alignment for the banner content
 * @param {string} props.backgroundOverlay - The background overlay treatment of the banner
 * @param {string} props.backgroundOverlayColor - The background overlay color of the banner
 * @returns {HTMLElement} - The banner element
 */

import Button from '/stories/components/Buttons/Button.js';

export default function Banner(props) {
  const container = document.createElement('section');
  const { headingTag, label, title, titleSize, summary, textAlign, buttons, buttonList, backgroundOverlay, backgroundOverlayColor } = props;

  // Create banner body content first without buttons
  container.className = `section section--screen grid grid-md-2 bg--dark`;
  container.innerHTML = `
  <figure class="section-media section-media--bg${backgroundOverlay == 'full' ? ' bg--overlay' : ' bg--gradient'}${backgroundOverlayColor ? ` bg--${backgroundOverlayColor}` : ' bg--dark'}">
    <img src="/images/placeholder-campus-3-1600x900.jpg" alt="" width="1600" height="900">
  </figure>
  <div class="section-body${textAlign == 'center' ? ` text-center block-center span-md-2` : ''}">
    ${title ? `<${headingTag} class="section-title${titleSize == 'default' ? '' : ` section-title--${titleSize}`}">${title}</${headingTag}>` : ''}
    ${summary ? `<p>${summary}</p>` : ''}
  </div>
`
  // Get the banner body element to append buttons properly
  const bannerBody = container.querySelector('.section-body');

  // Add label if it exists
  if (label) {
    const labelElem = document.createElement('p');
    labelElem.className = 'section-label';
    labelElem.textContent = label;
    bannerBody.insertBefore(labelElem, bannerBody.firstChild);
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