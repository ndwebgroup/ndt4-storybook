import VideoButton from './VideoButton.js';

export default {
  title: 'Components/Buttons/Video Button',
  tags: ['stable'],
  parameters: {
    docs: {
      description: {
        component: 'The Video Button component is used to display a button with a video icon, providing a cohesive user experience.'
      }
    },
    layout: 'centered',
  },
  argTypes: {
    label: {
      name:'Button Label',
    },
    type: { 
      name: 'Video Button Type',
      control: 'select', 
      options: ['default', 'outline', 'minimal', 'ornamental'],
    },
  },
  args: {
    // Default args for all stories
    type: 'default',
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

export const Outline = (args) => {
  return VideoButton({ ...args, type: 'outline' });
};
Outline.storyName = 'Outline';

export const Minimal = (args) => {
  return VideoButton({ ...args, type: 'minimal' });
};
Minimal.storyName = 'Minimal';

export const Ornamental = (args) => {
  return VideoButton({ ...args, type: 'ornamental' });
};
Ornamental.storyName = 'Ornamental';
