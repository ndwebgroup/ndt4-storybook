import Tabs from './Tabs.js';

export default {
  title: 'Components/Tabs',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Tabs description'
      }
    }
  },
  argTypes: {
    items: {
      name: 'Tab Items',
      description: 'Array of tabs. Each item should have a title property, a content property, and an optional modifier property.',
      control: 'object',
    },
    tabVariant: { name:"Tab Variant", control:'select', options:['default','lg'] }
  },
  args: {
  // Default args for stories
  },
};

// Example stats items
const exampleItems = [
  { title: 'Tab 1', content: 'Porta vestibulum ullamcorper ac hac a himenaeos dui nisl a condimentum ligula lorem litora vulputate placerat vel class id lacinia consectetur adipiscing pretium vel dictum parturient parturient varius parturient elit.', },
  { title: 'Tab 2', content: 'Porta vestibulum ullamcorper ac hac a himenaeos dui nisl a condimentum ligula lorem litora vulputate placerat vel class id lacinia consectetur adipiscing pretium vel dictum parturient parturient varius parturient elit.', },
  { title: 'Tab 3', content: 'Porta vestibulum ullamcorper ac hac a himenaeos dui nisl a condimentum ligula lorem litora vulputate placerat vel class id lacinia consectetur adipiscing pretium vel dictum parturient parturient varius parturient elit.', },
  { title: 'Tab 4', content: 'Porta vestibulum ullamcorper ac hac a himenaeos dui nisl a condimentum ligula lorem litora vulputate placerat vel class id lacinia consectetur adipiscing pretium vel dictum parturient parturient varius parturient elit.', },
];

export const Default = (args) => {
  return Tabs(args);
};
Default.args = {
  tabVariant: 'default',
  items: exampleItems,
};

export const Large = (args) => {
  return Tabs(args);
};
Large.args = {
  tabVariant: 'lg',
  items: exampleItems,
};