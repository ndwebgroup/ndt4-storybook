import Select from './Select';

export default {
  title: 'Components/Form/Select',
  component: Select,
};

// Create Template
const Template = (args) => {
  return Select(args);
};

// Default Select
export const Default = Template.bind({});
Default.args = {
  label: 'Choose an option',
  items: [
    {
      text: 'Option 1'
    },
    {
      text: 'Option 2'
    },
    {
      text: 'Option 3'
    }
  ]
};

// Select with Note
export const WithNote = Template.bind({});
WithNote.args = {
  label: 'Choose an option',
  note: 'This is an additional note.',
  items: [
    {
      text: 'Option 1'
    },
    {
      text: 'Option 2'
    },
    {
      text: 'Option 3'
    }
  ]
};