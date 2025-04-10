import Quote from './Quote.js';

export default {
  title: 'Components/Quote',
  tags: ['autodocs'],
  argTypes: {
    text: { name:'Quote Text',},
    cite: { name:'Show Cite',},
    image: { name:'Show Image',},
    layout: { name:'Quote Layout', control: 'select', options: ['centered', 'left']},
  },
  args: {
    cite:true,
    image: true,
    text: '"Hendrerit in quis venenatis aliquet venenatis scelerisque in ipsum parturient congue vulputate convallis ultricies at."',
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