import Avatar from './Avatar.js';

export default {
  title: 'Components/Avatar',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "The avatar component is used to display a person's image or initials within a circular border."
      }
    }
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

PlaceholderAvatar.storyName = 'Avatar with placeholder image';
PlaceholderAvatar.args = {
  size: 'md',
  type: 'placeholder'
};