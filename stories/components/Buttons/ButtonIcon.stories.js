import ButtonIcon from './ButtonIcon.js';

export default {
  title: 'Components/Buttons/Icon Button',
  tags: ['autodocs'],
  argTypes: {
    label: {
      name:'Reveal Text',
    },
    state: { 
      name: 'Button State',
      control: 'select', 
      options: ['default', 'cta'] 
    },
    type: { 
      name: 'Button Type',
      control: 'select', 
      options: ['primary', 'secondary', 'tertiary', 'neutral']
    },
    icon: { name: 'Show More Icon' },
    align: { name:'Button Alignment', control:'select', options:['left','right'] }
  },
  args: {
    // Default args for all stories
    state: 'default',
    type: 'primary',
    icon: 'arrow-up',
    label: 'Back to top',
    align: 'left'
  }
};

export const Default = (args) => {
  return ButtonIcon(args);
};
Default.storyName = 'Left Aligned Icon Button';
Default.args = {
};

export const RightAlign = (args) => {
  return ButtonIcon(args);
};
RightAlign.storyName = 'Right Aligned Icon Button';
RightAlign.args = {
  align:'right',
};