/**
 * Banner component
 * @param {Object} props - Component properties
 * @param {number} [props.imageCount=1] - Number of images to display in the banner
 * @param {('left'|'center')} [props.textOrientation='left'] - Text orientation for the banner
 * @param {('sm'|'md'|'lg'|'xl'|'screen')} props.bannerWidth - The width of the banner
 * @param {string} props.label - The label of the banner
 * @param {string} [props.headingTag='h2'] - The heading tag to use for the title
 * @param {string} props.title - The title of the banner
 * @param {('default'|'sm'|'md'|'lg'|'xl')} props.titleSize - The title size of the banner
 * @param {string} props.summary - The summary of the banner
 * @param {string} props.backgroundColor - The background color of the banner
 * @returns {HTMLElement} - The banner element
 */

import Button from '/stories/components/Buttons/Button.js';

export default function Banner(props) {
  const container = document.createElement('div');
  const { bannerWidth, imageCount, textOrientation, headingTag, label, title, titleSize, summary, buttons, buttonList, backgroundColor } = props;

  container.className = `section${ bannerWidth !== 'default' ? ` col--${bannerWidth}` : '' }${ backgroundColor !== 'none' ? ` bg--${backgroundColor} bg--full-bleed` : '' }`;

  let mediaHTML = '<img src="/images/placeholder-campus-3-1600x900.jpg" width="1600" height="900" alt="">'

  if (imageCount == 3) {
    mediaHTML = '<img src="/images/placeholder-campus-3-800x1400.jpg" width="800" height="1400" alt="">'
  }

  // Create banner secondary content first without buttons
  container.innerHTML = `
  <div class="section-intro${textOrientation ? ` text-${textOrientation}` : ''}">
    ${title ? `<${headingTag} class="section-title${titleSize == 'default' ? '' : ` section-title--${titleSize}`}">${title}</${headingTag}>` : ''}
    ${summary ? `<p>${summary}</p>` : ''}
  </div>
  ${imageCount > 1 ? `<figure class="section-media flex-auto">${mediaHTML.repeat(imageCount)}</figure>` : mediaHTML}

`
 
  // Get the banner body element to append buttons properly
  const bannerBody = container.querySelector('.section-intro');

  // Handle label
  if (label) {
    const labelElement = document.createElement('p');
    labelElement.className = 'section-label';
    labelElement.textContent = label;
    bannerBody.prepend(labelElement);
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