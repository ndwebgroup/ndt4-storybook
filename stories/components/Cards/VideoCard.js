import Video from '../Video.js';

/**
 * Video Card component
 * A default card whose media is the dialog-style Video (thumbnail opens a modal).
 * @param {Object} props - Component properties
 * @param {string} props.title - The title of the card
 * @param {string} props.label - The label of the card
 * @param {string} props.summary - The summary of the card
 * @param {string} props.videoId - The YouTube video id
 * @param {('default'|'outline'|'minimal'|'ornamental')} [props.playStyle='default'] - Play button style
 * @param {('default'|'horizontal'|'stacked'|'compact')} [props.layout='default'] - The layout of the card
 * @returns {HTMLElement} - The card element
 */
export default function VideoCard(props) {
  const {
    title,
    label,
    summary,
    videoId = 'p_vC10eq474',
    playStyle = 'default',
    wrapperTag = 'div',
    headingTag = 'h2',
    layout = 'default',
    modifier = '',
    backgroundColor,
  } = props;

  const container = document.createElement(wrapperTag);
  container.className = 'card-container';
  const classes = ['card', `${layout === 'default' ? '' : ` card--${layout}`}`];

  if (modifier) classes.push(` ${modifier}`);
  if (backgroundColor && backgroundColor !== 'none') classes.push(` bg--${backgroundColor}`);

  // The title is intentionally not a stretched .card-link: its overlay would
  // sit on top of the video and block the dialog link.
  container.innerHTML = `
  <div class="${classes.join('')}">
    <div class="card-body">${label ? `\n      <p class="card-label">${label}</p>` : ''}
      <${headingTag} class="card-title">${title}</${headingTag}>
      ${summary ? `<p class="card-summary">${summary}</p>` : ''}
    </div>
  </div>
`;

  const media = document.createElement('div');
  media.className = 'card-image';
  media.appendChild(Video({ style: 'dialog', videoId, playStyle, playText: '' }));
  container.querySelector('.card').insertAdjacentElement('afterbegin', media);

  return container;
}
