import { createStoryElement } from '../../utils';
import Input from './Input.js';

export default {
  title: 'Components/Form/Input',
  tags: ['autodocs'],
  argTypes: {
    type: { name: 'Input Type', control:'select', options: ['date', 'email', 'number', 'password', 'text']},
    placeholder: { name: 'Placeholder Text'},
    note: { name: 'Note'},
    label: { name: 'Label'},
    disabled: { name: 'Disabled'},
  },
  args: {
    // Default args for all stories
    type:'text',
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

export const Date = (args) => {
  return Input(args);
};
Date.storyName = 'Date Input';
Date.args = {
  label:'Date',
  type:'date',
};

export const Email = (args) => {
  return Input(args);
};
Email.storyName = 'Email Input';
Email.args = {
  type:'email',
  label:'Email address',
  placeholder:'email@nd.edu',
};

export const Number = (args) => {
  return Input(args);
};
Number.storyName = 'Number Input';
Number.args = {
  label:'Number Field',
  type:"number",
};

export const Password = (args) => {
  return Input(args);
};
Password.storyName = 'Password Input';
Password.args = {
  label:'Password Field',
  type:"password",
};

export const Disabled = (args) => {
  return Input(args);
};
Disabled.storyName = 'Disabled Input';
Disabled.args = {
  disabled:true,
  label:'Disabled Field',
  placeholder:'Disabled field',
};