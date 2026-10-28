import ImageCompare from './ImageCompare.js';
// Image Compare is an opt-in package (see Components/Image Compare/Docs) —
// its CSS is not part of ndt.css, so it's imported only here, not in
// .storybook/preview.js, to demonstrate that a site only loads it on
// pages that use the component.
import '../../css/image-compare.css';

// Loads the delegated behavior script exactly once, the same way a real
// site would add <script src="/js/image-compare.js"> only to pages using
// the component — mirrors the withNDT4Script pattern in preview.js.
const withImageCompareScript = (Story) => {
  if (!document.getElementById('image-compare-script')) {
    const script = document.createElement('script');
    script.id = 'image-compare-script';
    script.src = '/js/image-compare.js';
    document.body.appendChild(script);
  }
  return Story();
};

export default {
  title: 'Components/Image Compare',
  tags: ['coming'],
  decorators: [withImageCompareScript],
  argTypes: {
    beforeImage: { name: 'Before Image URL', control: 'text' },
    afterImage: { name: 'After Image URL', control: 'text' },
    beforeAlt: { name: 'Before Image Alt Text', control: 'text' },
    afterAlt: { name: 'After Image Alt Text', control: 'text' },
    caption: { name: 'Caption', control: 'text' },
  },
  parameters: {
    docs: {
      description: {
        component: 'The Image Compare component lets users preview two images with a draggable before/after slider. Drag the handle, tap anywhere on the image, or use arrow keys to move the divider.'
      }
    },
  },
  args: {
    beforeImage: '/images/placeholder-campus-number-1-1200x675.jpg',
    afterImage: '/images/placeholder-campus-number-2-1200x675.jpg',
    beforeAlt: 'Campus placeholder, before',
    afterAlt: 'Campus placeholder, after',
    caption: '',
  }
};

export const Primary = (args) => {
  return ImageCompare(args);
};
Primary.args = {
};

export const WithCaption = (args) => {
  return ImageCompare(args);
};
WithCaption.args = {
  caption: 'Drag the slider to compare the before and after images.',
};
