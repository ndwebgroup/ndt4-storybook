import ButtonGroup from './ButtonGroup.js';

export default {
  title: 'Components/Buttons/Button Group',
  tags: ['modified'],
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
    divided: {
      name: 'Border Divider',
      description: 'Adds a divider between buttons when set to true.',
      control: 'boolean'
    }
  },
  args: {
    //Default args for all stories
    divided: false
  },
};

const exampleItems = [
  { text: 'Button 1', href: '#' },
  { text: 'Button 2', href: '#' },
  { text: 'Button 3', href: '#' },
  { text: 'Button 4', href: '#' },
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

export const Border = (args) => {
  return ButtonGroup(args);
};
Border.args = {
  items: exampleItems,
  divided: true
};