import remarkGfm from 'remark-gfm';

export default {
  "framework": {
    "name": "@storybook/html-vite",
    "options": {}
  },
  "stories": [
    "../stories/**/index.mdx",
    "../stories/**/!(*.include).mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-designs",
    "@vueless/storybook-dark-mode",
    "@etchteam/storybook-addon-status",
    // Local preset: generates manifests/components.json for the MCP docs tools.
    // Must come before addon-docs so MDX docs get attached to these components.
    new URL('./manifest-preset.js', import.meta.url).pathname,
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
    "@storybook/addon-mcp"
  ],

  staticDirs: ['../public'],

  features: {
    // Emit manifests/{components,docs}.json in builds for the hosted MCP endpoint
    componentsManifest: true,
  },
};
