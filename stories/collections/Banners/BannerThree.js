/**
 * BannerThree component
 * @param {Object} props - Component properties
 * @param {string} props.label - The label of the banner
 * @param {string} [props.headingTag='h2'] - The heading tag to use for the title
 * @param {string} props.title - The title of the banner
 * @param {string} props.titleSize - The title size of the banner
 * @param {string} props.summary - The summary of the banner
 * @returns {HTMLElement} - The banner element
 */

import Button from '/stories/components/Buttons/Button.js';

export default function BannerThree(props) {
  const container = document.createElement('div');
  const { mediaAlignment, headingTag, label, title, titleSize, summary, buttons, buttonList } = props;

  container.className = `section section--banner grid grid-md-2 banner--${mediaAlignment}`

  let mediaHTML = `
  <div class="banner-primary media--3">
    <figure class="banner-image"><img src="/images/placeholder-campus-1-800x1400.jpg" width="800" height="1400" alt=""></figure>
    <figure class="banner-image"><img src="/images/placeholder-campus-2-800x1400.jpg" width="800" height="1400" alt=""></figure>
    <figure class="banner-image"><img src="/images/placeholder-campus-3-800x1400.jpg" width="800" height="1400" alt=""></figure>
  </div>
  `

  // Create banner body content first without buttons
  container.innerHTML = `
  ${mediaHTML}
  <div class="banner-secondary">
    ${label ? `<p class="banner-label">${label}</p>` : ''}
    <${headingTag} class="banner-title banner-title--${titleSize}">${title}</${headingTag}>
    ${summary ? `<p>${summary}</p>` : ''}
  </div>
`

  // Get the banner body element to append buttons properly
  const bannerBody = container.querySelector('.banner-secondary');

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
  return container;
}