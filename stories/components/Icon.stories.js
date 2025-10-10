import Icon from './Icon.js';
import { getAvailableIcons } from '../utils/iconUtils.js';

export default {
  title: 'Components/Icon',
  tags: ['stable'],
  parameters: {
    design: {
      name: "Figma Assets",
      allowFullscreen: true,
      type: "figma",
      url: "https://www.figma.com/design/oMHFAa6HK6xMGMtxPhOkLV/University-of-Notre-Dame---Web-Theme-4.0-Digital-Design-Guide?node-id=4009-3904",
    },
    docs: {
      description: {
        component: 'SVG icons from the Notre Dame icon set that can be used across components.'
      }
    },
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
  return Icon({
    ...args,
    icons: availableIcons
  });
};
AllIcons.args = {
  icons: availableIcons,
};

export const SmallIcons = (args) => {
  return Icon({
    ...args,
    size: 'sm'
  });
};
SmallIcons.args = {
  icons: availableIcons,
  size: 'sm'
};

export const LargeIcons = (args) => {
  return Icon({
    ...args,
    size: 'lg'
  });
};
LargeIcons.args = {
  icons: availableIcons,
  size: 'lg'
};

export const ExtraLargeIcons = (args) => {
  return Icon({
    ...args,
    size: 'xl'
  });
};
ExtraLargeIcons.args = {
  icons: availableIcons,
  size: 'xl'
};

export const IconsWithoutNames = (args) => {
  return Icon({
    ...args,
    showNames: false
  });
};
IconsWithoutNames.args = {
  icons: availableIcons,
  showNames: false
};