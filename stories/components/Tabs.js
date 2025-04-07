/**
 * Tabs component
 */   
export default function Tabs(args) {
  const { items = [], tabVariant } = args;
  const container = document.createElement('div');
  container.className = 'tabs-container'
  container.innerHTML = `
  <nav id="nav-tabs" class="nav-tabs nav-tabs--${tabVariant}">
    ${items.map((item, index) => {
      if (index === 0) {
        return `<button class="tab active" data-tab="tab-${index}">${item.title}</button>`
      } else {
        return `<button class="tab" data-tab="tab-${index}">${item.title}</button>`
      }
    }).join('\n      ')}
  </nav>
  <div class="tab-panels">
    ${items.map((item, index) => {  
    if (index === 0) {
      return `<div class="tab-panel active" id="tab-${index}">
      <h2>${item.title}</h2>
      <p>${item.content}</p>
    </div>`
    } else {
      return `<div class="tab-panel" id="tab-${index}">
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