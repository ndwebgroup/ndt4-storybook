import BannerDefault from './BannerDefault';

export default {
  title: 'Collections/Banner/Banner (Default)',
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
    media: {
      name: 'Media Type',
      control: { type: 'select' },
      options: ['image', 'video', 'none'],
    },
    mediaAlignment: {
      name: 'Media Placement',
      control: { type: 'select' },
      options: ['left', 'right', 'stacked'],
    },
    buttons: { name: 'Single Button', control: 'object' },
    buttonList: { name: 'Button List', control: 'object' },
  },
  args: {
    // Default args for all stories
    label:'',
    headingTag:'h2',
    title:'What’s Your Passion?',
    summary:'Explore the undergraduate, graduate, and certification programs available at Notre Dame. Lorem ipsum dolor sit amet consectetur adipiscing elit ut vel, iaculis sagittis elementum.',
    media:'image',
    mediaAlignment:'left',
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
  mediaAlignment:'right',
};

export const Stacked = (args) => {
  const mergedArgs = { ...args };
  return BannerDefault(mergedArgs);
};
Stacked.storyName = 'Banner with Stacked Video';
Stacked.args = {
  media:'video',
  mediaAlignment:'stacked',
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
  mediaAlignment: 'left',
  title: 'Video Banner Title',
  summary: 'This banner displays video content instead of an image. The video is positioned on the left side of the banner by default.',
  buttons: { label: 'Watch Full Video', type: 'primary', cta:false, moreIcon: false }
};