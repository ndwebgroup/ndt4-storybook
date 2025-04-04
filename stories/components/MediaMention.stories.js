// filepath: /Users/erunyon/Sites/ndt4-storybook/stories/components/MediaMention.stories.js
import MediaMention from './MediaMention';

export default {
  title: 'Components/MediaMention',
  tags: ['autodocs'],
  argTypes: {
    headingTag: {
      control: { type: 'select' },
      options: ['h2', 'h3', 'h4'],
      description: 'The heading tag to use for the title'
    },
    showPublication: {
      control: 'boolean',
      description: 'Whether to show the publication information'
    },
    showDate: {
      control: 'boolean',
      description: 'Whether to show the publication date'
    },
    showPeople: {
      control: 'boolean',
      description: 'Whether to show the mentioned people'
    }
  },
};

// Sample media mention data
const sampleMediaMention = {
  title: 'Notre Dame researchers find breakthrough in renewable energy storage',
  public_url: 'https://example.com/notre-dame-energy-research',
  html_id: 'mention-123',
  content: '<p>Researchers at the University of Notre Dame have developed a new method for storing renewable energy that could make solar and wind power more reliable and cost-effective.</p>',
  publication_date: '2025-03-15',
  publication: {
    name: 'National Public Radio',
    slug: 'npr',
    logo_url: 'https://conductor.nd.edu/images/publications/npr.png',
    logo_width: 180,
    logo_height: 60
  },
  people: [
    {
      first_name: 'Maria',
      last_name: 'Rodriguez',
      department: 'College of Engineering',
      url: '#professor-rodriguez',
      image: '/public/images/placeholder-profile-1-300x300.jpg'
    },
    {
      first_name: 'James',
      last_name: 'Wilson',
      department: 'Department of Chemistry and Biochemistry',
      url: '#professor-wilson',
      image: '/public/images/placeholder-profile-1-300x300.jpg'
    }
  ]
};

// Default media mention with all features
export const Default = {
  args: {
    item: sampleMediaMention,
    headingTag: 'h2',
    showPublication: true,
    showDate: true,
    showPeople: true
  },
  render: (args) => {
    return MediaMention(args);
  },
};

// Media mention without publication info
export const WithoutPublication = {
  args: {
    item: sampleMediaMention,
    headingTag: 'h2',
    showPublication: false,
    showDate: true,
    showPeople: true
  },
  render: (args) => {
    return MediaMention(args);
  },
};

// Media mention without date
export const WithoutDate = {
  args: {
    item: sampleMediaMention,
    headingTag: 'h2',
    showPublication: true,
    showDate: false,
    showPeople: true
  },
  render: (args) => {
    return MediaMention(args);
  },
};

// Media mention without people
export const WithoutPeople = {
  args: {
    item: sampleMediaMention,
    headingTag: 'h2',
    showPublication: true,
    showDate: true,
    showPeople: false
  },
  render: (args) => {
    return MediaMention(args);
  },
};

// Media mention with h3 heading
export const WithH3Heading = {
  args: {
    item: sampleMediaMention,
    headingTag: 'h3',
    showPublication: true,
    showDate: true,
    showPeople: true
  },
  render: (args) => {
    return MediaMention(args);
  },
};

// Minimal media mention (only title and content)
export const Minimal = {
  args: {
    item: sampleMediaMention,
    headingTag: 'h2',
    showPublication: false,
    showDate: false,
    showPeople: false
  },
  render: (args) => {
    return MediaMention(args);
  },
};