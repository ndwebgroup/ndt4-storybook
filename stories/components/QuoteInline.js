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
import Avatar from './Avatar';
export default function QuoteInline(props) {
  const {
    cite = true,
    image = true,
    imageSize = 'md',
    text,
    layout = 'left'
  } = props;

  const container = document.createElement('blockquote');
  container.classList.add('blockquote', `blockquote--${layout}`);

  container.innerHTML = `
      <div class="flex-md align-start">
        ${image ? Avatar({ size: imageSize, modifier: 'avatar--quote mi-auto' }) : ''}
        <p>${text}</p>
      </div>
  `;

  if (cite) {
    container.appendChild(Byline({ name:`Rev. Robert A. Dowd, C.S.C.`, title:`President of the University of Notre Dame`, image:`none` }));
  }

  return container;
}