// import { createStoryElement } from '../../utils';
import Radio from './Radio.js';

export default {
  title: 'Components/Form/Radio',
  tags: ['stable'],
  argTypes: {
    note: { name: 'Note'},
    label: { name: 'Label'},
    items: {
      name: 'Radio Group Items',
      description: 'Array of radio inputs. Each item should have a text property.',
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
  { text: 'Radio Input 1', modifier:'' },
  { text: 'Radio Input 2 (Selected)', modifier:'checked' },
  { text: 'Radio Input 3 (Disabled)', modifier:'disabled' },
];

export const Default = (args) => {
  return Radio(args);
};
Default.storyName = 'Default Radio Group';
Default.args = {
  items: exampleItems,
};

export const withLabel = (args) => {
  return Radio(args);
};
withLabel.args = {
  label:'Choose at option',
  items: [
    { text: 'Radio Input 1'},
    { text: 'Radio Input 2' },
    { text: 'Radio Input 3' }
  ]
};