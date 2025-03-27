/** @type { import('@storybook/html-webpack5').StorybookConfig } */
const config = {
  "stories": [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-webpack5-compiler-swc",
    {
      "name": "@storybook/addon-essentials",
      "options": {
        "docs": false
      }
    },
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-docs" // Add this line
  ],
  "framework": {
    "name": "@storybook/html-webpack5",
    "options": {}
  },
  staticDirs: ['../public']
};
export default config;