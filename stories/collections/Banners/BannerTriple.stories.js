import BannerTriple from './BannerTriple';

export default {
  title: 'Collections/Banner/Banner(Three Image)',
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
    buttons: { name: 'Single Button', control: 'object' },
    buttonList: { name: 'Button List', control: 'object' },
  },
  args: {
    // Default args for all stories
    label:'',
    headingTag:'h2',
    title:'Banner Title',
    summary:'Quis platea neque nisi a parturient mi suspendisse fusce nisl vestibulum montes dui fames curabitur ridiculus a a id himenaeos vehicula nisi.',
  },
};

const exampleButtons = [
  { label:'Button One', type:'primary', cta:true, moreIcon:true, },
  { label:'Button Two', type:'primary', cta:false, moreIcon:false, },
];

export const Default = (args) => {
  const mergedArgs = { ...args };
  return BannerTriple(mergedArgs);
};
Default.storyName = 'Default Banner';
Default.args = {
};

export const Right = (args) => {
  const mergedArgs = { ...args };
  return BannerTriple(mergedArgs);
};
Right.storyName = 'Reversed Three Image Banner';
Right.args = {
  mediaAlignment:'right',
};

export const Stacked = (args) => {
  const mergedArgs = { ...args };
  return BannerTriple(mergedArgs);
};
Stacked.storyName = 'Stacked Three Image Banner';
Stacked.args = {
  mediaAlignment:'stacked',
};