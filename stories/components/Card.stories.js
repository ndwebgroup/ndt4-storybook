import Card from './Card.js';

export default {
  title: 'Components/Card',
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'select', options: ['primary', 'secondary', 'tertiary', 'neutral']},
  },
  args: {
    image: true,
  }
};

export const Primary = (args) => {
  return Card(args);
};
Primary.args = {
  title: "Default Cards",
  summary: 'Hendrerit in quis venenatis aliquet venenatis scelerisque in ipsum parturient congue vulputate convallis ultricies at.',
};

export const Secondary = (args) => {
  return Card(args);
};
Secondary.args = {
  backgroundColor: 'secondary',
  title: "Secondary Cards",
  summary: 'Hendrerit in quis venenatis aliquet venenatis scelerisque in ipsum parturient congue vulputate convallis ultricies at.',
};