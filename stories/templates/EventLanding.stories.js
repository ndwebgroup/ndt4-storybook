import EventLanding from './EventLanding.js';

export default {
  title: 'Templates/Event Landing',
  component: EventLanding,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    title: {
      name: 'Event Title',
      control: 'text',
      description: 'Title of the event',
    },
    featuredImage: { name: 'Featured Image', control: 'boolean' },
    startDate: {
      name: 'Start Date',
      control: 'date',
      description: 'Start date and time of the event'
    },
    endDate: {
      name: 'End Date',
      control: 'date',
      description: 'End date and time of the event'
    },
    allDay: {
      name: 'All Day Event',
      control: 'boolean',
      description: 'Whether the event runs all day'
    },
    location: { name: 'Event Location' },
    pageContent: {
      name: 'Page Content',
      description: 'HTML content for the main area of the home page',
      control: 'text'
    },
    repeatDate: {
      name: 'Repeat Date',
      control: 'boolean',
      description: 'Whether this date is repeated (for grouping events by date)'
    },
    navTop: {
      name: 'Navigation Top',
      description: 'Whether to show the top navigation',
      control: 'boolean'
    },
  },
  args: {
    title: 'Example Event Title',
    pageContent: `<p>This is an example of an event landing page. It features details about a specific event, including the date, time, location, and a description of what attendees can expect.</p>
     <p>Additional information about the event can be included here, such as speakers, agenda, and registration details.</p>`,
    navTop: false,
    featuredImage: false,
    startDate: '2025-09-22T10:00',
    endDate: '2025-09-22T12:00',
    allDay: false,
    location: 'Raclin Murphy Art Museum',
    repeatDate: false,
  },
  decorators: [
    (Story) => {
      const result = Story();
      return `${result}`;
    }
  ],

};

const Template = (args) => {
  return EventLanding(args);
};

export const Default = Template.bind({});
Default.args = {
  // Basic example uses the default args
};
