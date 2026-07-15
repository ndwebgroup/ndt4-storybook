The Notre Dame Web Theme v4 (NDT4) is the University's official design kit for building Notre Dame websites. Use the provided assets and guidance to keep experiences consistent, performant, and accessible across campus.

[NDT4 Storybook website](https://webtheme.nd.edu/)

## Getting Started

This project requires **Node 24.14.0** (pinned via `.nvmrc` and `package.json` `engines`). Installing with an older Node can silently skip native dependencies and break Storybook.

```
git clone git@github.com:ndwebgroup/ndt4-storybook.git
npm install
npm run storybook
```

## Building

```
npm run build-storybook       # build Storybook to storybook-static
npm run build-static-webapp   # build Storybook to dist
```

## Updating Storybook

`npx storybook@latest upgrade`

## Health check

`npx storybook doctor`