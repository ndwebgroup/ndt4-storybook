import PrimaryNavigation from './PrimaryNavigation.js';

export default {
  title: 'Components/Primary Navigation',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Primary Navigation description'
      }
    }
  },
  argTypes: {
    items: {
      name: 'Navigation Items',
      description: 'Array of nav items. Each item should have a text property and an href property.',
      control: 'object'
    }
  }
};

// Example breadcrumb items
const exampleItems = [
  { text: 'Academics', href: '#' },
  { text: 'Admissions', href: '#' },
  { text: 'Research', href: '#' },
  { text: 'Global', href: '#' },
  { text: 'Faith', href: '#' },
  { text: 'Community', href: '#' },
  { text: 'About', href: '#' },
];

export const Default = (args) => {
  return PrimaryNavigation(args);
};

Default.args = {
  items: exampleItems
};