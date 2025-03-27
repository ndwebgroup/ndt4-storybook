/** @type { import('@storybook/html').Preview } */

import '../public/global.css';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  sidebar: {
    order: {
      default: ['Components', ['*', 'Other']], // Sort Components alphabetically
    },
  },
};

export default preview;