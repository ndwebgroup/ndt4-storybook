/**
 * Select component
 * @param {Object} props - Component properties
 * @param {string} [props.id] - ID for the select field (random ID generated if not provided)
 * @param {string} props.note - Whether the field has a note
 * @param {string} props.label - Label for field
 * @returns {HTMLElement} - The field element
 */
export default function Select(props) {
  const container = document.createElement('div');
  const { note, label, items=[] } = props;
  // Generate a random ID if one isn't provided
  const id = props.id || `select-${Math.random().toString(36).substring(2, 10)}`;
  container.className = 'form-field';

  container.innerHTML = `
    ${label ? `<label for="${id}">${label}</label>` : ''}
    <select class="field" name="${id}" id="${id}">
    ${items.map((item) => {
      return `<option ${item.modifier ? item.modifier : ''} value="${item.text.toLowerCase().replace(/\s/g, '')}">${item.text}</option>`;
    }).join('\n      ')}
    </select>
    ${note ? `<p class="form-field-note">${note}</p>` : ''}
  `

  return container;
}