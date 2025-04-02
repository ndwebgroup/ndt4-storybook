/**
 * Creates a card component
 * @param {Object} props - Component properties
 * @param {string} props.name - The full name of the person
 * @param {string} props.title - The title of the person
 * @param {boolean} props.placeholder - Whether to show the person image
 * @returns {HTMLElement} - The card element
 */
import Avatar from './Avatar.js';

export default function PeopleCard(props) {
  const {
    name,
    title,
    placeholder = false,
    summary
  } = props;

  const container = document.createElement('div');
  const classes = ['card', 'card--person'];
  const avatarImage = Avatar({ size: 'lg', type:'image', helper_class:'card-image' });
  const avatarPlaceholder = Avatar({ size:'lg', type:'placeholder', helper_class:'card-image' });
  container.className = classes.join(' ');

  if (placeholder) {
    container.innerHTML = `
      ${avatarPlaceholder}
      <div class="card-body">
          <h2 class="card-title preson-name"><a class="card-link" href="#">${name}</a></h2>
          <p class="person-title">${title}</p>
          <p class="card-summary">${summary}</p>
      </div>
    `;
  } else {
    container.innerHTML = `
      ${avatarImage}
      <div class="card-body">
          <h2 class="card-title person-name"><a class="card-link" href="#">${name}</a></h2>
          <p class="person-title">${title}</p>
          <p class="card-summary">${summary}</p>
      </div>
    `;
  }

  return container;
}