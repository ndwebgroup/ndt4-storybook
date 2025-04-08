import BannerDefault from './BannerDefault';

export default {
  title: 'Collections/Banner/Banner(Default)',
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
    multimedia: {
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
    title:'Banner Title',
    summary:'Quis platea neque nisi a parturient mi suspendisse fusce nisl vestibulum montes dui fames curabitur ridiculus a a id himenaeos vehicula nisi.',
    multimedia:'image',
    mediaAlignment:'left',
  },
};

const exampleButtons = [
  { label:'Button One', type:'primary', state:'default', moreIcon:false, },
  { label:'Button Two', type:'secondary', state:'default', moreIcon:false, },
];

export const Left = (args) => {
  const mergedArgs = { ...args };
  return BannerDefault(mergedArgs);
};
Left.storyName = 'Default Banner';
Left.args = {
};

export const WithSingleButton = (args) => {
  const mergedArgs = { ...args };
  return BannerDefault(mergedArgs);
};
WithSingleButton.storyName = 'Banner with Single CTA';
WithSingleButton.args = {
  buttons: { label: 'Learn More', type: 'primary', state: 'default', moreIcon: false }
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
  multimedia: 'video',
  mediaAlignment: 'left',
  title: 'Video Banner Title',
  summary: 'This banner displays video content instead of an image. The video is positioned on the left side of the banner by default.',
  buttons: { label: 'Watch Full Video', type: 'primary', state: 'default', moreIcon: false }
};