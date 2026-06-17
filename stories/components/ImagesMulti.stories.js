import MultiImage from './ImagesMulti.js';

export default {
  title: 'Components/Image (Multiple)',
  tags: ['stable'],
  parameters: {
    docs: {
      description: {
        component: 'The multi-image component allows for displaying multiple images in a mosaic or tiled layout. The mosaic variant creates a dynamic, organically arranged layout of images, while the tiled variant arranges images in a clean grid. Both variants support up to 4 images and can be used to create visually engaging galleries or collections of related images.'
      }
    }
  },
  argTypes: {
    imageVariant: { name: 'Image Variant', control: 'select', options: ['none', 'mosaic', 'tiled'] },
    imageCount: { name: 'Image Count', control: { type: 'range', min:1, max:4, step: 1 } },
    imageNumber: { name: 'Show Image Numbers', control: 'boolean' },
  },
  args: {
    //Default args for stories
    imageVariant: 'tiled',
    imageCount: 3,
    imageNumber: false,
  }
};

export const Default = (args) => {
  return MultiImage(args);
};
Default.args = {
};

export const Mosaic = (args) => {
  return MultiImage(args);
};
Mosaic.args = {
  imageVariant: 'mosaic',
  imageCount:3
};

export const Tiled = (args) => {
  return MultiImage(args);
};
Tiled.args = {
  imageVariant: 'tiled',
  imageCount: 3
}; 

export const WithImageNumbers = (args) => {
  return MultiImage(args);
}
WithImageNumbers.args = {
  imageCount: 3,
  imageNumber: true,
};