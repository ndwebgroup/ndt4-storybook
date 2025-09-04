/**
 * List component
 * Supports multiple list types: unordered, ordered, unstyled, stepped, inline, and description lists
 */
export default function List(args) {
  const {
    type = 'unordered',
    items = [],
    descriptions = [],
    className = ''
  } = args;

  let listHtml = '';

  switch(type) {
    case 'unordered':
      listHtml = `
        <ul class="${className}">
          ${items.map(item => `<li>${item}</li>`).join('\n          ')}
        </ul>
      `;
      break;

    case 'ordered':
      listHtml = `
        <ol class="${className}">
          ${items.map(item => `<li>${item}</li>`).join('\n          ')}
        </ol>
      `;
      break;

    case 'unstyled':
      listHtml = `
        <ul class="list--unstyled ${className}">
          ${items.map(item => `<li>${item}</li>`).join('\n          ')}
        </ul>
      `;
      break;

    case 'stepped':
      listHtml = `
        <ol class="ol--stepped ${className}">
          ${items.map(item => `<li>${item}</li>`).join('\n          ')}
        </ol>
      `;
      break;

    case 'inline':
      listHtml = `
        <ul class="list--inline ${className}">
          ${items.map(item => `<li>${item}</li>`).join('\n          ')}
        </ul>
      `;
      break;

    case 'description':
      listHtml = `
        <dl class="${className}">
          ${items.map((item, index) => `
            <dt>${item}</dt>
            <dd>${descriptions[index] || ''}</dd>
          `).join('\n          ')}
        </dl>
      `;
      break;

    default:
      listHtml = `
        <ul class="ndt-list ${className}">
          ${items.map(item => `<li>${item}</li>`).join('\n          ')}
        </ul>
      `;
  }

  return listHtml;
}