import NewsLanding from './NewsLanding.js';

export default {
  title: 'Templates/News Landing Page',
  component: NewsLanding,
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      toc: { disable: true }
    }
  },
  argTypes: {
    title: {
      name: 'Article Title',
      control: 'text',
      description: 'Title of the news article',
    },
    featuredImage: { name: 'Featured Image', control: 'boolean' },
    imagePlacement: { name: 'Image Placement', control: 'select', options: ['right', 'top'] },
    publishDate: {
      name: 'Publish Date',
      control: 'date',
      description: 'Publish date of the news article'
    },
    navTop: {
      name: 'Navigation Top',
      description: 'Whether to show the top navigation',
      control: 'boolean'
    },
  },
  args: {
    title: 'Example News Title',
    navTop: false,
    featuredImage: false,
    publishDate: '2025-09-22T10:00',
  },
  decorators: [
    (Story) => {
      const result = Story();
      return `${result}`;
    }
  ],

};

const Template = (args) => {
  return NewsLanding(args);
};

export const Default = Template.bind({});
Default.args = {
  // Basic example uses the default args
};
