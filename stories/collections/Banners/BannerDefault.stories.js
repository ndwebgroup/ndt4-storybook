import { background } from 'storybook/internal/theming';
import BannerDefault from './BannerDefault';

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
  title: 'Collections/Banner/Banner (Default)',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      source: {
        // This will be the code shown in the docs
        transform: (code) => {
          // Remove the wrapper div from the code view
          return code.replace(/<div class="wrapper"><div class="page-secondary full-width">(.*?)<\/div><\/div>/gs, '$1');
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
    media: {
      name: 'Media Type',
      control: { type: 'select' },
      options: ['image', 'video', 'none'],
    },
    bannerWidth: {
      name: 'Banner Width',
      control: { type: 'select' },
      options: ['default', 'sm', 'md', 'lg', 'xl', 'screen'],
    },
    order: {
      name: 'Content Order',
      control: { type: 'select' },
      options: ['default', 'reversed'],
    },
    buttons: { name: 'Single Button', control: 'object' },
    buttonList: { name: 'Button List', control: 'object' },
    backgroundColor: {
      name: 'Background Color',
      control: { type: 'select' },
      options: ['none', 'brand-blue', 'brand-blue-dark', 'sky-blue-light', 'warm-white'],
      description: 'The background color of the banner'
    },
  },
  args: {
    // Default args for all stories
    label:'',
    headingTag:'h2',
    title:'Banner Title',
    titleSize:'default',
    summary:'Risus parturient ullamcorper luctus tempor nisl lacus nec sociis cras a vestibulum cras parturient sociosqu augue senectus parturient laoreet euismod.',
    media:'image',
    order:'default',
    bannerWidth:'default',
    backgroundColor:'none',
  },
};

const exampleButtons = [
  { label:'Button One', type:'primary', cta:true, moreIcon:true, },
  { label:'Button Two', type:'primary', cta:false, moreIcon:false, },
];

export const Default = (args) => {
  const mergedArgs = { ...args };
  return BannerDefault(mergedArgs);
};
Default.storyName = 'Default Banner';
Default.args = {
  buttons: { label: 'Explore all programs', type: 'primary', cta:false, moreIcon: true }
};

export const Right = (args) => {
  const mergedArgs = { ...args };
  return BannerDefault(mergedArgs);
};
Right.storyName = 'Banner with Right Image';
Right.args = {
  order:'reversed',
};

export const WithSingleButton = (args) => {
  const mergedArgs = { ...args };
  return BannerDefault(mergedArgs);
};
WithSingleButton.storyName = 'Banner with Single CTA';
WithSingleButton.args = {
  buttons: { label: 'Learn More', type: 'primary', cta:false, moreIcon: false }
};

export const WithButtonList = (args) => {
  const mergedArgs = { ...args };
  return BannerDefault(mergedArgs);
};
WithButtonList.storyName = 'Banner with Multiple CTAs';
WithButtonList.args = {
  buttonList: exampleButtons
};

export const VideoMedia = (args) => {
  const mergedArgs = { ...args };
  return BannerDefault(mergedArgs);
};
VideoMedia.storyName = 'Banner with Video';
VideoMedia.args = {
  media: 'video',
  order: 'default',
  title: 'Video Banner Title',
  summary: 'This banner displays video content instead of an image. The video is positioned on the left side of the banner by default.',
  buttons: { label: 'Watch Full Video', type: 'primary', cta:false, moreIcon: false }
};

export const BackgroundColor = (args) => {
  const mergedArgs = { ...args };
  return BannerDefault(mergedArgs);
};
BackgroundColor.storyName = 'Banner with Background Color';
BackgroundColor.args = {
  order: 'default',
  title: 'Video Banner Title',
  summary: 'This banner displays video content instead of an image. The video is positioned on the left side of the banner by default.',
  buttons: { label: 'Watch Full Video', type: 'primary', cta:false, moreIcon: false },
  backgroundColor: 'brand-blue',
};