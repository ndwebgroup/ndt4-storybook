/**
 * Byline component
 * @param {Object} props - Component properties
 * @param {string} props.name - The full name of the person
 * @param {string} props.title - The title of the person
 * @param {string} props.link - The link of the person
 * @param {string} props.image - How to show the person image
 * @returns {HTMLElement} - The card element
 */
import Avatar from './Avatar.js';

export default function Byline(props) {
  const {
    name,
    title,
    link,
    image = 'image',
    imgUrl,
  } = props;

  const container = document.createElement('div');
  container.className = 'byline';
  let avatarHTML = ''
  const titleHTML = `${link ? `<a class="byline-link" href="${link}">${name}</a>` : `${name}`}`;

  avatarHTML = '';
  
  if (image !== 'none') {
    avatarHTML = Avatar({ size:'xs', type:image, imgUrl:imgUrl, modifier:'byline-image' });
  }

  container.innerHTML = `
  ${avatarHTML}
  <div class="byline-body">
    <p class="byline-title person-name">${titleHTML}</p>
    <p class="person-title">${title}</p>
  </div>
`;

  return container;
}