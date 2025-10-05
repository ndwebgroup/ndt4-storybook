import NewsCard from './NewsCard.js';

export default {
  title: 'Components/Cards/Card (News Article)',
  tags: ['stable'],
  argTypes: {
    title: { name: 'Article Title' },
    excerpt: { name: 'Article Excerpt' },
    showImage: {
      name: 'Show Image',
      control: 'boolean',
      description: 'Toggle to show or hide the article image'
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
    excerpt: '',
    showImage: true,
    label: 'Research',
    link: '#',
    author: 'Jane Smith',
    publishDate: 'April 1, 2025',
    headingTag: 'h2'
  }
};

export const Default = (args) => {
  return NewsCard(args);
};

export const WithoutImage = (args) => {
  return NewsCard(args);
};
WithoutImage.args = {
  showImage: false
};

export const WithDifferentHeading = (args) => {
  return NewsCard(args);
};
WithDifferentHeading.args = {
  headingTag: 'h3'
};

export const WithExcerpt = (args) => {
  return NewsCard(args);
};
WithExcerpt.args = {
  excerpt:'The power of ND-LEEF lies in its ability to mimic real-world conditions while allowing researchers to manipulate variables, much like in a lab setting.'
};