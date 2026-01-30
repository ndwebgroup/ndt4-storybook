import PeopleListing from './PeopleListing.js';

export default {
  title: 'Templates/People Listing Page',
  component: PeopleListing,
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    navTop: {
      name: 'Navigation Top',
      description: 'Whether to show the top navigation',
      control: 'boolean'
    },
    format: {
      name: 'Format',
      description: 'The format of the page',
      control: { type: 'select' },
      options: ['grid', 'list'],
      defaultValue: 'grid'
    }
  },
  args: {
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
  return PeopleListing(args);
};

export const Default = Template.bind({});
Default.args = {
  // Basic example uses the default args
};
