import QuoteInline from './QuoteInline.js';

export default {
  title: 'Components/Quotes/Quote (Inline)',
  tags: ['stable'],
  argTypes: {
    text: { name:'Quote Text',},
    cite: { name:'Show Cite',},
    image: { name:'Show Image',},
    imageSize: { name:'Image Size', control: 'select', options: ['sm', 'md', 'lg'] },
    layout: { name:'Quote Layout', control: 'select', options: ['primary', 'reversed'] },
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
        component: 'Inline Quotes use `blockquote` elements to highlight key testimonials or statements from individuals or organizations, often accompanied by an image and citation.'
      }
    },
  },
  args: {
    cite:true,
    image: true,
    imageSize: 'sm',
    text: '"As a premier Catholic research university, our research and learning drive insights, innovation, and impact for good around the world."',
    layout: 'primary'
  }
};

export const Primary = (args) => {
  return QuoteInline(args);
};
Primary.args = {
};

export const Reversed = (args) => {
  return QuoteInline(args);
};
Reversed.args = {
  layout: 'reversed',
};