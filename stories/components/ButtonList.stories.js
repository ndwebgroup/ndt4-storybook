import ButtonList from './ButtonList.js';

export default {
  title: 'Components/Button List',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Button List description'
      }
    }
  },
  argTypes: {
    size: { name:'Size', control: 'select', options: ['default', 'large'] },
    items: {
      name: 'Button List Items',
      description: 'Array of list items. Each item should have a text property and an href property.',
      control: 'object'
    },
  },
  args: {
    size: 'default',
  },
};

// Example breadcrumb items
const exampleItems = [
  { text: 'Button 1', href: '#' },
  { text: 'Button 2', href: '#' },
  { text: 'Button 3', href: '#' },
];

export const Default = (args) => {
  return ButtonList(args);
};
Default.args = {
  items: exampleItems,
  size: 'default',
};

Default.parameters = {
  docs: {
    description: {
      story: 'Description'
    }
  }
};

export const Large = (args) => {
  return ButtonList(args);
};

Large.storyName = 'Large Button List';
Large.args = {
  items: exampleItems,
  size: 'large',
};

Large.parameters = {
  docs: {
    description: {
      story: 'Description'
    }
  }
};