/**
 * Creates a card component
 * @param {Object} props - Component properties
 * @param {boolean} props.image - Whether to show the avatar
 * * @param {string} props.text - The text of the blockquote
 * @param {('primary'|'centered'|'left')} [props.layout='centered'] - The layout of the blockquote
 * @returns {HTMLElement} - The blockquote element
 */

import Avatar from './Avatar.js';

export default function Card(props) {
  const {
    image = true,
    text,
    layout = 'primary'
  } = props;

  const container = document.createElement('div');
  const classes = [`blockquote blockquote--${layout}`];

  if (image) {
    const avatarElement = Avatar({ size: 'sm' });
    container.innerHTML = `
      <blockquote class="${classes}">
        <p>${text}</p>
        ${avatarElement}
      </blockquote>
    `;
  } else {
    container.innerHTML = `
      <blockquote class="${classes}">
        <p>${text}</p>
      </blockquote>
    `;
  }

  return container;
}