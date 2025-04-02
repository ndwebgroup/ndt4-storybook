import Card from './Card.js';

export default {
  title: 'Components/Card',
  tags: ['autodocs'],
  argTypes: {
    link: { name:'Card Link',},
    summary: { name:'Card Summary',},
    image: { name:'Card Image',},
    title: { name:'Card Title',},
    layout: { name:'Layout Override', control: 'select', options: ['default','horizontal','stacked', 'compact']}
  },
  args: {
    image: true,
    title: 'Card Title',
    summary: 'Hendrerit in quis venenatis aliquet venenatis scelerisque in ipsum parturient congue vulputate convallis ultricies at.',
    link: '#',
    layout:'',
  }
};

export const Primary = (args) => {
  return Card(args);
};
Primary.args = {
  backgroundColor: 'primary',
};

export const NoImage = (args) => {
  return Card(args);
};
NoImage.args = {
  image: false,
};

export const Horizontal = (args) => {
  return Card(args);
};
Horizontal.args = {
  layout:'horizontal'
};

export const Stacked = (args) => {
  return Card(args);
};
Stacked.args = {
  layout:'stacked'
};