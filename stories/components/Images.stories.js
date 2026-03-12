import Image from './Images.js';

export default {
  title: 'Components/Image',
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
        component: 'The Video component allows for embedding YouTube videos in three styles: embed, placeholder, and lightbox.'
      }
    }
  },
  argTypes: {
    imageSrc: { name: 'Image Source', },
    imagePosition: { name: 'Image Position', control: 'select', options: ['default', 'left', 'right'] },
    imageVariant: { name: 'Image Variant', control: 'select', options: ['none', 'circle', 'mosaic', 'tiled'] },
    imageCount: { name: 'Image Count', control: 'number', min: 1, max: 4, step: 1 },
  },
  args: {
    //Default args for stories
    imageSrc: '/images/placeholder-campus-3-1200x675.jpg',
    imagePosition: 'default',
    imageVariant: 'none',
    imageCount: 1,
  }
};

export const Default = (args) => {
  return Image(args);
};

export const Left = (args) => {
  return Image({ ...args, imagePosition: 'left' });
};

export const Right = (args) => {
  return Image({ ...args, imagePosition: 'right' });
};

export const Mosaic = (args) => {
  return Image({ ...args, imageVariant: 'mosaic', imageCount: 3 });
};

export const Tiled = (args) => {
  return Image({ ...args, imageVariant: 'tiled', imageCount: 3 });
};