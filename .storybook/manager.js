import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming/create';
import '../css/global.css';

addons.setConfig({
  status: {
    statuses: {
      coming: {
        background: '#ae9142',
        color: '#ffffff',
        description: 'This component is coming in the next release',
      },
      modified: {
        background: '#1c4f8f',
        color: '#ffffff',
        description: 'This component has been modified and will be updated in the next release',
      },
    },
    sidebarDots: 'none',
  },
  theme: create({
    base: 'light',
    brandTitle: 'Notre Dame Design System',
    brandUrl: 'https://ndt4-storybook.netlify.app/',
    brandImage: '/logo.svg',
    brandTarget: '_self',
  }),
});