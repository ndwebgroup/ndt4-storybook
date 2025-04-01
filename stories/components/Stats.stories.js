import Stats from './Stats.js';

export default {
  title: 'Components/Stats',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Stats display numerical data with optional descriptions and icons.'
      }
    }
  },
  argTypes: {
    items: {
      name: 'Stats Items',
      description: 'Array of stats. Each item should have a value property, a label property, and an optional icon property.',
      control: 'object'
    },
  },
  args: {
  },
};

// Example stats items
const exampleItems = [
  { value: '100%', label: 'Stat description lorem ipsum', icon: 'icon-check' },
  { value: '42', label: 'Stat description lorem ipsum', icon: 'icon-calendar' },
  { value: '7/10', label: 'Stat description lorem ipsum', icon: 'icon-envelope-o' },
];

// Example stats without icons
const exampleItemsNoIcons = [
  { value: '100%', label: 'Stat description lorem ipsum' },
  { value: '42', label: 'Stat description lorem ipsum' },
  { value: '7/10', label: 'Stat description lorem ipsum' },
];

export const Default = (args) => {
  return Stats(args);
};
Default.args = {
  items: exampleItemsNoIcons,
};

export const WithIcons = (args) => {
  return Stats(args);
};
WithIcons.args = {
  items: exampleItems,
};