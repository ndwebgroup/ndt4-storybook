/**
 * Radio component
 * @param {Object} props - Component properties
 * @param {string} [props.id] - ID for the radio field group (random ID generated if not provided)
 * @param {string} props.note - Whether the field has a note
 * @param {string} props.label - Label for field
 * @param {Array} props.items - List of items for the radio group
 * @returns {HTMLElement} - The field element
 */
export default function Radio(props) {
  const container = document.createElement('div');
  const { note, label, items=[], id } = props;
  // Generate a random ID if one isn't provided
  const fieldId = id || `radio-${Math.random().toString(36).substring(2, 10)}`;
  let fieldHTML = '';

  container.className = 'form-field';

  if (label) {
    fieldHTML += `<label for="${fieldId}">${label}</label>`;
  }

  fieldHTML += `
    <ul class="no-bullets radio-list" id="${fieldId}">
    ${items.map((item, index) => {
      const itemId = `radio-${index}`;
      return `  <li><input id="${itemId}" type="radio" ${item.modifier} name="radio-group"><label for="${itemId}">${item.text}</label></li>`;
    }).join('\n      ')}
    </ul>
  `;

  if (note) {
    fieldHTML += `<p class="form-field-note">${note}</p>`;
  }

  container.innerHTML = fieldHTML;

  return container;
}