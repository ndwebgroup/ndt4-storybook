import MediaMentionList from './MediaMentionList';

export default {
  title: 'Components/Media Mention (List)',
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
    },
    showPagination: {
      control: 'boolean',
      description: 'Whether to show pagination'
    },
    currentPage: {
      control: { type: 'number', min: 1 },
      description: 'Current page number for pagination'
    },
    totalPages: {
      control: { type: 'number', min: 1 },
      description: 'Total number of pages for pagination'
    },
    baseUrl: {
      control: 'text',
      description: 'Base URL for pagination links'
    }
  },
};

// Sample media mention data
const sampleMediaMentions = [
  {
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
        first_name: 'Joe',
        last_name: 'Leprechaun',
        department: 'College of Engineering',
        url: '#professor-leprechaun',
        image: '/public/images/placeholder-profile-1-300x300.jpg'
      },
      {
        first_name: 'Jonathan',
        last_name: 'Arp',
        department: 'Department of Chemistry and Biochemistry',
        url: '#professor-arp',
        image: '/public/images/placeholder-profile-1-300x300.jpg'
      }
    ]
  },
  {
    title: 'Notre Dame economists predict steady growth despite global challenges',
    public_url: 'https://example.com/notre-dame-economics-forecast',
    html_id: 'mention-124',
    content: '<p>A new report from Notre Dame\'s Department of Economics suggests that the U.S. economy will continue to see moderate growth in the coming year despite ongoing global economic uncertainties.</p>',
    publication_date: '2025-04-02',
    publication: {
      name: 'Financial Times',
      slug: 'financial-times',
      logo_url: 'https://conductor.nd.edu/images/publications/financial-times.png',
      logo_width: 200,
      logo_height: 50
    },
    people: [
      {
        first_name: 'Stephanie',
        last_name: 'Tatay-Myers',
        department: 'Department of Economics',
        url: '#professor-steph',
        image: '/public/images/placeholder-profile-1-300x300.jpg'
      }
    ]
  },
  {
    title: 'Notre Dame professor discusses impact of AI on education in national forum',
    public_url: 'https://example.com/notre-dame-ai-education',
    html_id: 'mention-125',
    content: '<p>Professor Zachariah Allen from Notre Dame\'s College of Education participated in a national forum on the future of education, highlighting how artificial intelligence is transforming teaching methods and student learning experiences.</p>',
    publication_date: '2025-03-28',
    publication: {
      name: 'British Broadcasting Corporation',
      slug: 'bbc-news',
      logo_url: 'https://conductor.nd.edu/images/publications/bbc-news.png',
      logo_width: 160,
      logo_height: 70
    },
    people: [
      {
        first_name: 'Zachariah',
        last_name: 'Allen',
        department: 'Notre Dame Research',
        url: '#professor-allen',
        image: '/public/images/placeholder-profile-1-300x300.jpg'
      }
    ]
  }
];

// Default media mention list with all features
export const Default = {
  args: {
    items: sampleMediaMentions,
    headingTag: 'h2',
    showPublication: true,
    showDate: true,
    showPeople: true,
    showPagination: true,
    currentPage: 1,
    totalPages: 7,
    baseUrl: '#'
  },
  render: (args) => {
    return MediaMentionList(args);
  },
};

// Media mention list without publications
export const WithoutPublications = {
  args: {
    items: sampleMediaMentions,
    headingTag: 'h2',
    showPublication: false,
    showDate: true,
    showPeople: true,
    showPagination: true,
    currentPage: 1,
    totalPages: 7,
    baseUrl: '#'
  },
  render: (args) => {
    return MediaMentionList(args);
  },
};

// Media mention list without dates
export const WithoutDates = {
  args: {
    items: sampleMediaMentions,
    headingTag: 'h2',
    showPublication: true,
    showDate: false,
    showPeople: true,
    showPagination: true,
    currentPage: 1,
    totalPages: 7,
    baseUrl: '#'
  },
  render: (args) => {
    return MediaMentionList(args);
  },
};

// Media mention list without people
export const WithoutPeople = {
  args: {
    items: sampleMediaMentions,
    headingTag: 'h2',
    showPublication: true,
    showDate: true,
    showPeople: false,
    showPagination: true,
    currentPage: 1,
    totalPages: 7,
    baseUrl: '#'
  },
  render: (args) => {
    return MediaMentionList(args);
  },
};

// Media mention list with h3 headings
export const WithH3Headings = {
  args: {
    items: sampleMediaMentions,
    headingTag: 'h3',
    showPublication: true,
    showDate: true,
    showPeople: true,
    showPagination: true,
    currentPage: 1,
    totalPages: 7,
    baseUrl: '#'
  },
  render: (args) => {
    return MediaMentionList(args);
  },
};

// Media mention list with pagination on different page
export const PaginationPage3 = {
  args: {
    items: sampleMediaMentions,
    headingTag: 'h2',
    showPublication: true,
    showDate: true,
    showPeople: true,
    showPagination: true,
    currentPage: 3,
    totalPages: 7,
    baseUrl: '#'
  },
  render: (args) => {
    return MediaMentionList(args);
  },
};

// Media mention list without pagination
export const WithoutPagination = {
  args: {
    items: sampleMediaMentions,
    headingTag: 'h2',
    showPublication: true,
    showDate: true,
    showPeople: true,
    showPagination: false
  },
  render: (args) => {
    return MediaMentionList(args);
  },
};

// Minimal media mention list (just titles and content)
export const Minimal = {
  args: {
    items: sampleMediaMentions,
    headingTag: 'h2',
    showPublication: false,
    showDate: false,
    showPeople: false,
    showPagination: false
  },
  render: (args) => {
    return MediaMentionList(args);
  },
};