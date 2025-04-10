/**
 * Icon Button component
 * @param {Object} props - Component properties
 * @param {string} props.label - The label of the button
 * @param {('primary'|'secondary'|'tertiary'|'neutral')} [props.type='primary'] - Type of button
 * @param {boolean} [props.cta=false] - State of the button
 * @param {('left'|'right')} [props.align='left'] - Alignment of the button
 * @param {string} props.icon - The icon of the button
 * @returns {HTMLElement} - The button icon element
 */
export default function Button(props) {
  const {
    label,
    type = 'primary',
    cta = false,
    icon = 'icon-arrow-up',
    align
  } = props;

  const button = document.createElement('a');
  button.href = '#';
  button.setAttribute('type', 'button');

  const classes = ['btn', 'btn--icon', `${cta ? 'btn--cta' : ''}`, `btn--${type}`, `btn--${align}`];
  button.className = classes.join(' ');

  button.innerHTML = `
    <span class="icon" data-icon="${icon}"></span>
  `
  if (label) {
    button.innerHTML += `
      <span class="btn-reveal">${label}</span>
    `
  }

  return button;
}