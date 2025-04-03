/**
 * People card component
 * @param {Object} props - Component properties
 * @param {string} props.name - The full name of the person
 * @param {string} props.title - The title of the person
 * @param {boolean} props.placeholder - Whether to show the person image
 * @param {('default'|'horizontal'|'stacked' | 'compact')} [props.layout='default'] - The layout of the card
 * @returns {HTMLElement} - The card element
 */
import Avatar from './Avatar.js';

export default function PeopleCard(props) {
  const {
    name,
    title,
    placeholder = false,
    layout = 'default',
    summary
  } = props;

  const container = document.createElement('div');
  container.className = 'card-container';
  const classes = ['card', 'card--person', `card--${layout}` ];
  
  const avatarImage = Avatar({ size: 'lg', type:'image', helper_class:'card-image' });
  const avatarPlaceholder = Avatar({ size:'lg', type:'placeholder', helper_class:'card-image' });

  if (placeholder) {
    container.innerHTML = `
    <div class="${ classes.join(' ') }">
      ${avatarPlaceholder}
      <div class="card-body">
          <h2 class="card-title preson-name"><a class="card-link" href="#">${name}</a></h2>
          <p class="person-title">${title}</p>
          <p class="card-summary">${summary}</p>
      </div>
    </div>
    `;
  } else {
    container.innerHTML = `
    <div class="${ classes.join(' ') }">
      ${avatarImage}
      <div class="card-body">
          <h2 class="card-title person-name"><a class="card-link" href="#">${name}</a></h2>
          <p class="person-title">${title}</p>
          <p class="card-summary">${summary}</p>
      </div>
    </div>
    `;
  }

  return container;
}