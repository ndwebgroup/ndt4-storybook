/**
 * Dropdown component
 * @param {Object} props - Component properties
 * @param {string} props.note - Whether the field has a note 
 * @param {string} props.label - Label for field
 * @returns {HTMLElement} - The field element
 */
export default function Dropdown(props) {
  const container = document.createElement('div');
  const { note, label, items=[] } = props;
  let fieldHTML = '';

  container.className = 'form-field';
  
  if (label) {
    fieldHTML += `
    <label for="">${label}</label>
  `
  }
  
  fieldHTML += `
    <select name="dropdown" id="dropdown">
    ${items.map((item) => {
      return `<option value="${item.text.toLowerCase().replace(/\s/g, '')}">${item.text}</option>`;
    }).join('\n      ')}
    </select>
  `

  if (note) {
    fieldHTML += `
    <p class="form-field-note">${note}</p>
  `
  }

  container.innerHTML = fieldHTML;

  return container;
}