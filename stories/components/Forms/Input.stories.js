import { createStoryElement } from '../utils';
import Input from './Input.js';

export default {
  title: 'Components/Form/Input',
  tags: ['autodocs'],
  argTypes: {
    placeholder: { name: 'Placeholder Text'},
    note: { name: 'Help Text'},
    label: { name: 'Field Label'},
    disabled: { name: 'Disabled'},
  },
  args: {
    label:'',
    placeholder: '',
    note: '',
    disabled:false,
  },
};

export const Default = (args) => {
  return Input(args);
};
Default.storyName = 'Default Input';
Default.args = {
};

export const Disabled = (args) => {
  return Input(args);
};
Disabled.storyName = 'Default Input';
Disabled.args = {
};