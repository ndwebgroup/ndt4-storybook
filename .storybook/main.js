/** @type { import('@storybook/html-webpack5').StorybookConfig } */
export default {
  "framework": {
    "name": "@storybook/html-webpack5",
    "options": {}
  },
  "stories": [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-designs",
    "storybook-dark-mode",
    "@chromatic-com/storybook",
  ],
  staticDirs: ['../public'],
  docs: {
    autodocs: true
  }
};
