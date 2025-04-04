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
    icon: 'plus',
    align: 'left',
    label:'',
  }
};

export const Default = (args) => {
  return ButtonIcon(args);
};
Default.storyName = 'Left Aligned Icon Button';
Default.args = {
};

export const Right = (args) => {
  return ButtonIcon(args);
};
Right.storyName = 'Right Aligned Icon Button';
Right.args = {
  align:'right',
  icon:'arrow-up',
};

export const LeftReveal = (args) => {
  return ButtonIcon(args);
};
LeftReveal.storyName = 'Left Icon Button With Reveal';
LeftReveal.args = {
  icon:'arrow-up',
  label:'Back to top',
};

export const RightReveal = (args) => {
  return ButtonIcon(args);
};
RightReveal.storyName = 'Right Icon Button With Reveal';
RightReveal.args = {
  align:'right',
  icon:'arrow-up',
  label:'Bact to top',
};