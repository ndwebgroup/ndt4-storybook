import Select from './Select';

export default {
  title: 'Components/Form/Select',
  tags: ['autodocs'],
  component: Select,
  argTypes: {
    note: { name: 'Note'},
    label: { name: 'Label'},
    items: {
      name: 'Select Options Items',
      description: 'Array of options. Each item should have a text property.',
      control: 'object'
    },
  },
  args: {
    // Default args for stories
    label:'',
    items: [],
    note: '',
  }
};

// Create Template
const Template = (args) => {
  return Select(args);
};

// Default Select
export const Default = Template.bind({});
Default.args = {
  items: [
    { text: 'Option 1', modifier:''},
    { text: 'Option 2 (Selected)', modifier:'selected'},
    { text: 'Option 3 (Disabled)', modifier:'disabled'},
  ]
};

// Select with Label
export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Choose an option',
  items: [
    { text: 'Option 1'},
    { text: 'Option 2' },
    { text: 'Option 3' }
  ]
};

// Select with Note
export const WithNote = Template.bind({});
WithNote.args = {
  note: 'This is an additional note.',
  items: [
    { text: 'Option 1'},
    { text: 'Option 2' },
    { text: 'Option 3' }
  ]
};