/**
 * Badge component
 * @param {Object} props - Component properties
 * @param {string} props.name - The full name of the person
 * @param {string} props.title - The title of the person
 * * @param {string} props.link - The link of the person
 * @param {boolean} props.placeholder - Whether to show the person image
 * @returns {HTMLElement} - The card element
 */
import Avatar from './Avatar.js';

export default function Badge(props) {
  const {
    name,
    title,
    link,
    placeholder = false,
  } = props;

  const container = document.createElement('div');
  container.className = 'avatar--badge';

  const avatarImage = Avatar({ size: 'xs', type:'image', helper_class:'avatar--badge-image' });
  const avatarPlaceholder = Avatar({ size:'xs', type:'placeholder', helper_class:'avatar--badge-image' });

  if (placeholder) {
    container.innerHTML = `
      ${avatarPlaceholder}
      <div class="avatar--badge-body">
        <p class="avatar--badge-title"><a class="avatar--badge-link" href="${link}">${name}</a></p>
        <p class="person-title">${title}</p>
      </div>
    `;
  } else {
    container.innerHTML = `
      ${avatarImage}
      <div class="avatar--badge-body">
        <p class="avatar--badge-title"><a class="avatar--badge-link" href="${link}">${name}</a></p>
        <p class="person-title">${title}</p>
      </div>
    `;
  }

  return container;
}