import ButtonGroup from './ButtonGroup.js';

export default {
  title: 'Components/Button Group',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Button Group description'
      }
    }
  },
  argTypes: {
    size: { name:'Size', control: 'select', options: ['default', 'large'] },
    items: {
      name: 'Button Group Items',
      description: 'Array of buttons. Each item should have a text property and an href property.',
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
  return ButtonGroup(args);
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