import EventCard from './EventCard';

export default {
  title: 'Components/Cards/Card (Event)',
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
    showCalendars: false,
    calendars: ['Academic Calendar', 'Faculty Events'],
    link: '#',
    headingTag: 'h2',
    repeatDate: false,
    variant:'',
  }
};

export const Default = (args) => {
  return EventCard(args);
};

export const WithExcerpt = (args) => {
  return EventCard(args);
};
WithExcerpt.args = {
  showExcerpt: true
};

export const WithCalendars = (args) => {
  return EventCard(args);
};
WithCalendars.args = {
  showCalendars: true
};

export const AllOptions = (args) => {
  return EventCard(args);
};
AllOptions.args = {
  showExcerpt: true,
  showCalendars: true
};

export const AllDayEvent = (args) => {
  return EventCard(args);
};
AllDayEvent.args = {
  allDay: true,
  title: 'Campus Open House Day'
};

export const RepeatedDateEvent = (args) => {
  return EventCard(args);
};
RepeatedDateEvent.args = {
  repeatDate: true,
  title: 'Second Event On Same Day',
  startDate: new Date('April 15, 2025 14:00:00').toISOString(),
  endDate: new Date('April 15, 2025 15:30:00').toISOString(),
};