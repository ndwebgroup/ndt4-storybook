import MultiImage from './ImagesMulti.js';

export default {
  title: 'Components/Image (Multiple)',
  tags: ['stable'],
  parameters: {
    design: {
      name: "Figma Assets",
      allowFullscreen: true,
      type: "figma",
      url: "https://www.figma.com/design/oMHFAa6HK6xMGMtxPhOkLV/University-of-Notre-Dame---Web-Theme-4.0-Digital-Design-Guide?node-id=3352-24148",
    },
    docs: {
      description: {
        component: 'The multi-image component allows for displaying multiple images in a mosaic or tiled layout. The mosaic variant creates a dynamic, organically arranged layout of images, while the tiled variant arranges images in a clean grid. Both variants support up to 4 images and can be used to create visually engaging galleries or collections of related images.'
      }
    }
  },
  argTypes: {
    imageSrc: { name: 'Image Source', },
    imageVariant: { name: 'Image Variant', control: 'select', options: ['none', 'mosaic', 'tiled'] },
    imageCount: { name: 'Image Count', control: { type: 'range', min:1, max:4, step: 1 } },
  },
  args: {
    //Default args for stories
    imageSrc: '/images/placeholder-campus-3-1200x675.jpg',
    imageVariant: 'tiled',
    imageCount: 3,
  }
};

export const Default = (args) => {
  return MultiImage(args);
};

export const Mosaic = (args) => {
  return MultiImage({ ...args, imageVariant: 'mosaic', imageCount: args.imageCount });
};

export const Tiled = (args) => {
  return MultiImage({ ...args, imageVariant: 'tiled', imageCount: args.imageCount });
};