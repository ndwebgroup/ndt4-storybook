import Card from './Card.js';

export default {
  title: 'Components/Cards/Card (Default)',
  tags: ['autodocs'],
  argTypes: {
    layout: { name:'Card Layout', control: 'select', options: ['default','horizontal','stacked', 'compact']},
    link: { name:'Card Link',},
    label: { name:'Card Label',},
    summary: { name:'Card Summary',},
    showImage: { name:'Card Image',},
    title: { name:'Card Title',},
  },
  args: {
    layout:'default',
    showImage: true,
    label: '',
    title: 'Card Title',
    summary: 'Hendrerit in quis venenatis aliquet venenatis scelerisque in ipsum parturient congue vulputate convallis ultricies at.',
    link: '#',
  }
};

export const Primary = (args) => {
  return Card(args);
};
Primary.args = {
};

export const NoImage = (args) => {
  return Card(args);
};
NoImage.args = {
  showImage: false,
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