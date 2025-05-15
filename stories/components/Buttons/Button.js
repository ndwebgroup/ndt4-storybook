/**
 * Button component
 * @param {Object} props - Component properties
 * @param {string} props.label - The label of the button
 * @param {string} props.href - The url of the button
 * @param {('primary'|'secondary'|'tertiary'|'neutral')} [props.type='primary'] - Type of button
 * @param {boolean} [props.cta=false] - State of the button
 * @param {boolean} [props.more=false] - Whether to show the more icon
 * @returns {HTMLElement} - The button element
 */
export default function Button(props) {
  const {
    label,
    href,
    type = 'primary',
    cta = false,
    more = false
  } = props;

  const button = document.createElement('a');
  button.href = `${href ? href : '#' }`;
  button.setAttribute('type', 'button');
  
  const classes = ['btn', `${cta ? 'btn--cta' : ''}`, `btn--${type}`];
  if (more) {
    // Add more icon if needed
    classes.push('btn--more');
  }
  button.className = classes.join(' ');

  button.textContent = label;



  return button;
}