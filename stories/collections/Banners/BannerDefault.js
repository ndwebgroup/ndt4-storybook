/**
 * Banner component
 * @param {Object} props - Component properties
 * @param {('image'|'video'|'none')} [props.media='image'] - Image placement for the banner
 * @param {('left'|'right'|'stacked')} [props.mediaAlignment='left'] - Image placement for the banner
 * @param {string} props.label - The label of the banner
 * @param {string} [props.headingTag='h2'] - The heading tag to use for the title
 * @param {string} props.title - The title of the banner
 * @param {string} props.titleSize - The title size of the banner
 * @param {string} props.summary - The summary of the banner
 * @returns {HTMLElement} - The banner element
 */

import Button from '/stories/components/Buttons/Button.js';
import Video from '/stories/components/Videos';

export default function Banner(props) {
  const container = document.createElement('div');
  const { media, mediaAlignment, headingTag, label, title, titleSize, summary, buttons, buttonList } = props;

  container.className = `section section--banner grid grid-md-2`

  let mediaHTML = ''

  switch(media) {
    case 'image':
      container.className += ` banner--media-${mediaAlignment}`
      mediaHTML = `<figure class="banner-media banner-image"><img src="/images/placeholder-campus-3-1600x900.jpg" width="1600" height="900" alt=""></figure>`;
      break;
    case 'video':
      container.className += ` banner--media-${mediaAlignment}`
      // Create an empty placeholder for the video that we'll fill later
      mediaHTML = `<div class="banner-media banner-video"></div>`;
      break;
    default:
      mediaHTML = ``;
  }
  // Create banner body content first without buttons
  container.innerHTML = `
  ${mediaHTML}
  <div class="banner-body">
    ${label ? `<p class="banner-label">${label}</p>` : ''}
    <${headingTag} class="banner-title banner-title--${titleSize}">${title}</${headingTag}>
    ${summary ? `<p>${summary}</p>` : ''}
  </div>
`

  // Add the video element if media type is video
  if (media === 'video') {
    const videoContainer = container.querySelector('.banner-media.banner-video');
    const videoElement = Video({ style:'placeholder', videoId:'p_vC10eq474', playStyle:'default' });
    videoContainer.appendChild(videoElement);
  }

  // Get the banner body element to append buttons properly
  const bannerBody = container.querySelector('.banner-body');

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