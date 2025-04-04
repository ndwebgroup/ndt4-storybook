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
    id: 'default-textarea',
    label:'Default Textarea',
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
  label:'Default Textarea',
  placeholder: 'Enter text here...'
};

// Story for Textarea with Help Text
export const HelpText = (args) => {
  return Textarea(args);
};
HelpText.storyName = 'Textarea with Help Text';
HelpText.args = {
  id: 'help-text-textarea',
  label:'Textarea with Help Text',
  note: 'This is some help text.',
  placeholder: 'Enter text here...'
};

export const Disabled = (args) => {
  return Textarea(args);
};
Disabled.storyName = 'Disabled Textarea';
Disabled.args = {
  id: 'disabled-textarea',
  label:'Disabled Textarea',
  disabled:true,
};