import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';


// Vite/Storybook resolves root-relative specifiers like '/stories/components/X'
// against the project root. Plain Node ESM has no such concept, so this loader
// rewrites them to absolute file URLs under the repo before resolution.
const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');

export async function resolve(specifier, context, nextResolve) {
  if (specifier.startsWith('/stories/') || specifier.startsWith('/css/') || specifier.startsWith('/tokens/')) {
    const filePath = REPO + specifier + (specifier.endsWith('.js') ? '' : '.js');
    return nextResolve(pathToFileURL(filePath).href, context);
  }
  return nextResolve(specifier, context);
}
