import Home from './Home.js';

export default {
  title: 'Templates/Home',
  component: Home,
  tags: ['autodocs'],
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
   siteTitle: 'Department of Example',
   pageTitle: 'Exploring the Future',
   pageContent: `<h2>Welcome to the Department of Example</h2>
    <p>This is a sample home page for the Department of Example. Use the controls to customize the content.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,
    navTop: false,
    heroLayout: 'inset',
  },
  decorators: [
    (Story) => {
      const result = Story();
      return `<body class="nav-top--false">
      ${result}
  </body>`;
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
