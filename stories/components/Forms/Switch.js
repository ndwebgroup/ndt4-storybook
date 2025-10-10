/**
 * Switch component
 * @param {Object} props - Component properties
 * @param {string} props.note - Whether the field has a note
 * @param {string} props.icon - Icon to show over switch
 * @param {string} props.label - Label for field
 * @returns {HTMLElement} - The field element
 */
export default function Switch(props) {
  const container = document.createElement('div');
  const { note, icon, label, modifier } = props;
  // Generate a random ID if one isn't provided
  const id = props.id || `switch-${Math.random().toString(36).substring(2, 10)}`;
  container.className = 'form-field';

  container.innerHTML = `
    ${label ? `<span class="label">${label}</span>` : ''}
    <label class="switch field">
      <input type="checkbox" ${modifier ? modifier : ''}>
      <span class="slider">${icon ? `<span class="icon" data-icon="${icon}"></span>` : ''}</span>
    </label>
    ${note ? `<p class="form-field-note">${note}</p>` : ''}
  `
  
  return container;
}