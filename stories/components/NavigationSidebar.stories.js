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

export const Default = (args) => {
  return NavigationSidebar(args);
};

Default.args = {
  items: exampleItems
};