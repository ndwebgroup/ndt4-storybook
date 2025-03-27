import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';
import '../public/global.css';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'Notre Dame Design System',
    brandUrl: 'https://webtheme.nd.edu',
    brandImage: '/logo-nd.png',
    brandTarget: '_self',

    //UI
    appBg: '#081629',
    appBorderRadius: 3,

    // Toolbar default and active colors
    barTextColor: '#9e9e9e',
    barSelectedColor: '#585c6d',
    barHoverColor: '#585c6d',
    barBg: '#f2f2f2',

    // Form
    inputBg: '#ffffff',
    inputBorder: '#10162F',
    inputTextColor: '#10162F',
  }),
  // Set the initial path that Storybook opens to
  initialPath: '/docs/getting-started--docs',
});