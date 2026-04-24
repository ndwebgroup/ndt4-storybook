import Quote from './Quote.js';

export default {
  title: 'Components/Quotes/Quote (Default)',
  tags: ['stable'],
  argTypes: {
    text: { name:'Quote Text',},
    cite: { name:'Cite Text',},
    size: { name:'Quote Size', control: 'select', options: ['sm', 'md', 'lg'] },
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
    text: '"As a premier Catholic research university, our research and learning drive insights, innovation, and impact for good around the world."',
    cite:'- Rev. John I. Jenkins, C.S.C., President of the University of Notre Dame',
    size: 'md',
  }
};

export const Primary = (args) => {
  return Quote(args);
};
Primary.args = {
};