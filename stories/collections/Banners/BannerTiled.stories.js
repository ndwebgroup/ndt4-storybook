import { background } from 'storybook/internal/theming';
import BannerTiled from './BannerTiled';

// Add styles to document head
const addHeaderStyles = () => {
  if (!document.getElementById('header-styles')) {
    const style = document.createElement('style');
    style.id = 'header-styles';
    style.textContent = `
      .wrapper {
        min-height: revert;
        grid-template-rows: auto;
      }
      .page-secondary {
        margin-block:0; 
      }
      .section {
        margin-block:clamp(2rem, 3.5vw, 5rem); 
      }  
    `;
    document.head.appendChild(style);
  }
};

export default {
  title: 'Collections/Banner/Banner (Tiled Images)',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      source: {
        // This will be the code shown in the docs
        transform: (code) => {
          // Remove the wrapper div from the code view
          return code.replace(/<div id="wrapper" class="wrapper"><div class="page-secondary full-width">(.*?)<\/div><\/div>/gs, '$1');
        }
      }
    }
  },
  decorators: [
    (Story) => {
      // Add styles to document head
      addHeaderStyles();
      // This will only affect the preview
      const result = Story();
      return `<div class="wrapper"><div class="page-secondary full-width">${result}</div></div>`;
    }
  ],
  argTypes: {
    label: { name:'Label' },
    title: { name:'Title' },
    titleSize: {
      name:'Title Size',
      control: { type: 'select' },
      options: ['default', 'sm', 'md', 'lg', 'xl'],
    },
    summary: { name:'Summary' },
    headingTag: {
      name:'Heading Tag',
      control: { type: 'select' },
      options: ['h2', 'h3', 'h4'],
      description: 'The heading tag to use for the title'
    },
    bannerWidth: {
      name: 'Banner Width',
      control: { type: 'select' },
      options: ['default', 'sm', 'md', 'lg', 'xl', 'screen'],
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
    backgroundColor: {
      name: 'Background Color',
      control: { type: 'select' },
      options: ['none', 'brand-blue', 'brand-blue-dark', 'brand-blue-light', 'sky-blue-light', 'dark', 'light'],
      description: 'The background color of the banner'
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
    bannerWidth:'default',
    order:'default',
    summary:'Quis platea neque nisi a parturient mi suspendisse fusce nisl vestibulum montes dui fames curabitur ridiculus a a id himenaeos vehicula nisi.',
    backgroundColor:'none',
  },
};

const exampleButtons = [
  { label:'Button One', type:'primary', cta:true, more:true, },
  { label:'Button Two', type:'primary', cta:false, more:false, },
];

// Two Image Tiled Banner Stories
export const Default = (args) => {
  const mergedArgs = { ...args };
  return BannerTiled(mergedArgs);
};
Default.storyName = 'Default Two Image Tiled Banner';
Default.args = {
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
  imageCount:3,
};

export const DefaultThreeOffset = (args) => {
  const mergedArgs = { ...args };
  return BannerTiled(mergedArgs);
};
DefaultThreeOffset.storyName = 'Default Three Image Tiled Offset Banner';
DefaultThreeOffset.args = {
  imageCount:3,
  imageModifiers: 'offset-start',
};

export const ReversedThree = (args) => {
  const mergedArgs = { ...args };
  return BannerTiled(mergedArgs);
};
ReversedThree.storyName = 'Reversed Three Image Tiled Banner';
ReversedThree.args = {
  order:'reversed',
  imageCount:3,
};

export const ReversedThreeOffset = (args) => {
  const mergedArgs = { ...args };
  return BannerTiled(mergedArgs);
};
ReversedThreeOffset.storyName = 'Reversed Three Image Tiled Offset Banner';
ReversedThreeOffset.args = {
  order:'reversed',
  imageCount:3,
  imageModifiers: 'offset-end',
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