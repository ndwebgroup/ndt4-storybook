/**
 * Input component
 * @param {Object} props - Component properties
 * @param {string} [props.id] - ID for the input field (random ID generated if not provided)
 * @param {boolean} props.disabled - Whether the field is disabled
 * @param {string} props.note - Whether the field has a note
 * @param {string} props.label - Label for field
 * @param {string} props.placeholder - The placeholder text of the field
 * @param {('date'|'email'|'number'|'password'|'text')} [props.type='text'] - Variant of the accordion
 * @returns {HTMLElement} - The field element
 */
export default function Input(props) {
  const container = document.createElement('div');
  const { note, label, disabled=false, placeholder="", type="text" } = props;
  // Generate a random ID if one isn't provided
  const id = props.id || `input-${Math.random().toString(36).substring(2, 10)}`;
  let fieldHTML = '';

  container.className = 'form-field';

  if (label) {
    fieldHTML += `
      <label for="${id}">${label}</label>
    `
  }

  fieldHTML += `
    <input id="${id}" type="${type}" placeholder='${placeholder}'
  `

  if (disabled) {
    fieldHTML += `disabled`
  }

  fieldHTML += `>`

  if (note) {
    fieldHTML += `<p class="form-field-note">${note}</p>`
  }

  container.innerHTML = fieldHTML;

  return container;
}