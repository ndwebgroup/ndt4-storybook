import Avatar from './Avatar.js';

export default {
  title: 'Components/Avatar',
  parameters: {
    design: {
      name: "Figma Assets",
      allowFullscreen: true,
      type: "figma",
      url: "https://www.figma.com/design/oMHFAa6HK6xMGMtxPhOkLV/University-of-Notre-Dame---Web-Theme-4.0-Digital-Design-Guide?node-id=3299-1983",
    },
  },
  argTypes: {
    size: {
      name: 'Size',
      description: 'The size of the avatar',
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg']
    },
    type: {
      name: 'Type',
      description: 'The type of avatar',
      control:'select',
      options: ['image','placeholder']
    }
  }
};

export const Default = (args) => {
  return Avatar(args);
};

Default.args = {
  size: 'md',
  type: 'image'
};
Default.storyName = 'With image';
Default.parameters = {
  docs: {
    description: {
      story: 'Medium avatar as an image'
    }
  }
};

export const PlaceholderAvatar = (args) => {
  return Avatar(args);
};

PlaceholderAvatar.storyName = 'With placeholder image';
PlaceholderAvatar.args = {
  size: 'md',
  type: 'placeholder'
};