import Stats from './Stats.js';

export default {
  title: 'Components/Stats',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Stats display numerical data with optional descriptions and stickers.'
      }
    }
  },
  argTypes: {
    size: { name:'Stat size', control:'select', options:['default','lg']},
    items: {
      name: 'Stats Items',
      description: 'Array of stats. Each item should have a value property, a label property, and an optional sticker property.',
      control: 'object'
    },
    alignment: { name: 'Alignment', control: 'select', options: ['left', 'center'], defaultValue: 'left' }
  },
  args: {
    alignment: 'left',
    size:'default',
  },
};

// Example stats items
const exampleItems = [
  { value: '96%', label: 'graduation rate (top 5 among research universities)', sticker: 'sticker-cap' },
  { value: 'TOP', label: 'producer of Fullbright Program students for 10 consecutive years', sticker: 'sticker-backpack' },
  { value: '9:1', label: 'countries where grads conduct on-site research', sticker: 'sticker-globe' },
];

// Example stats without stickers
const exampleItemsNoStickers = [
  { value: '500+', label: 'Student Clubs and Groups' },
  { value: '28', label: 'Campus Eateries' },
  { value: '10%', label: 'Acceptance Rate' },
];

export const Default = (args) => {
  return Stats(args);
};
Default.args = {
  items: exampleItemsNoStickers,
};

export const Large = (args) => {
  return Stats(args);
};
Large.args = {
  items: exampleItemsNoStickers,
  size:'lg'
};

export const Centered = (args) => {
  return Stats(args);
};
Centered.args = {
  items: exampleItemsNoStickers,
  alignment: 'center'
};

export const WithStickers = (args) => {
  return Stats(args);
};
WithStickers.args = {
  items: exampleItems,
};

export const CenteredWithStickers = (args) => {
  return Stats(args);
};
CenteredWithStickers.args = {
  items: exampleItems,
  alignment: 'center'
};