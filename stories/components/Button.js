/**
 * Button component
 * @param {Object} props - Component properties
 * @param {string} props.label - The label of the button
 * @param {('primary'|'secondary'|'tertiary'|'neutral')} [props.type='primary'] - Type of button
 * @param {('default'|'cta')} [props.state='default'] - State of the button
 * @param {boolean} [props.moreIcon=false] - Whether to show the more icon
 * @returns {HTMLElement} - The button element
 */
export default function Button(props) {
  const {
    label,
    type = 'primary',
    state = 'default',
    moreIcon = false
  } = props;

  const button = document.createElement('a');
  button.href = '#';
  button.setAttribute('type', 'button');

  const classes = ['btn', `btn--${state}`, `btn--${type}`];
  button.className = classes.join(' ');

  button.textContent = label;

  if (moreIcon) {
    // Add more icon if needed
    button.innerHTML += ' <span class="more-icon">→</span>';
  }

  return button;
}