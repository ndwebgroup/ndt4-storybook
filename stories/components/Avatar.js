/**
 * Avatar component
 * @param {string} props.modifier - Additional modifier classes
 */

export default function Avatar(args) {
  const {
    size = 'md',
    type = 'image',
    modifier = '',
  } = args;

  const imageSrc = type !== 'image' ? '/images/placeholder-person.svg' : `/images/profile-dowd.jpg`;
  const classes = ['avatar', `avatar--${size}`, `${modifier}`];
  return `<figure class="${classes.join(' ')}"><img alt="" src="${imageSrc}"></figure>`;
}