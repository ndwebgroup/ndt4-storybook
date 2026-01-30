import Home from './Home.js';

export default {
  title: 'Templates/Homepage',
  component: Home,
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
    options: {
      storySort: {
        order: [],
      },
    },
  },
  argTypes: {
    navTop: {
      name: 'Navigation Top',
      description: 'If true, navigation is at the top of the page',
      control: 'boolean'
    },
    heroLayout: {
      name: 'Hero Layout',
      control: { type: 'select' },
      options: ['Default', 'Fade', 'Inset', 'Container', 'Screen'],
      description: 'Layout style for the hero section',
    },
    pageTitle: {
      name: 'Page Title',
      description: 'Title text for the hero section',
      control: 'text',
    },
    pageLede: {
      name: 'Page Lede',
      description: 'Lede text for the hero section',
      control: 'text',
    }
  },
  args: {
    heroLayout: 'Default',
    pageTitle: 'Exploring the Future',
    pageLede: '',
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
  return Home(args);
};

export const Default = Template.bind({});
Default.args = {
  // Basic example uses the default args
};
