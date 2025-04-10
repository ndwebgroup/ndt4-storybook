import Switch from './Switch';

export default {
  title: 'Components/Form/Switch',
  tags: ['autodocs'],
  component: Switch,
  argTypes: {
    note: { name: 'Help Text'},
    label: { name: 'Label Text'},
    icon: { name: 'Icon'}
  },
  args: {
    // Default args for stories
    note: '',
    icon:'',
    label: ''
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
};