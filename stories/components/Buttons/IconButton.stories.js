import IconButton from './IconButton.js';

export default {
  title: 'Components/Buttons/Icon Button',
  tags: ['stable'],
  parameters: {
    docs: {
      description: {
        component: 'The Icon Button component is used to display a button with an icon, providing a cohesive user experience.'
      }
    },
  },
  argTypes: {
    label: {
      name:'Reveal Text',
    },
    cta: { 
      name: 'Call to Action',
    },
    type: { 
      name: 'Button Type',
      control: 'select', 
      options: ['primary', 'secondary', 'tertiary', 'neutral']
    },
    icon: { name: 'Icon', description:'Use Icons component for list of options' },
    align: { name:'Button Placement', control:'select', options:['left','right'] },
    ariaLabel: { name: 'ARIA Label', description: 'Accessible name for an icon-only button. Not used when there is reveal text.', control: 'text' }
  },
  args: {
    // Default args for all stories
    type: 'primary',
    icon: 'plus',
    label:'',
    cta: false,
    align: 'left',
    ariaLabel: 'Add',
  }
};

export const Default = (args) => {
  return IconButton(args);
};
Default.storyName = 'Left';
Default.args = {
};

export const Right = (args) => {
  return IconButton(args);
};
Right.storyName = 'Right';
Right.args = {
  align:'right',
  icon:'arrow-up',
  ariaLabel:'Back to top',
};

export const LeftReveal = (args) => {
  return IconButton(args);
};
LeftReveal.storyName = 'Left With Reveal';
LeftReveal.args = {
  icon:'arrow-up',
  label:'Back to top',
};

export const RightReveal = (args) => {
  return IconButton(args);
};
RightReveal.storyName = 'Right With Reveal';
RightReveal.args = {
  align:'right',
  icon:'arrow-up',
  label:'Back to top',
};