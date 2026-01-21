import Home from './Home.js';

export default {
  title: 'Templates/Home',
  component: Home,
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    pageContent: {
      name: 'Page Content',
      description: 'HTML content for the main area of the home page',
      control: 'text'
    },
    navTop: {
      name: 'Navigation Top',
      description: 'If true, navigation is at the top of the page',
      control: 'boolean'
    },
    heroLayout: {
      name: 'Hero Layout',
      control: { type: 'select' },
      options: ['inline', 'inset', 'container', 'screen'],
      description: 'Layout style for the hero section',
    },
    siteTitle: {
      name: 'Site Title',
      description: 'Title of the site',
      control: 'text'
    },
    pageTitle: {
      name: 'Page Title',
      description: 'Title text for the hero section',
      control: 'text',
    }
  },
  args: {
   siteTitle: 'Department Title',
   pageTitle: 'Exploring the Future',
    navTop: false,
    heroLayout: 'inset',
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
