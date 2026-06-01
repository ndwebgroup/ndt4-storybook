/**
 * Image component
 * @param {string} props.imageSrc - The source URL of the image to display
 * @param {('default'|'left'|'right')} [props.imagePosition='default'] - The position of the image
 * @param {string} props.imageVariant - The variant of the image
 * @param {string} props.imagePosition - The position of the image
 * @param {string} props.imageCaption - The caption for the image
 * @param {('default'|'1x1'|'1x2'|'1x3'|'1x4'|'2x1'|'2x3'|'3x1'|'3x2'|'4x1'|'16x9')} [props.imageRatio] - The aspect ratio of the image
 */

export default function Image(args) {
  const { imageSrc, imagePosition, imageVariant, imageCaption, imageRatio } = args;
  const container = document.createElement('figure')
  container.className = `image${imagePosition && imagePosition !== 'default' ? ` image-${imagePosition}` : ''}`;
  container.innerHTML = `<img src="${imageSrc}" ${imageRatio !== 'default' ? ` class="ratio--${imageRatio}"` : ''} width="1200" height="765" alt="Image">`;

  if (imageVariant && imageVariant !== 'none') {
    container.className += ` ${imageVariant}`;
  }

  if (imageCaption) {
    container.innerHTML += `<figcaption>${imageCaption}</figcaption>`;
  }

  return container;
}