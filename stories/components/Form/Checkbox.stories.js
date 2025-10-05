// import { createStoryElement } from '../../utils';
import Checkbox from './Checkbox.js';

export default {
  title: 'Components/Form/Checkbox',
  tags: ['stable'],
  argTypes: {
    note: { name: 'Note'},
    label: { name: 'Label'},
    items: {
      name: 'Checkbox Group Items',
      description: 'Array of checkbox inputs. Each item should have a text property.',
      control: 'object'
    },
  },
  args: {
    // Default args for all stories
    label:'',
    items:[],
    note: '',
  },
};

const exampleItems = [
  { text: 'Checkbox Input 1 (Default)', modifier:'' },
  { text: 'Checkbox Input 2 (Disabled)', modifier: 'disabled' },
  { text: 'Checkbox Input 3 (Checked)', modifier: 'checked' },
];

export const Default = (args) => {
  return Checkbox(args);
};
Default.storyName = 'Default Checkbox Group';
Default.args = {
  items: exampleItems,
};