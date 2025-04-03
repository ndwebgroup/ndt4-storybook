import { createStoryElement } from '../utils';
import Dropdown from './Dropdown.js';

export default {
  title: 'Components/Form/Dropdown',
  tags: ['autodocs'],
  argTypes: {
    note: { name: 'Help Text'},
    label: { name: 'Label Text'},
    items: {
      name: 'Dropdown Group Items',
      description: 'Array of dropdown options. Each item should have a text property.',
      control: 'object'
    },
  },
  args: {
    // Default args for all stories
    label:'',
    note: '',
  },
};

const exampleItems = [
  { text: 'Dropdown Option 1' },
  { text: 'Dropdown Option 2' },
  { text: 'Dropdown Option 3' },
];

export const Default = (args) => {
  return Dropdown(args);
};
Default.storyName = 'Default Dropdown Group';
Default.args = {
  items: exampleItems,
};