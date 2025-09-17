import BannerFull from './BannerFull';

export default {
  title: 'Collections/Banner/Banner (Fullbleed)',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Fullbleed Banner Description'
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
    textAlignment: {
      name: 'Text Placement',
      control: { type: 'select' },
      options: ['left', 'right', 'center'],
    },
    buttons: { name: 'Single Button', control: 'object' },
    buttonList: { name: 'Button List', control: 'object' },
  },
  args: {
    // Default args for all stories
    label:'',
    title:'Banner Title',
    titleSize:'default',
    headingTag:'h2',
    summary:'Quis platea neque nisi a parturient mi suspendisse fusce nisl vestibulum montes dui fames curabitur ridiculus a a id himenaeos vehicula nisi.',
    textAlignment:'left',
  },
};

const exampleButtons = [
  { label:'Button One', type:'primary', cta:true, moreIcon:true, },
  { label:'Button Two', type:'primary', cta:false, moreIcon:false, },
];

export const Default = (args) => {
  const mergedArgs = { ...args };
  return BannerFull(mergedArgs);
};
Default.storyName = 'Default Banner';
Default.args = {
  buttonList: exampleButtons
};
