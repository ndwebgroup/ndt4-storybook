import Switch from './Switch';

export default {
  title: 'Components/Forms/Switch',
  tags: ['stable'],
  component: Switch,
  argTypes: {
    note: { name: 'Note'},
    label: { name: 'Label'},
    icon: { name: 'Icon'},
    ariaLabel: { name: 'ARIA Label', description: 'Accessible name when there is no visible label. Not used when there is a label.', control: 'text' }
  },
  args: {
    // Default args for stories
    note: '',
    icon:'',
    label: '',
    ariaLabel: 'Toggle Me'
  }
};

// Create Template
const Template = (args) => {
  return Switch(args);
};

// Default Switch
export const Default = Template.bind({});
  Default.args = {
};

export const withLabel = Template.bind({});
  withLabel.args = {
    label:'Toggle Me'
};

export const withIcon = Template.bind({});
  withIcon.args = {
    icon:'mode',
    ariaLabel:'Light/Dark',
};