import BannerTiled from './BannerTiled';

export default {
  title: 'Collections/Banner/Banner (Tiled Images)',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Banner Description'
      }
    }
  },
  argTypes: {
    label: { name:'Label' },
    title: { name:'Title' },
    titleSize: {
      name:'Title Size',
      control: { type: 'select' },
      options: ['default', 'sm', 'lg']
    },
    summary: { name:'Summary' },
    headingTag: {
      name:'Heading Tag',
      control: { type: 'select' },
      options: ['h2', 'h3', 'h4'],
      description: 'The heading tag to use for the title'
    },
    order: {
      name: 'Order',
      control: { type: 'select' },
      options: ['default', 'reversed'],
      description: 'The order of the content in the banner'
    },
    imageCount: {
      name: 'Image Count',
      control: { type: 'select' },
      options: ['2', '3', '4'],
      description: 'The number of images to display in the banner'
    },
    buttons: { name: 'Single Button', control: 'object' },
    buttonList: { name: 'Button List', control: 'object' },
  },
  args: {
    // Default args for all stories
    label:'',
    headingTag:'h2',
    title:'Banner Title',
    imageCount:'2',
    summary:'Quis platea neque nisi a parturient mi suspendisse fusce nisl vestibulum montes dui fames curabitur ridiculus a a id himenaeos vehicula nisi.',
  },
};

const exampleButtons = [
  { label:'Button One', type:'primary', cta:true, moreIcon:true, },
  { label:'Button Two', type:'primary', cta:false, moreIcon:false, },
];

// Two Image Tiled Banner Stories
export const DefaultTwo = (args) => {
  const mergedArgs = { ...args };
  return BannerTiled(mergedArgs);
};
DefaultTwo.storyName = 'Default Two Image Tiled Banner';
DefaultTwo.args = {
  imageCount:2,
};

export const ReversedTwo = (args) => {
  const mergedArgs = { ...args };
  return BannerTiled(mergedArgs);
};
ReversedTwo.storyName = 'Reversed Two Image Tiled Banner';
ReversedTwo.args = {
  order:'reversed',
  imageCount:2,
};

// Three Image Tiled Banner Stories
export const DefaultThree = (args) => {
  const mergedArgs = { ...args };
  return BannerTiled(mergedArgs);
};
DefaultThree.storyName = 'Default Three Image Tiled Banner';
DefaultThree.args = {
};

export const ReversedThree = (args) => {
  const mergedArgs = { ...args };
  return BannerTiled(mergedArgs);
};
ReversedThree.storyName = 'Reversed Three Image Tiled Banner';
ReversedThree.args = {
  order:'reversed',
};

// Four Image Tiled Banner Stories
export const DefaultFour = (args) => {
  const mergedArgs = { ...args };
  return BannerTiled(mergedArgs);
};
DefaultFour.storyName = 'Default Four Image Tiled Banner';
DefaultFour.args = {
  imageCount:4,
};

export const ReversedFour = (args) => {
  const mergedArgs = { ...args };
  return BannerTiled(mergedArgs);
};
ReversedFour.storyName = 'Reversed Four Image Tiled Banner';
ReversedFour.args = {
  order:'reversed',
  imageCount:4,
};