/**
 * Card component
 * @param {Object} props - Component properties
 * @param {string} props.title - The title of the card
* @param {string} props.label - The label of the card 
* @param {boolean} props.showImage - Whether to show the card image
 * @param {string} props.summary - The summary of the card
 * @param {string} props.link - The link of the card
 * @param {('default'|'horizontal'|'stacked' | 'compact')} [props.layout='default'] - The layout of the card
 * @returns {HTMLElement} - The card element
 */
export default function Card(props) {
  const {
    title,
    label,
    showImage = true,
    image,
    summary,
    link,
    layout = 'default',
    backgroundColor,
  } = props;

  const container = document.createElement('div');
  container.className = 'card-container';
  const classes = ['card',`${layout === 'default' ? '' : ` card--${layout}`}`,`${backgroundColor !== 'none' ? ` bg--${backgroundColor}` : ''}`];

  if (showImage) {
  container.innerHTML = `
  <div class="${ classes.join('') }">
    ${image ? `<figure class="card-image"><img src="${image}" width="600" height="400" alt=""></figure>` : '<figure class="card-image"><img src="/images/placeholder-campus-1-600x400.jpg" width="600" height="400" alt=""></figure>'}
    <div class="card-body">
      ${label ? `<p class="card-label">${label}</p>` : ''}
      <h2 class="card-title"><a class="card-link" href="${link}">${title}</a></h2>
      <p class="card-summary">${summary}</p>
    </div>
  </div>
`;
  } else {
  container.innerHTML = `
  <div class="${ classes.join(' ') }">
    <div class="card-body">
      ${label ? `<p class="card-label">${label}</p>` : ''}
      <h2 class="card-title"><a class="card-link" href="${link}">${title}</a></h2>
      <p class="card-summary">${summary}</p>
    </div>
  </div>
`;
  }

  return container;
}