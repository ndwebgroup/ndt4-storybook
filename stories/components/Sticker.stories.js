import Sticker from './Sticker.js';
import { getAvailableStickers } from '../utils/stickerUtils.js';

export default {
  title: 'Components/Sticker',
  tags: ['stable'],
  parameters: {
    docs: {
      description: {
        component: 'SVG sticker from the Notre Dame sticker set that can be used across components.'
      }
    },
  },
  argTypes: {
    stickers: {
      name: 'Stickers',
      description: 'Array of sticker IDs to display',
      control: 'object'
    },
    showNames: {
      name: 'Show Names',
      description: 'Whether to display sticker names',
      control: 'boolean'
    },
    size: {
      name: 'Sticker Size',
      description: 'Size of the stickers',
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl']
    }
  },
  args: {
    showNames: true,
    size: 'md'
  }
};

const availableStickers = getAvailableStickers();

export const AllStickers = (args) => {
  return Sticker({
    ...args,
    stickers: availableStickers
  });
};
AllStickers.args = {
  stickers: availableStickers,
};

export const SmallStickers = (args) => {
  return Sticker({
    ...args,
    size: 'sm'
  });
};
SmallStickers.args = {
  stickers: availableStickers,
  size: 'sm'
};

export const LargeStickers = (args) => {
  return Sticker({
    ...args,
    size: 'lg'
  });
};
LargeStickers.args = {
  stickers: availableStickers,
  size: 'lg'
};

export const ExtraLargeStickers = (args) => {
  return Sticker({
    ...args,
    size: 'xl'
  });
};
ExtraLargeStickers.args = {
  stickers: availableStickers,
  size: 'xl'
};

export const StickersWithoutNames = (args) => {
  return Sticker({
    ...args,
    showNames: false
  });
};
StickersWithoutNames.args = {
  stickers: availableStickers,
  showNames: false
};