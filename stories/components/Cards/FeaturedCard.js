/**
 * Featured Card component
 * @param {Object} props - Component properties
 * @param {string} props.image - The image URL of the card
 * @param {string} props.title - The title of the card
 * @param {string} props.label - The label of the card
 * @param {string} props.link - The link of the card
 * @returns {HTMLElement} - The card element
 */
export default function FeaturedCard(props) {
  const {
    title,
    image,
    link,
    label,
  } = props;

  const container = document.createElement('div');
  container.className = 'card-container';
  const classes = ['card', `card--featured`];

  container.innerHTML = `
  <div class="${ classes.join(' ') }">
    ${image ? `<figure class="card-image"><img src="${image}" width="600" height="400" alt=""></figure>` : '<figure class="card-image"><img src="/images/placeholder-campus-1-600x400.jpg" width="600" height="400" alt=""></figure>'}
    <div class="card-body">
      ${label ? `<p class="card-label"><span>${label}</span></p>` : ''}
      <h2 class="card-title"><a class="card-link" href="${link}">${title}</a></h2>
    </div>
  </div>
`;

  return container;
}