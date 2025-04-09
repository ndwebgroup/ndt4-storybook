import NavigationPrimary from './NavigationPrimary.js';

export default {
  title: 'Components/Navigation (Primary)',
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
      description: 'Array of nav items. Each item should have a label property and a url property.',
      control: 'object'
    }
  }
};

// Example navigation items
const exampleNav = [
  { label: 'Academics', url: '#' },
  { label: 'Admissions', url: '#' },
  { label: 'Research', url: '#' },
  { label: 'Global', url: '#' },
  { label: 'Faith', url: '#' },
  { label: 'Community', url: '#' },
  { label: 'About', url: '#' },
];

export const Default = (args) => {
  return NavigationPrimary(args);
};

Default.args = {
  items: exampleNav
};