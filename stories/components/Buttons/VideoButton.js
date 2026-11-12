/**
 * Video Button component
 * @param {Object} props - Component properties
 * @param {string} props.label - The label of the button
 * @param {('default'|'outline'|'minimal'|'ornamental')} [props.type='default'] - Type of button
 */
export default function Button(props) {
  const {
    label,
    type = 'default',
  } = props;

  const button = document.createElement('a');
  button.href = '#';

  const classes = ['btn', ' btn--video', `${type == 'default' ? '' : ` video--${type}`}`];
  button.className = classes.join('');

  button.innerHTML = `${label}`

  return button;
}