import LedeButton from './LedeButton.js';

export default {
  title: 'Components/Buttons/Lede Button',
  tags: ['stable'],
  parameters: {
    docs: {
      description: {
        component: 'The Lede Button component is used to display a button with a lede style, primarily used for linking long-form content, providing a cohesive user experience.'
      }
    },
    layout: 'centered',
  },
  argTypes: {
    label: {
      name:'Button Label',
    },
  },
  args: {
    // Default args for all stories
    label:'Notre Dame attracts brilliant, energetic thinkers who are motivated to change the world.',
    cta: false,
  }
};

export const Default = (args) => {
  return LedeButton(args);
};
Default.storyName = 'Default';
Default.args = {
};
