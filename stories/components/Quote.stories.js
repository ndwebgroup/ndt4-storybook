import Quote from './Quote.js';

export default {
  title: 'Components/Quote',
  tags: ['stable'],
  argTypes: {
    text: { name:'Quote Text',},
    cite: { name:'Show Cite',},
    image: { name:'Show Image',},
    layout: { name:'Quote Layout', control: 'select', options: ['left', 'centered', 'reversed'] },
  },
  parameters: {
    design: {
      name: "Figma Assets",
      allowFullscreen: true,
      type: "figma",
      url: "https://www.figma.com/design/oMHFAa6HK6xMGMtxPhOkLV/NDT-4.0-Beta?node-id=1013-1894",
    },
  },
  args: {
    cite:true,
    image: true,
    text: '"As a premier Catholic research university, our research and learning drive insights, innovation, and impact for good around the world."',
    layout: 'left'
  }
};

export const Primary = (args) => {
  return Quote(args);
};
Primary.args = {
};

export const Centered = (args) => {
  return Quote(args);
};
Centered.args = {
  layout: 'centered',
};

export const Reversed = (args) => {
  return Quote(args);
};
Reversed.args = {
  layout: 'reversed',
};