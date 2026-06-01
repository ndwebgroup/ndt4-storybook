/**
 * Image component
 * @param {string} props.imageSrc - The source URL of the image to display
 * @param {('none'|'mosaic'|'tiled')} [props.imageVariant='none'] - The variant of the image
 * @param {number} props.imageCount - The number of images to display
 */

export default function MultiImage(args) {
  const { imageSrc, imagePosition, imageVariant, imageCount, imageCaption } = args;
  const container = document.createElement('figure')
  container.className = `image${imageVariant == 'none' ? '' : ` image--${imageVariant}`}`;

  switch(imageVariant) {
    case 'mosaic':
    case 'tiled':
    container.innerHTML = `
      ${Array.from({ length: imageCount }, (_, i) => `<img src="${imageSrc}" alt="Image ${i + 1}">`).join('')}
    `;
    break;
    case 'none':
    container.className += ` grid grid-ml-3 grid-gap-xs`;
    container.innerHTML = `
      ${Array.from({ length: imageCount }, (_, i) => `<img src="${imageSrc}" alt="Image ${i + 1}">`).join('')}
    `;
  }

  return container;
}