/**
 * Radio component
 * @param {Object} props - Component properties
 * @param {string} props.note - Whether the field has a note 
 * @param {string} props.label - Label for field
 * @returns {HTMLElement} - The field element
 */
export default function Radio(props) {
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
    <ul class="no-bullets radio-list">
    ${items.map((item) => {
      return `<li><input id="${item.text.toLowerCase().replace(/\s/g, '')}" type="radio" name="radio-group"><label for="${item.text.toLowerCase().replace(/\s/g, '')}">${item.text}</label></li>`;
    }).join('\n      ')}
    </ul>
  `

  if (note) {
    fieldHTML += `
    <p class="form-field-note">${note}</p>
  `
  }

  container.innerHTML = fieldHTML;

  return container;
}