class SbComponentsList extends HTMLElement {
  async connectedCallback() {
    if (this.__ready) return;
    this.__ready = true;
    try {
      const url = new URL('index.json', location.href).toString();
      const res = await fetch(url);
      const data = await res.json();
      const entries = Object.values(data.entries);
      const skip = new Set(['Components/About Components']);
      const map = new Map();

      for (const e of entries) {
        if (!e.title || !e.title.startsWith('Components/')) continue;
        if (skip.has(e.title)) continue;

        // For folders with multiple components, only include canonical examples
        if (e.title.startsWith('Components/Buttons/') && e.title !== 'Components/Buttons/Button') continue;
        if (e.title.startsWith('Components/Cards/') && e.title !== 'Components/Cards/Card (Default)') continue;
        if (e.title.startsWith('Components/Forms/') && e.title !== 'Components/Forms/Form') continue;
        if (e.title.startsWith('Components/Media Mentions/') && e.title !== 'Components/Media Mentions/Media Mention') continue;

        if (e.type === 'docs' && !map.has(e.title)) {
          map.set(e.title, { link: `/?path=/docs/${e.id}`, title: e.title, tags: Array.isArray(e.tags) ? e.tags : [] });
        }
        else if (e.type === 'story' && !map.has(e.title)) {
          map.set(e.title, { link: `/?path=/story/${e.id}`, title: e.title, tags: Array.isArray(e.tags) ? e.tags : [] });
        }
      }

      const items = Array.from(map.values()).sort((a, b) =>
        a.title.localeCompare(b.title, undefined, { numeric: true })
      );

      // Allowlist: only render these tags
      const ALLOWED = new Set(['modified', 'coming']);
      const tagLine = (tags) => {
        const visible = (tags || []).filter(t => ALLOWED.has(t));
        if (!visible.length) return '';
        return `<div class="c-tags"><span class="c-tag c-tag--${visible}">${visible.join(', ')}</span></div>`;
      };

      this.innerHTML = `
        <nav aria-label="Components">
          <ul class="thumb-list grid grid-gap-sm grid-sm-2 grid-md-3">
            ${items.map(({ link, title, tags }) => {
              const label = title.replace(/^Components\//, '');
              return `<li class="card-container">
                        <div class="card">
                          <figure class="card-image thumb"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 384"><use href="#thumb-${label.replace(/[^a-zA-Z ]/g, "").replace(/\s+/g, '-').toLowerCase()}"></use></svg>${tagLine(tags)}</figure>
                            <div class="card-body"><h3 class="card-title"><a class="card-link" href="${link}">${label}</a></h3></div>
                        </div>
                      </li>`;
            }).join('')}
          </ul>
        </nav>
      `;
    } catch (err) {
      this.innerHTML = '<p>Failed to build components list.</p>';
      console.error(err);
    }
  }
}
customElements.define('sb-components-list', SbComponentsList);