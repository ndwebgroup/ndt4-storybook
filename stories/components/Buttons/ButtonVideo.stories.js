import ButtonVideo from './ButtonVideo.js';

export default {
  title: 'Components/Buttons/Video Button',
  tags: ['autodocs'],
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
  return ButtonVideo(args);
};
Default.storyName = 'Left Aligned Video Button';
Default.args = {
};
