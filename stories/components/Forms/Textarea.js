/**
 * Textarea component
 * @param {Object} props - Component properties
 * @param {boolean} props.disabled - Whether the field is disabled
 * @param {string} props.note - Whether the field has a note 
 * @param {string} props.label - Label for field
 * @param {string} props.placeholder - The placeholder text of the field
 * @param {('3'|'4'|'5'|'6')} [props.rows='3'] - Variant of the accordion
 * @returns {HTMLElement} - The field element
 */
export default function Input(props) {
  const container = document.createElement('div');
  const { note, label, disabled=false, placeholder, rows, } = props;
  let fieldHTML = '';

  container.className = 'form-field';
  
  if (label) {
    fieldHTML += `
    <label for="">${label}</label>
  `
  }
  
  fieldHTML += `
  <textarea rows="${rows}" placeholder='${placeholder}'
  `
  if (disabled) {
    fieldHTML += `
    disabled
  `
  }

  fieldHTML += `
  ></textarea>
  `

  if (note) {
    fieldHTML += `
    <p class="form-field-note">${note}</p>
  `
  }

  container.innerHTML = fieldHTML;

  return container;
}