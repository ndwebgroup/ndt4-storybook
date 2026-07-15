/**
 * Avatar component
 * @param {string} props.modifier - Additional modifier classes
 */

export default function Avatar(args) {
  const {
    size = 'md',
    type = 'image',
    caption = '',
    imgUrl,
    modifier = '',
  } = args;

  const imageSrc = type !== 'image' ? '/images/placeholder-person.svg' : `${imgUrl ? imgUrl : '/images/profile-dowd.jpg'}`;
  const classes = ['avatar', `avatar--${size}`, `${modifier}`];
  return `<figure class="${classes.join(' ')}"><img alt="" src="${imageSrc}" width="600" height="600">${caption ? `<figcaption>${caption}</figcaption>` : ''}</figure>`;
}