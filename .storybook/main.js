/** @type { import('@storybook/html-webpack5').StorybookConfig } */
const config = {
  "stories": [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],

  "addons": [
    "@storybook/addon-webpack5-compiler-swc",
    "@chromatic-com/storybook",
    "@storybook/addon-essentials",
    'storybook-dark-mode',
    "@storybook/addon-interactions",
  ],

  "framework": {
    "name": "@storybook/html-webpack5",
    "options": {}
  },
  staticDirs: ['../public'],
  docs: {
    autodocs: true
  }
};
export default config;