/**
 * Input component
 * @param {Object} props - Component properties
 * @param {boolean} props.disabled - Whether the field is disabled
 * @param {string} props.note - Whether the field has a note 
 * @param {string} props.label - Label for field
 * @param {string} props.placeholder - The placeholder text of the field
 * @returns {HTMLElement} - The field element
 */
export default function Input(props) {
  const container = document.createElement('div');
  const { note, label, disabled=false, placeholder, } = props;
  let fieldHTML = '';

  container.className = 'form-field';
  
  if (label) {
    fieldHTML += `
    <label for="">${label}</label>
  `
  }
  
  fieldHTML += `
  <input placeholder='${placeholder}'
  `
  if (disabled) {
    fieldHTML += `
    disabled
  `
  }

  fieldHTML += `
  >
  `

  if (note) {
    fieldHTML += `
    <p class="field-note">${note}</p>
  `
  }

  container.innerHTML = fieldHTML;

  return container;
}