import { create } from '@storybook/theming';

export const lightTheme = create({
  base: 'light',
  brandTitle: 'Notre Dame Design System',
  brandUrl: 'https://webtheme.nd.edu',
  brandImage: '/logo.svg',
  brandTarget: '_self',
});

export const darkTheme = create({
  base: 'dark',
  brandTitle: 'Notre Dame Design System',
  brandUrl: 'https://webtheme.nd.edu',
  brandImage: '/logo-inverted.svg',
  brandTarget: '_self',
});