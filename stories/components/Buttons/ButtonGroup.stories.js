import ButtonGroup from './ButtonGroup.js';

export default {
  title: 'Components/Buttons/Button Group',
  tags: ['stable'],
  parameters: {
    docs: {
      description: {
        component: 'The Button Group component is used to group related buttons together, providing a cohesive user experience.'
      }
    },
    layout: 'centered',
  },
  argTypes: {
    items: {
      name: 'Button Group Items',
      description: 'Array of buttons. Each item should have a text property and an href property.',
      control: 'object'
    },
  },
  args: {
    //Default args for all stories
  },
};

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
};

Default.parameters = {
  docs: {
    description: {
      story: 'Description'
    }
  }
};