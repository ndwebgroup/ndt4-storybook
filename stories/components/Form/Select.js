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
  let fieldHTML = '';

  container.className = 'form-field';

  if (label) {
    fieldHTML += `<label for="${id}">${label}</label>`
  }

  fieldHTML += `
    <select name="${id}" id="${id}">
    ${items.map((item) => {
      return `<option value="${item.text.toLowerCase().replace(/\s/g, '')}">${item.text}</option>`;
    }).join('\n      ')}
    </select>
  `

  if (note) {
    fieldHTML += `<p class="form-field-note">${note}</p>`
  }

  container.innerHTML = fieldHTML;

  return container;
}