/**
 * Avatar component
 */
export default function Avatar(args) {
  const {
    size = 'md',
    type = 'image'
  } = args;

  const imageSrc = type !== 'image' ? '/images/placeholder-person.svg' : `/images/placeholder-profile-1-500x500.jpg`;
  const sizeClass = `avatar--${size}`;

  return `
    <img src="${imageSrc}" class="avatar ${sizeClass}">
  `;
}