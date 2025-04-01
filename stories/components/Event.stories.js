// filepath: /Users/erunyon/Sites/ndt4-storybook/stories/components/Event.stories.js
import Event from './Event.js';

export default {
  title: 'Components/Event',
  tags: ['autodocs'],
  argTypes: {
    title: { name: 'Event Title' },
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
    showExcerpt: {
      name: 'Show Excerpt',
      control: 'boolean',
      description: 'Toggle to show or hide the event excerpt'
    },
    excerpt: {
      name: 'Event Excerpt',
      control: 'text',
      description: 'Brief description of the event'
    },
    showReadMore: {
      name: 'Show Read More',
      control: 'boolean',
      description: 'Toggle to show or hide the Read More button'
    },
    showCalendars: {
      name: 'Show Calendars',
      control: 'boolean',
      description: 'Toggle to show or hide the event calendars'
    },
    calendars: {
      name: 'Event Calendars',
      control: 'object',
      description: 'The calendars this event belongs to'
    },
    link: { name: 'Event Link' },
    headingTag: {
      name: 'Heading Tag',
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
    },
    repeatDate: {
      name: 'Repeat Date',
      control: 'boolean',
      description: 'Whether this date is repeated (for grouping events by date)'
    }
  },
  args: {
    title: 'Faculty Workshop on Innovative Teaching Methods',
    startDate: new Date('April 15, 2025 10:00:00').toISOString(),
    endDate: new Date('April 15, 2025 12:00:00').toISOString(),
    allDay: false,
    location: 'DeBartolo Hall, Room 101',
    showExcerpt: false,
    excerpt: 'Join us for an interactive workshop exploring innovative teaching methods and strategies for engaging students in the classroom. Faculty from all disciplines are welcome to attend.',
    showReadMore: false,
    showCalendars: false,
    calendars: ['Academic Calendar', 'Faculty Events'],
    link: '#',
    headingTag: 'h2',
    repeatDate: false
  }
};

export const Default = (args) => {
  return Event(args);
};

export const WithExcerpt = (args) => {
  return Event(args);
};
WithExcerpt.args = {
  showExcerpt: true
};

export const WithReadMore = (args) => {
  return Event(args);
};
WithReadMore.args = {
  showExcerpt: true,
  showReadMore: true
};

export const WithCalendars = (args) => {
  return Event(args);
};
WithCalendars.args = {
  showCalendars: true
};

export const AllOptions = (args) => {
  return Event(args);
};
AllOptions.args = {
  showExcerpt: true,
  showReadMore: true,
  showCalendars: true
};

export const AllDayEvent = (args) => {
  return Event(args);
};
AllDayEvent.args = {
  allDay: true,
  title: 'Campus Open House Day'
};

export const RepeatedDateEvent = (args) => {
  return Event(args);
};
RepeatedDateEvent.args = {
  repeatDate: true,
  title: 'Second Event On Same Day',
  startDate: new Date('April 15, 2025 14:00:00').toISOString(),
  endDate: new Date('April 15, 2025 15:30:00').toISOString(),
};