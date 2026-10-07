// Minimal DOM shim sufficient to execute NDT4's string-templating component
// functions in plain Node (no jsdom available in this sandbox). Components in
// this codebase only ever use a narrow slice of the DOM API: createElement,
// className/classList, id, setAttribute/getAttribute, innerHTML get/set,
// outerHTML get, appendChild/prepend/insertAdjacentHTML, and occasionally
// querySelector/addEventListener inside branches that are unreachable for the
// specific (Default-story) args we're rendering here. Anything not modeled
// concretely resolves to a harmless no-op Proxy rather than throwing, so an
// unanticipated call degrades quietly instead of crashing the render.

const VOID_TAGS = new Set(['img', 'br', 'hr', 'input', 'meta', 'link', 'area', 'base', 'col', 'embed', 'source', 'track', 'wbr']);

function safeNull() {
  const handler = {
    get(_target, prop) {
      if (prop === 'innerHTML' || prop === 'textContent' || prop === 'outerHTML') return '';
      if (['appendChild', 'prepend', 'append', 'insertAdjacentHTML', 'setAttribute', 'addEventListener', 'removeAttribute', 'remove', 'forEach'].includes(prop)) {
        return () => {};
      }
      if (prop === 'querySelector') return () => safeNull();
      if (prop === 'querySelectorAll') return () => [];
      if (prop === 'classList') return { add() {}, remove() {}, contains: () => false, toggle() {} };
      return undefined;
    },
    set() { return true; },
  };
  return new Proxy({}, handler);
}

class FakeElement {
  constructor(tag) {
    this.tagName = String(tag).toUpperCase();
    this._void = VOID_TAGS.has(String(tag).toLowerCase());
    this._classes = new Set();
    this._attrs = {};
    this._id = '';
    this._html = '';
    this._text = '';
  }
  get id() { return this._id; }
  set id(v) { this._id = v; }
  get className() { return Array.from(this._classes).join(' '); }
  set className(v) { this._classes = new Set(String(v).split(/\s+/).filter(Boolean)); }
  get classList() {
    const self = this;
    return {
      add: (...c) => c.forEach((x) => self._classes.add(x)),
      remove: (...c) => c.forEach((x) => self._classes.delete(x)),
      contains: (c) => self._classes.has(c),
      toggle: (c) => { self._classes.has(c) ? self._classes.delete(c) : self._classes.add(c); },
    };
  }
  setAttribute(name, value) {
    if (name === 'class') { this.className = value; return; }
    if (name === 'id') { this._id = value; return; }
    this._attrs[name] = value === true ? '' : String(value);
  }
  getAttribute(name) {
    if (name === 'class') return this.className || null;
    if (name === 'id') return this._id || null;
    return Object.prototype.hasOwnProperty.call(this._attrs, name) ? this._attrs[name] : null;
  }
  removeAttribute(name) { delete this._attrs[name]; }
  appendChild(child) {
    this._html += (child && typeof child === 'object' && 'outerHTML' in child) ? child.outerHTML : String(child);
    return child;
  }
  prepend(child) {
    const html = (child && typeof child === 'object' && 'outerHTML' in child) ? child.outerHTML : String(child);
    this._html = html + this._html;
  }
  insertAdjacentHTML(position, html) {
    if (position === 'afterbegin') this._html = html + this._html;
    else this._html += html;
  }
  set innerHTML(v) { this._html = v; }
  get innerHTML() { return this._html; }
  set textContent(v) { this._text = v; this._html = String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  get textContent() { return this._text; }
  addEventListener() {}
  querySelector() { return safeNull(); }
  querySelectorAll() { return []; }
  get outerHTML() {
    const attrs = [];
    if (this._id) attrs.push(` id="${this._id}"`);
    if (this.className) attrs.push(` class="${this.className}"`);
    for (const [k, v] of Object.entries(this._attrs)) attrs.push(v === '' ? ` ${k}` : ` ${k}="${v}"`);
    const tag = this.tagName.toLowerCase();
    if (this._void) return `<${tag}${attrs.join('')}>`;
    return `<${tag}${attrs.join('')}>${this._html}</${tag}>`;
  }
}

globalThis.document = {
  title: 'NDT4 Template',
  createElement: (tag) => new FakeElement(tag),
  createElementNS: (_ns, tag) => new FakeElement(tag),
  getElementById: () => null,
  querySelector: () => safeNull(),
  querySelectorAll: () => [],
  addEventListener: () => {},
  body: new FakeElement('body'),
};

globalThis.window = globalThis.window || { location: { href: 'https://example.nd.edu/' } };
if (typeof globalThis.navigator === 'undefined') globalThis.navigator = {};

export { FakeElement };
