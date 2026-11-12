/**
 * Quote component
 * @param {Object} props - Component properties
 * @param {boolean} props.cite - Whether to show the cite info
 * @param {('image'|'placeholder'|'none')} [props.image='image'] - Person image. 'none' hides it
 * @param {string} props.text - The text of the blockquote
 * @param {string} [props.imgUrl] - URL of the person image. Leave empty for the default portrait
 * @param {string} [props.name] - Name shown in the byline
 * @param {string} [props.title] - Title shown in the byline
 * @param {string} props.modifier - The modifier class to apply to the blockquote
 * @param {('left'|'centered'|'reversed')} [props.layout='left'] - The layout of the blockquote
 * @returns {HTMLElement} - The blockquote element
 */

import Byline from './Byline';

// Accepts the older boolean form too
const personImage = (image) => (image === true ? 'image' : image === false || !image ? 'none' : image);

export default function QuoteStacked(props) {
  const {
    cite = true,
    modifier = '',
    image = 'image',
    text,
    imgUrl = '',
    name = 'Rev. Robert A. Dowd, C.S.C.',
    title = 'President of the University of Notre Dame',
    layout = 'left'
  } = props;

  const container = document.createElement('blockquote');
  container.classList.add('blockquote');
  if (modifier) {
    container.classList.add(modifier);
  }

  if (layout !== 'left') {
    container.classList.add(`blockquote--${layout}`);
  }
  container.innerHTML = `
      <p>${text}</p>
  `;

  if (cite && (name || title)) {
    container.appendChild(Byline({ name, title, image: personImage(image), imgUrl: imgUrl || undefined }));
  }

  return container;
}
