import EventsListing from './EventsListing.js';

export default {
  title: 'Templates/Events Listing',
  component: EventsListing,
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
  return EventsListing(args);
};

export const Default = Template.bind({});
Default.args = {
  // Basic example uses the default args
};
