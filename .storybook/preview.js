/** @type { import('@storybook/html').Preview } */

import { themes } from '@storybook/theming';
import { Unstyled } from "@storybook/blocks";
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
    dark: { ...themes.dark, appBg: '#0c2340', barBg: '#0c2340', },
    light: { ...themes.normal, appBg: '#fff' }
  }
};

export default preview;