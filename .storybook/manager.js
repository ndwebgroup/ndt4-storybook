import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming/create';
import '../css/global.css';

addons.setConfig({
  status: {
    statuses: {
      coming: {
        background: '#ae9142',
        color: '#ffffff',
        description: 'This component is coming in the next CSS release',
      },
      modified: {
        background: '#1c4f8f',
        color: '#ffffff',
        description: 'This component will be updated in the next CSS release',
      },
    },
    sidebarDots: 'none',
  },
  theme: create({
    base: 'light',
    brandTitle: 'Notre Dame Design System',
    brandUrl: 'https://webtheme.nd.edu/',
    brandImage: '/logo.svg',
    brandTarget: '_self',
  }),
});