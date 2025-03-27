import Card from './Card.js';

export default {
  title: 'Components/Card',
  tags: ['autodocs'],
  argTypes: {
    link: { name:'Card Link',},
    summary: { name:'Card Summary',},
    image: { name:'Card Image',},
    title: { name:'Card Title',},
    backgroundColor: { name:'Card Background', control: 'select', options: ['primary', 'secondary', 'tertiary', 'neutral']},
  },
  args: {
    image: true,
    title: 'Card Title',
    summary: 'Hendrerit in quis venenatis aliquet venenatis scelerisque in ipsum parturient congue vulputate convallis ultricies at.',
    link: '#',
  }
};

export const Primary = (args) => {
  return Card(args);
};
Primary.args = {
  backgroundColor: 'primary',
};

export const Secondary = (args) => {
  return Card(args);
};
Secondary.args = {
  backgroundColor: 'secondary',
};