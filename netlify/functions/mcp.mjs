/**
 * Netlify Function serving the Storybook MCP "docs" toolset at /mcp.
 *
 * It reads the manifests that `storybook build` writes to
 * `manifests/components.json` and `manifests/docs.json` on the deployed
 * site (same origin as the request), so no bundling of Storybook content
 * is needed here.
 *
 * Connect an agent with: { "url": "https://webtheme.nd.edu/mcp" }
 */
import { createStorybookMcpHandler } from '@storybook/mcp';

let handlerPromise;

export default async function (request) {
  handlerPromise ??= createStorybookMcpHandler();
  const handler = await handlerPromise;
  return handler(request);
}

export const config = { path: '/mcp' };
