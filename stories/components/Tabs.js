/**
 * Tabs component
 */
export default function Tabs(args) {
  const { items = [], tabVariant } = args;
  const container = document.createElement('div');
  container.className = 'tabs-container'
  container.innerHTML = `
  <nav class="nav-tabs nav-tabs--${tabVariant}">
    <ul id="nav-tabs" class="tab-list" role="tablist" aria-label="Tabs" aria-orientation="horizontal">
      ${items.map((item, index) => {
        if (index === 0) {
          return `<li role="presentation"><a href="#tab-${index}" class="tab active" aria-selected="true">${item.title}</a></li>`
        } else {
          return `<li role="presentation"><a href="#tab-${index}" class="tab" aria-selected="false">${item.title}</a></li>`
        }
      }).join('\n      ')}
    </ul>
  </nav>
  <div class="tab-panels" aria-labelledby="nav-tabs">
    ${items.map((item, index) => {
    if (index === 0) {
      return `<div class="tab-panel" id="tab-${index}" role="tabpanel" aria-labelledby="tab-${index}">
      <h2>${item.title}</h2>
      <p>${item.content}</p>
    </div>`
    } else {
      return `<div class="tab-panel" id="tab-${index}" role="tabpanel" aria-labelledby="tab-${index}" hidden>
      <h2>${item.title}</h2>
      <p>${item.content}</p>
    </div>`
    }
    }).join('\n    ')}
  </div>
`;

  // NEED TO ADD JS FOR TABS TO WORK

  return container;
}