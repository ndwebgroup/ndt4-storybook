/**
 * Creates a card component
 * @param {Object} props - Component properties
 * @param {string} props.title - The title of the card
 * @param {boolean} props.image - Whether to show the card image
 * @param {string} props.summary - The summary of the card
 * @param {string} props.link - The link of the card
 * @param {('primary'|'secondary'|'tertiary'|'neutral')} [props.backgroundColor='primary'] - The background color of the card
 * @returns {HTMLElement} - The card element
 */
export default function Card(props) {
  const {
    title,
    image = true,
    summary,
    link,
    backgroundColor = 'primary'
  } = props;

  const container = document.createElement('div');
  const classes = ['card', `card--${backgroundColor}`];
  container.className = classes.join(' ');

  if (image) {
    container.innerHTML = `
      <figure class="card-image"><img src="/images/placeholder-campus-1-600x400.jpg" width="600" height="400" alt=""></figure>
      <div class="card-body">
          <h2 class="card-title"><a class="card-link" href="${link}">${title}</a></h2>
          <p class="card-summary">${summary}</p>
      </div>
    `;
  } else {
    container.innerHTML = `
      <div class="card-body">
          <h2 class="card-title"><a class="card-link" href="${link}">${title}</a></h2>
          <p class="card-summary">${summary}</p>
      </div>
    `;
  }

  return container;
}