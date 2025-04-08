/**
 * Byline component
 * @param {Object} props - Component properties
 * @param {string} props.name - The full name of the person
 * @param {string} props.title - The title of the person
 * @param {string} props.link - The link of the person
 * @param {boolean} props.placeholder - Whether to show the person image
 * @returns {HTMLElement} - The card element
 */
import Avatar from './Avatar.js';

export default function Byline(props) {
  const {
    name,
    title,
    link,
    placeholder = false,
  } = props;

  const container = document.createElement('div');
  container.className = 'byline';

  const avatarImage = Avatar({ size: 'xs', type:'image', helper_class:'byline-image' });
  const avatarPlaceholder = Avatar({ size:'xs', type:'placeholder', helper_class:'byline-image' });

  if (placeholder) {
    container.innerHTML = `
      ${avatarPlaceholder}
      <div class="byline-body">
        <p class="byline-title"><a class="byline-link" href="${link}">${name}</a></p>
        <p class="person-title">${title}</p>
      </div>
    `;
  } else {
    container.innerHTML = `
      ${avatarImage}
      <div class="byline-body">
        <p class="byline-title"><a class="byline-link" href="${link}">${name}</a></p>
        <p class="person-title">${title}</p>
      </div>
    `;
  }

  return container;
}