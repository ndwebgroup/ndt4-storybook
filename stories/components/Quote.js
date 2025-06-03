/**
 * Quote component
 * @param {Object} props - Component properties
 * @param {boolean} props.cite - Whether to show the cite info
 * @param {boolean} props.image - Whether to show cite image
 * @param {string} props.text - The text of the blockquote
 * @param {('left'|'centered')} [props.layout='centered'] - The layout of the blockquote
 * @returns {HTMLElement} - The blockquote element
 */

import Byline from './Byline';

export default function Quote(props) {
  const {
    cite = true,
    image = true,
    text,
    layout = 'left'
  } = props;

  const container = document.createElement('div');
  const classes = [`blockquote${layout === `left` ? `` : ` blockquote--${layout}`}`];

  container.innerHTML = `
    <blockquote class="${classes}">
      <p>${text}</p>
    </blockquote>
  `;

  // Get the quote container to append byline properly
  const quoteBody = container.querySelector('.blockquote');

  if (cite) {
    quoteBody.appendChild(Byline({ name:`John Doe`, title:`Person Title`, image:`${image ? 'image' : 'none'}` }));
  }

  return container;
}