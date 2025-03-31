import Quote from './Quote.js';

export default {
  title: 'Components/Quote',
  tags: ['autodocs'],
  argTypes: {
    text: { name:'Quote Text',},
    image: { name:'Show Avatar',},
    layout: { name:'Quote Layout', control: 'select', options: ['centered', 'left']},
  },
  args: {
    image: true,
    text: 'Hendrerit in quis venenatis aliquet venenatis scelerisque in ipsum parturient congue vulputate convallis ultricies at.',
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