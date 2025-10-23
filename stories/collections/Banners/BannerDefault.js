/**
 * Banner component
 * @param {Object} props - Component properties
 * @param {('image'|'video'|'none')} [props.media='image'] - Image placement for the banner
 * @param {('default'|'reversed')} [props.order='default'] - Image placement for the banner
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
import Video from '/stories/components/Video';

export default function Banner(props) {
  const container = document.createElement('div');
  const { bannerWidth, media, order, headingTag, label, title, titleSize, summary, buttons, buttonList, backgroundColor } = props;

  container.className = `section align-center${media !== 'none' ? ' grid grid-md-2' : ''}${ bannerWidth !== 'default' ? ` col--${bannerWidth}` : '' }${ backgroundColor !== 'none' ? ` bg--${backgroundColor} bg--full-bleed` : '' }`;

  let mediaHTML = ''

  switch(media) {
    case 'image':`}`
      mediaHTML = `<figure class="section-media${order == `default` ? `` : ` order-md-2`}"><img src="/images/placeholder-campus-3-1600x900.jpg" width="1600" height="900" alt=""></figure>`;
      break;
    case 'video':
      // Create an empty placeholder for the video that we'll fill later
      mediaHTML = `<div class="section-media${order == `default` ? `` : ` order-md-2`}"></div>`;
      break;
    default:
      mediaHTML = ``;
  }
  // Create banner secondary content first without buttons
  container.innerHTML = `
  ${mediaHTML}
  <div class="section-content">
    ${title ? `<${headingTag} class="section-title${titleSize == 'default' ? '' : ` section-title--${titleSize}`}">${title}</${headingTag}>` : ''}
    ${summary ? `<p>${summary}</p>` : ''}
  </div>
`

  // Add the video element if media type is video
  if (media === 'video') {
    const videoContainer = container.querySelector('.section-media');
    const videoElement = Video({ style:'placeholder', videoId:'p_vC10eq474', playStyle:'default', playText:'' });
    videoElement.className += ' mb-0'; // Add margin-block 0 to the video element
    videoContainer.appendChild(videoElement);
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