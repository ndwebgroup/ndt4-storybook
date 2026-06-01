import Image from './Images.js';

export default {
  title: 'Components/Image (Single)',
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
        component: 'The Image component allows for displaying a single image with various options for positioning, styling, and aspect ratios. It supports left, right, and default positioning, as well as circle styling and multiple aspect ratios including 1:1, 16:9, and more.'
      }
    }
  },
  argTypes: {
    imageSrc: { name: 'Image Source', },
    imagePosition: { name: 'Image Position', control: 'select', options: ['default', 'left', 'right'] },
    imageCaption: { name: 'Image Caption', control: 'text' },
    imageRatio: { name: 'Image Ratio', control: 'select', options: ['default', '1x1', '1x2', '1x3', '1x4', '2x1', '2x3', '3x1', '3x2', '4x1', '16x9'] },
  },
  args: {
    //Default args for stories
    imageSrc: '/images/placeholder-campus-3-1200x675.jpg',
    imageCaption: '',
    imagePosition: 'default',
    imageVariant: 'none',
    imageRatio: 'default',
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

export const Circle = (args) => {
  return Image({ ...args, imageVariant: 'image-circle' });
}