import remarkGfm from 'remark-gfm';

export default {
  "framework": {
    "name": "@storybook/html-vite",
    "options": {}
  },
  "stories": [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-designs",
    "storybook-dark-mode",
    "@chromatic-com/storybook",
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
  ],
  staticDirs: ['../public'],
  docs: {
    autodocs: true
  }
};
