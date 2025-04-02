/**
 * Avatar component
 * @param {string} props.helper_class - The label of the button
 */

export default function Avatar(args) {
  const {
    size = 'md',
    type = 'image',
    helper_class = '',
  } = args;

  const imageSrc = type !== 'image' ? '/images/placeholder-person.svg' : `/images/placeholder-profile-1-500x500.jpg`;
  const classes = ['avatar', `avatar--${size}`, `${helper_class}`];

  return `
    <figure class="${classes.join(' ')}"><img alt="" src="${imageSrc}"></figure>`;
}