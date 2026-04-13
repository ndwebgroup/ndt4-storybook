import Home from './Home.js';

export default {
  title: 'Templates/Home Page',
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
    },
    fullWidth: {
      name: 'Full Width Secondary',
      description: 'If true, the secondary content area is full width',
      control: 'boolean'
    },
    bannerOptions: {
      name: 'Banner Options',
      description: 'Select which banner to display on the home page',
      control: { type: 'check' },
      options: ['Cards', 'News', 'Events', 'Feature'],
    },
  },
  args: {
    heroLayout: 'Default',
    pageTitle: 'Do more than dream about the future. Fight for it.',
    pageLede: '',
    navTop: false,
    fullWidth: false,
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

export const WithHeroInset = Template.bind({});
WithHeroInset.args = {
  heroLayout: 'Inset',
  fullWidth: true,
  navTop: true,
  bannerOptions: ['Cards', 'News', 'Events', 'Feature'],
};

export const WithHeroScreen = Template.bind({});
WithHeroScreen.args = {
  heroLayout: 'Screen',
  fullWidth: true,
  navTop: true,
  bannerOptions: ['Cards', 'News', 'Events', 'Feature'],
};

export const WithHeroFade = Template.bind({});
WithHeroFade.args = {
  heroLayout: 'Fade',
  fullWidth: true,
  navTop: true,
  bannerOptions: ['Cards', 'News', 'Events', 'Feature'],
};