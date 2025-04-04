import { createStoryElement } from '../utils';
import Radio from './Radio.js';

export default {
  title: 'Components/Form/Radio',
  tags: ['autodocs'],
  argTypes: {
    note: { name: 'Help Text'},
    label: { name: 'Label Text'},
    items: {
      name: 'Radio Group Items',
      description: 'Array of radio inputs. Each item should have a text property.',
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
  { text: 'Radio Input 1' },
  { text: 'Radio Input 2' },
  { text: 'Radio Input 3' },
];

export const Default = (args) => {
  return Radio(args);
};
Default.storyName = 'Default Radio Group';
Default.args = {
  items: exampleItems,
};