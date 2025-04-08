import NavigationSidebar from './NavigationSidebar.js';

export default {
  title: 'Components/Navigation (Sidebar)',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Sidebar Navigation description'
      }
    }
  },
  argTypes: {
    items: {
      name: 'Navigation Items',
      description: 'Array of nav items. Each item should have a text property and an href property.',
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

// Example breadcrumb items
const exampleItems = [
  { text: 'Mission & Commitment', href: '#' },
  { text: 'Leadership', href: '#' },
  { text: 'Campus', href: '#' },
  { text: 'Visit', href: '#' },
  { text: 'History', href: '#' },
  { text: 'Endowment', href: '#' },
  { text: 'Recent News', href: '#' },
  { text: 'Contact Notre Dame', href: '#' },
];

// Example multi-level navigation items
const multiLevelItems = [
  { text: 'Home', href: '/' },
  { text: 'News', href: '/news/', children: [] },
  { text: 'Events', href: '/events/', children: [] },
  {
    text: 'Web',
    href: '/web/',
    active: true,
    current: true,
    children: [
      { text: 'Design System', href: '/web/design-system/', children: [] },
      { text: 'URL Shortener', href: '/web/url-shortener/' },
      {
        text: 'Websites',
        href: '/web/websites/',
        active: true,
        current: true,
        children: [
          { text: 'Custom', href: '/web/websites/custom/' },
          { text: 'DIY', href: '/web/websites/diy/' },
          { text: 'WordPress', href: '/web/websites/wordpress/' },
        ]
      },
      { text: 'Subdomains', href: '/web/subdomains/' },
    ]
  },
  { text: 'Forms', href: '/forms/', children: [] },
  { text: 'Contact Us', href: '/contact-us/', children: [] },
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