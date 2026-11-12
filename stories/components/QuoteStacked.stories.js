import QuoteStacked from './QuoteStacked.js';

export default {
  title: 'Components/Quotes/Quote (Stacked)',
  tags: ['stable'],
  argTypes: {
    text: { name:'Quote Text',},
    cite: { name:'Show Cite',},
    image: { name:'Image', control:'select', options:['image', 'placeholder', 'none'] },
    imgUrl: { name:'Image URL', control:'text', description:'URL of the person image. Leave empty to use the default portrait.', if: { arg:'image', eq:'image' } },
    name: { name:'Person Name', control:'text', if: { arg:'cite' } },
    title: { name:'Person Title', control:'text', if: { arg:'cite' } },
    layout: { name:'Quote Layout', control: 'select', options: ['left', 'centered', 'reversed'] },
  },
  parameters: {
    design: {
      name: "Figma Assets",
      allowFullscreen: true,
      type: "figma",
      url: "https://www.figma.com/design/oMHFAa6HK6xMGMtxPhOkLV/NDT-4.0-Beta?node-id=1013-1894",
    },
    docs: {
      description: {
        component: 'Stacked Quotes use `blockquote` elements to highlight key testimonials or statements from individuals or organizations, often accompanied by an image and citation.'
      }
    },
  },
  args: {
    cite:true,
    image: 'image',
    imgUrl: '',
    name: 'Rev. Robert A. Dowd, C.S.C.',
    title: 'President of the University of Notre Dame',
    text: '"As a premier Catholic research university, our research and learning drive insights, innovation, and impact for good around the world."',
    layout: 'left'
  }
};

export const Primary = (args) => {
  return QuoteStacked(args);
};
Primary.args = {
};

export const Centered = (args) => {
  return QuoteStacked(args);
};
Centered.args = {
  layout: 'centered',
};

export const Reversed = (args) => {
  return QuoteStacked(args);
};
Reversed.args = {
  layout: 'reversed',
};