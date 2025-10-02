export function resolveTokens(obj) {
  // Deep clone
  const json = JSON.parse(JSON.stringify(obj));
  const getByPath = (root, path) =>
    path.split('.').reduce((acc, key) => (acc ? acc[key] : undefined), root);

  const resolveNode = (node, root) => {
    if (node && typeof node === 'object') {
      if ('$value' in node) {
        const v = node['$value'];
        if (typeof v === 'string' && v.startsWith('{') && v.endsWith('}')) {
          const path = v.slice(1, -1);
          const ref = getByPath(root, path);
          return resolveNode(ref, root);
        }
        return v;
      }
      const out = {};
      for (const k of Object.keys(node)) {
        out[k] = resolveNode(node[k], root);
      }
      return out;
    }
    return node;
  };

  return resolveNode(json, json);
}