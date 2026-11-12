/**
 * Icon Button component
 * @param {Object} props - Component properties
 * @param {string} props.label - The label of the button
 * @param {('primary'|'secondary'|'tertiary'|'neutral')} [props.type='primary'] - Type of button
 * @param {boolean} [props.cta=false] - State of the button
 * @param {('left'|'right')} [props.align='left'] - Alignment of the button
 * @param {string} props.icon - The icon of the button
 * @param {string} [props.ariaLabel] - Accessible name for an icon-only button (not used when there is reveal text)
 * @returns {HTMLElement} - The button icon element
 */
export default function Button(props) {
  const {
    label,
    type = 'primary',
    cta = false,
    icon = 'icon-arrow-up',
    align,
    ariaLabel
  } = props;

  const button = document.createElement('a');
  button.href = '#';

  const classes = ['btn', ' btn--icon', ` btn--${align}`, `${cta ? ' btn--cta' : ''}`, `${type == 'primary' ? '' : ` btn--${type}`}`];
  button.className = classes.join('');

  button.innerHTML = `<span class="icon" data-icon="${icon}"></span>`
  if (label) {
    button.innerHTML += `<span class="btn-reveal">${label}</span>`
  } else if (ariaLabel) {
    button.setAttribute('aria-label', ariaLabel);
  }

  return button;
}