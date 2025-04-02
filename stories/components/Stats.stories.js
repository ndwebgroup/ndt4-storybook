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
  { value: '96%', label: 'graduation rate (top 5 among research universities)', icon: 'icon-bluesky' },
  { value: 'TOP', label: 'producer of Fullbright Program students for 10 consecutive years', icon: 'icon-calendar' },
  { value: '9:1', label: 'student to faculty ratio', icon: 'icon-envelope-o' },
];

// Example stats without icons
const exampleItemsNoIcons = [
  { value: '500+', label: 'Student Clubs and Groups' },
  { value: '28', label: 'Campus Eateries' },
  { value: '10%', label: 'Acceptance Rate' },
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