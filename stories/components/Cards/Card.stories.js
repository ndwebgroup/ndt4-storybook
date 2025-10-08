import Card from './Card.js';

export default {
  title: 'Components/Cards/Card (Default)',
  tags: ['stable'],
  parameters: {
    docs: {
      description: {
        component: 'Cards are a flexible content container that can include images, text, and links. They are used to group related information in a visually appealing way. Cards can be displayed in various layouts such as default, horizontal, stacked, and compact.'
      }
    },
  },
  argTypes: {
    layout: { name:'Card Layout', control: 'select', options: ['default','horizontal','stacked', 'compact']},
    link: { name:'Card Link',},
    label: { name:'Card Label',},
    summary: { name:'Card Summary',},
    showImage: { name:'Card Image',},
    title: { name:'Card Title',},
    backgroundColor: { name: 'Background Color', control: 'select', options: ['none', 'sky-blue-light', 'gray-extra-extra-light', 'warm-white', 'brand-blue', 'light', 'dark'] },
  },
  args: {
    layout:'default',
    showImage: true,
    label: '',
    title: 'Card Title',
    summary: 'Hendrerit in quis venenatis aliquet venenatis scelerisque in ipsum parturient congue vulputate convallis ultricies at.',
    link: '#',
    backgroundColor: 'none',
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

export const BackgroundColor = (args) => {
  return Card(args);
};
BackgroundColor.args = {
  backgroundColor: 'sky-blue-light',
};