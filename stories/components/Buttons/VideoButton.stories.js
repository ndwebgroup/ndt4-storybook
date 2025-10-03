import VideoButton from './VideoButton.js';

export default {
  title: 'Components/Buttons/Video Button',
  argTypes: {
    label: {
      name:'Button Label',
    },
    cta: { 
      name: 'Call to Action',
    },
    type: { 
      name: 'Button Type',
      control: 'select', 
      options: ['primary', 'secondary', 'tertiary', 'neutral']
    },
  },
  args: {
    // Default args for all stories
    type: 'primary',
    label:'View Video',
    cta: false,
  }
};

export const Default = (args) => {
  return VideoButton(args);
};
Default.storyName = 'Default';
Default.args = {
};
