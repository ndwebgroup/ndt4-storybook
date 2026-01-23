import DefaultPage from './DefaultPage.js';

export default {
  title: 'Templates/Default Page',
  component: DefaultPage,
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    navTop: {
      name: 'Navigation Top',
      description: 'If true, navigation is at the top of the page',
      control: 'boolean'
    },
    pageTitle: {
      name: 'Page Title',
      description: 'Title text for the hero section',
      control: 'text',
    },
    featuredImage: {
      name: 'Featured Image',
      description: 'Whether to show the featured image in the hero section',
      control: 'boolean'
    },
  },
  args: {
    pageTitle: 'Exploring the Future',
    featuredImage: false,
    navTop: false,
  },
  decorators: [
    (Story) => {
      const result = Story();
      return `${result}`;
    }
  ],

};

const Template = (args) => {
  return DefaultPage(args);
};

export const Default = Template.bind({});
Default.args = {
  // Basic example uses the default args
};
