import VideoCard from './VideoCard.js';

export default {
  title: 'Components/Cards/Card (Video)',
  tags: ['stable'],
  parameters: {
    docs: {
      description: {
        component: 'A default card with a dialog-style video in place of the card image. Selecting the thumbnail opens the video in a modal dialog.'
      }
    },
  },
  argTypes: {
    layout: { name: 'Card Layout', control: 'select', options: ['default', 'horizontal', 'stacked', 'compact'] },
    label: { name: 'Card Label' },
    title: { name: 'Card Title' },
    summary: { name: 'Card Summary' },
    headingTag: { name: 'Heading Tag', control: 'select', options: ['h2', 'h3', 'h4', 'p'] },
    videoId: { name: 'YouTube Video ID' },
    playStyle: { name: 'Play Button Style', control: 'select', options: ['default', 'outline', 'minimal', 'ornamental'] },
    backgroundColor: { name: 'Background Color', control: 'select', options: ['none', 'sky-blue-light', 'gray-extra-extra-light', 'warm-white', 'brand-blue', 'light', 'dark'] },
  },
  args: {
    layout: 'default',
    label: '',
    headingTag: 'h2',
    title: 'Card Title',
    summary: 'Hendrerit in quis venenatis aliquet venenatis scelerisque in ipsum parturient congue vulputate convallis ultricies at.',
    videoId: 'p_vC10eq474',
    playStyle: 'default',
    backgroundColor: 'none',
  },
};

export const Primary = (args) => VideoCard(args);

export const Horizontal = (args) => VideoCard(args);
Horizontal.args = { layout: 'horizontal' };

export const Stacked = (args) => VideoCard(args);
Stacked.args = { layout: 'stacked' };

export const BackgroundColor = (args) => VideoCard(args);
BackgroundColor.args = { backgroundColor: 'sky-blue-light' };

export const AllOptions = (args) => VideoCard(args);
AllOptions.args = {
  layout: 'horizontal',
  label: 'Card Label',
  headingTag: 'h3',
  playStyle: 'outline',
  backgroundColor: 'sky-blue-light',
};
