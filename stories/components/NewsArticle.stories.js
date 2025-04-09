import NewsArticle from './NewsArticle.js';

export default {
  title: 'Components/Cards/Card (News Article)',
  tags: ['autodocs'],
  argTypes: {
    title: { name: 'Article Title' },
    showImage: {
      name: 'Show Image',
      control: 'boolean',
      description: 'Toggle to show or hide the article image'
    },
    layout: {
      name: 'Layout',
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: 'Choose between vertical and horizontal layout'
    },
    label: { name: 'Card Label' },
    link: { name: 'Article Link' },
    author: { name: 'Author Name' },
    publishDate: { name: 'Publish Date' },
    headingTag: {
      name: 'Heading Tag',
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
    }
  },
  args: {
    title: 'Notre Dame Research Discovers New Method to Address Climate Change',
    showImage: true,
    layout: 'vertical',
    label: 'Research',
    link: '#',
    author: 'Jane Smith',
    publishDate: 'April 1, 2025',
    headingTag: 'h2'
  }
};

export const Default = (args) => {
  return NewsArticle(args);
};

export const HorizontalLayout = (args) => {
  return NewsArticle(args);
};
HorizontalLayout.args = {
  layout: 'horizontal'
};

export const WithoutImage = (args) => {
  return NewsArticle(args);
};
WithoutImage.args = {
  showImage: false
};

export const HorizontalWithoutImage = (args) => {
  return NewsArticle(args);
};
HorizontalWithoutImage.args = {
  layout: 'horizontal',
  showImage: false
};

export const WithDifferentHeading = (args) => {
  return NewsArticle(args);
};
WithDifferentHeading.args = {
  headingTag: 'h3'
};