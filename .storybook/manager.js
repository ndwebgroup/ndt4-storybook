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
  }),
  // Set the initial path that Storybook opens to
  initialPath: '/docs/getting-started--docs',
});