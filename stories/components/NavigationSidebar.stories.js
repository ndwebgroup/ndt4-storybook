import NavigationSidebar from './NavigationSidebar.js';

export default {
  title: 'Components/Navigation (Sidebar)',
  tags: ['stable'],
  parameters: {
    design: {
      name: "Figma Assets",
      allowFullscreen: true,
      type: "figma",
      url: "https://www.figma.com/design/oMHFAa6HK6xMGMtxPhOkLV/University-of-Notre-Dame---Web-Theme-4.0-Digital-Design-Guide?node-id=1663-12974",
    },
    docs: {
      description: {
        component: 'The Sidebar Navigation component provides a vertical list of links for site navigation, supporting multiple levels of nested items and active states for the current page.'
      }
    }
  },
  argTypes: {
    items: {
      name: 'Navigation Items',
      description: 'Array of nav items. Each item should have a text property and a url property.',
      control: 'object'
    },
    navClass: {
      name: 'Navigation CSS Class',
      description: 'CSS class for the navigation component',
      control: 'text'
    },
    ariaLabel: {
      name: 'ARIA Label',
      description: 'Accessibility label for the navigation',
      control: 'text'
    },
    activeItem: {
      name: 'Active Item',
      description: 'Text of the currently active item',
      control: 'text'
    }
  }
};

// Example navigation items
const exampleItems = [
  { label: 'Mission & Commitment', url: '#' },
  { label: 'Leadership', url: '#' },
  { label: 'Campus', url: '#' },
  { label: 'Visit', url: '#' },
  { label: 'History', url: '#' },
  { label: 'Endowment', url: '#' },
  { label: 'Recent News', url: '#' },
  { label: 'Contact Notre Dame', url: '#' },
];

// Example multi-level navigation items
const multiLevelItems = [
  { label: 'Home', url: '/' },
  { label: 'News', url: '/news/', children: [] },
  { label: 'Events', url: '/events/', children: [] },
  {
    label: 'Web',
    url: '/web/',
    active: true,
    current: true,
    children: [
      { label: 'Design System', url: '/web/design-system/', children: [] },
      { label: 'URL Shortener', url: '/web/url-shortener/' },
      {
        label: 'Websites',
        url: '/web/websites/',
        active: true,
        current: true,
        children: [
          { label: 'Custom', url: '/web/websites/custom/' },
          { label: 'DIY', url: '/web/websites/diy/' },
          { label: 'WordPress', url: '/web/websites/wordpress/' },
        ]
      },
      { label: 'Subdomains', url: '/web/subdomains/' },
    ]
  },
  { label: 'Forms', url: '/forms/', children: [] },
  { label: 'Contact Us', url: '/contact-us/', children: [] },
];

export const Default = (args) => {
  return NavigationSidebar(args);
};

Default.args = {
  items: exampleItems
};

export const MultiLevel = (args) => {
  return NavigationSidebar(args);
};

MultiLevel.args = {
  items: multiLevelItems,
  navClass: 'nav-full',
  ariaLabel: 'Primary',
  activeItem: 'Forms'
};

MultiLevel.parameters = {
  docs: {
    description: {
      story: 'Navigation sidebar with three levels of nested navigation. Shows active and current states.'
    }
  }
};