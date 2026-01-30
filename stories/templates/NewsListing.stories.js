import NewsListing from './NewsListing.js';

export default {
  title: 'Templates/News Listing Page',
  component: NewsListing,
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    siteTitle: {
      name: 'Site Title',
      description: 'Title of the site',
      control: 'text'
    },
    navTop: {
      name: 'Navigation Top',
      description: 'Whether to show the top navigation',
      control: 'boolean'
    },
  },
  args: {
   siteTitle: 'Department of Example',
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
  return NewsListing(args);
};

export const Default = Template.bind({});
Default.args = {
  // Basic example uses the default args
};
