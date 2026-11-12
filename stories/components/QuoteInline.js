/**
 * Quote component
 * @param {Object} props - Component properties
 * @param {boolean} props.cite - Whether to show the cite info
 * @param {('image'|'placeholder'|'none')} [props.image='image'] - Person image. 'none' hides it
 * @param {string} props.text - The text of the blockquote
 * @param {string} [props.imgUrl] - URL of the person image. Leave empty for the default portrait
 * @param {string} [props.name] - Name shown in the byline
 * @param {string} [props.title] - Title shown in the byline
 * @param {('primary'|'reverse')} [props.layout='primary'] - The layout of the blockquote
 * @returns {HTMLElement} - The blockquote element
 */

import Byline from './Byline';
import Avatar from './Avatar';

// Accepts the older boolean form too
const personImage = (image) => (image === true ? 'image' : image === false || !image ? 'none' : image);

export default function QuoteInline(props) {
  const {
    cite = true,
    image = 'image',
    imageSize = 'md',
    text,
    imgUrl = '',
    name = 'Rev. Robert A. Dowd, C.S.C.',
    title = 'President of the University of Notre Dame',
    layout = 'primary'
  } = props;

  const imageType = personImage(image);

  const container = document.createElement('blockquote');
  container.classList.add('blockquote');
  if (layout !== 'primary') {
    container.classList.add(`blockquote--${layout}`);
  }

  container.innerHTML = `
    <div class="flex-md align-start">
      ${imageType !== 'none' ? Avatar({ size: imageSize, type: imageType, imgUrl: imgUrl || undefined, modifier: 'avatar--quote mi-auto mbe-3' }) : ''}
      <p>${text}</p>
    </div>
  `;

  if (cite && (name || title)) {
    container.appendChild(Byline({ name, title, image: `none` }));
  }

  return container;
}
