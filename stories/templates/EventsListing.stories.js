import { ParameterName } from 'storybook-addon-designs/esm/addon.js';
import EventsListing from './EventsListing.js';

export default {
  title: 'Templates/Events Listing',
  component: EventsListing,
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
    pageContent: `<p>This is an example of a news listing page. It features a selection of recent news articles displayed in a list format. Each article includes a title, image, and link to read more.</p>`,
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
