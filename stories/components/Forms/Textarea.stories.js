import { createStoryElement } from '../utils';
import Textarea from './Textarea.js';

export default {
  title: 'Components/Form/Textarea',
  tags: ['autodocs'],
  argTypes: {
    rows: { name: 'Row Count', control:'select', options: ['3', '4', '5', '6']},
    placeholder: { name: 'Placeholder Text'},
    note: { name: 'Help Text'},
    label: { name: 'Label Text'},
    disabled: { name: 'Disabled'},
  },
  args: {
    // Default args for all stories
    label:'',
    placeholder: '',
    note: '',
    rows:'3',
    disabled:false,
  },
};

export const Default = (args) => {
  return Textarea(args);
};
Default.storyName = 'Default Textarea';
Default.args = {
};

export const Disabled = (args) => {
  return Textarea(args);
};
Disabled.storyName = 'Disabled Textarea';
Disabled.args = {
  label:'Disabled Textarea',
  disabled:true,
};