/**
 * Tab component
 */
export default function Tab(args) {
  const { items = [], tabVariant } = args;
  const container = document.createElement('div');
  container.className = 'tabs-wrapper';
  container.innerHTML = `
  <nav class="nav-tabs ${tabVariant === 'lg' ? 'nav-tabs--lg' : ''}" aria-label="Tabs Navigation">
    <ul id="nav-tabs" role="tablist" aria-label="Tabs" aria-orientation="horizontal">
      ${items.map((item, index) => {
        if (index === 0) {
          return `<li role="presentation"><a href="#tab-${index}" id="tab-${index}-tab" class="tab active" role="tab" aria-selected="true" aria-controls="tab-${index}">${item.title}</a></li>`
        } else {
          return `<li role="presentation"><a href="#tab-${index}" id="tab-${index}-tab" class="tab" role="tab" aria-selected="false" aria-controls="tab-${index}" tabindex="-1">${item.title}</a></li>`
        }
      }).join('\n      ')}
    </ul>
  </nav>
  <div class="tab-panels">
    ${items.map((item, index) => {
    if (index === 0) {
      return `<div class="tab-panel" id="tab-${index}" role="tabpanel" aria-labelledby="tab-${index}-tab">
      <h2>${item.title}</h2>
      <p>${item.content}</p>
    </div>`
    } else {
      return `<div class="tab-panel" id="tab-${index}" role="tabpanel" aria-labelledby="tab-${index}-tab" hidden>
      <h2>${item.title}</h2>
      <p>${item.content}</p>
    </div>`
    }
    }).join('\n    ')}
  </div>
`;

  return container;
}