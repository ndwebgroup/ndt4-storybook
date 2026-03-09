/**
 * Lede Button component
 * @param {Object} props - Component properties
 * @param {string} props.label - The label of the button
 * @returns {HTMLElement} - The button element
 */
export default function Button(props) {
  const {
    label,
    type = 'primary',
    cta = false,
  } = props;

  const button = document.createElement('a');
  button.href = '#';
  button.setAttribute('type', 'button');

  const classes = ['btn', ' btn--lede'];
  button.className = classes.join('');

  button.innerHTML = `${label}`

  return button;
}