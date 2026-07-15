/**
 * Image component
 * @param {('none'|'mosaic'|'tiled')} [props.imageVariant='none'] - The variant of the image
 * @param {number} props.imageCount - The number of images to display
 * @param {boolean} props.imageNumber - Whether to show image numbers
 */

export default function MultiImage(args) {
  const { imagePosition, imageVariant, imageCount, imageCaption, imageNumber } = args;
  const container = document.createElement('figure')
  container.className = `image${imageVariant == 'none' ? ' grid grid-ml-3 grid-gap-xs' : ` image--${imageVariant}`}`;

  container.innerHTML = `
    ${Array.from({ length: imageCount }, (_, i) => `<img src="/images/placeholder-campus-${imageNumber ? 'number-' : ''}${i + 1}-1200x675.jpg" width="1200" height="675" alt="Image ${i + 1}">`).join('')}
  `;
  
  return container;
}