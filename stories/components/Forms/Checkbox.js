/**
 * Checkbox component
 * @param {Object} props - Component properties
 * @param {string} [props.id] - ID for the checkbox field (random ID generated if not provided)
 * @param {string} props.note - Whether the field has a note
 * @param {string} props.label - Label for field
 * @param {Array} props.items - List of items for the checkbox group
 * @returns {HTMLElement} - The field element
 */
export default function Checkbox(props) {
  const container = document.createElement('div');
  const { note, label, items=[], id } = props;
  // Generate a random ID if one isn't provided
  const fieldId = id || `checkbox-${Math.random().toString(36).substring(2, 10)}`;
  container.className = 'form-field';
  if (label) {
    container.setAttribute('role', 'group');
    container.setAttribute('aria-labelledby', `${fieldId}-label`);
  }

  container.innerHTML = `
    ${label ? `<span class="label" id="${fieldId}-label">${label}</span>` : ''}
    <ul class="no-bullets field checkbox-list" id="${fieldId}">
    ${items.map((item, index) => {
      const itemId = `${fieldId}-${index}`;
      return `<li><input id="${itemId}" type="checkbox" ${item.modifier ? item.modifier : ''} name="${fieldId}"><label for="${itemId}">${item.text}</label></li>`;
    }).join('\n      ')}
    </ul>
    ${note ? `<p class="form-field-note">${note}</p>` : ''}
  `;

  return container;
}