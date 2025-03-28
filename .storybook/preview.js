/** @type { import('@storybook/html').Preview } */

import { themes } from '@storybook/theming';
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
  darkMode: {
    dark: { ...themes.dark, appBg: '#081629' },
    light: { ...themes.normal, appBg: '#fff' }
  }
};

export default preview;