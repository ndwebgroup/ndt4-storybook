/**
 * Image component
 * @param {string} props.imageSrc - The source URL of the image to display
 * @param {('default'|'left'|'right')} [props.imagePosition='default'] - The position of the image
 * @param {('none'|'mosaic'|'tiled')} [props.imageVariant='default'] - The variant of the image
 * @param {number} props.imageCount - The number of images to display
 * @param {string} props.imagePosition - The position of the image
 */

export default function Image(args) {
  const { imageSrc, imagePosition, imageVariant, imageCount } = args;
  const container = document.createElement('figure')
  container.className = `image image-${imagePosition} ${imageVariant == 'none' ? '' : imageVariant == 'circle' ? 'image-circle' : `image--${imageVariant}`}`;

  switch(imageVariant) {
    case 'mosaic':
    case 'tiled':
      container.innerHTML = `
        ${Array.from({ length: imageCount }, (_, i) => `<img src="${imageSrc}" alt="Image ${i + 1}">`).join('')}
      `;
      break;
    case 'circle':
      container.innerHTML = `<img src="${imageSrc}" width="600" height="600" alt="Image">`;
    break;  
    case 'none':
      container.innerHTML = `<img src="${imageSrc}" width="1200" height="765" alt="Image">`;
  }

  return container;
}