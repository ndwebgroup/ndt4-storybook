import Stats from './Stats.js';

export default {
  title: 'Components/Stats',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Stats description'
      }
    }
  },
  argTypes: {
    items: {
      name: 'Stats Items',
      description: 'Array of stats. Each item should have a number property and a text property.',
      control: 'object'
    },
  },
  args: {
  },
};

// Example breadcrumb items
const exampleItems = [
  { number: '100%', text: 'Stat description lorem ipsum' },
  { number: '42', text: 'Stat description lorem ipsum' },
  { number: '7/10', text: 'Stat description lorem ipsum' },
];

export const Default = (args) => {
  return Stats(args);
};
Default.args = {
  items: exampleItems,
};