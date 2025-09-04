import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming/create';
import '../css/global.css';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'Notre Dame Design System',
    brandUrl: 'https://webtheme.nd.edu',
    brandImage: '/logo.svg',
    brandTarget: '_self',
  }),
});