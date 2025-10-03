import ButtonList from './ButtonList.js';

export default {
  title: 'Components/Buttons/Button List',
  parameters: {
  },
  argTypes: {
    items: {
      name: 'Button List Items',
      description: 'Array of list items. Each item should have a text property and an href property.',
      control: 'object'
    },
  },
  args: {
    // Default args for all stories
  },
};

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
  className: 'btn--list-lg'
};

Large.parameters = {
  docs: {
    description: {
      story: 'Use a large button list for featured content'
    }
  }
};