import Icons from './Icons.js';
import { getAvailableIcons } from '../utilities/iconUtils.js';

export default {
  title: 'Components/Icons',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'SVG icons from the Notre Dame icon set that can be used across components.'
      }
    }
  },
  argTypes: {
    icons: {
      name: 'Icons',
      description: 'Array of icon IDs to display',
      control: 'object'
    },
    showNames: {
      name: 'Show Names',
      description: 'Whether to display icon names',
      control: 'boolean'
    },
    size: {
      name: 'Icon Size',
      description: 'Size of the icons',
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl']
    }
  },
  args: {
    showNames: true,
    size: 'md'
  }
};

const availableIcons = getAvailableIcons();

export const AllIcons = (args) => {
  return Icons({
    ...args,
    icons: availableIcons
  });
};
AllIcons.args = {
  icons: availableIcons,
};

export const SmallIcons = (args) => {
  return Icons({
    ...args,
    size: 'sm'
  });
};
SmallIcons.args = {
  icons: availableIcons,
  size: 'sm'
};

export const LargeIcons = (args) => {
  return Icons({
    ...args,
    size: 'lg'
  });
};
LargeIcons.args = {
  icons: availableIcons,
  size: 'lg'
};

export const ExtraLargeIcons = (args) => {
  return Icons({
    ...args,
    size: 'xl'
  });
};
ExtraLargeIcons.args = {
  icons: availableIcons,
  size: 'xl'
};

export const IconsWithoutNames = (args) => {
  return Icons({
    ...args,
    showNames: false
  });
};
IconsWithoutNames.args = {
  icons: availableIcons,
  showNames: false
};