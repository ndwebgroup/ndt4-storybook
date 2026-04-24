/**
 * Quote component
 * @param {Object} props - Component properties
 * @param {string} props.text - The text of the blockquote
 * @param {string} props.cite - The citation text to display below the quote 
 * @param {('sm'|'md'|'lg')} [props.size='default'] - The layout of the blockquote
 * @returns {HTMLElement} - The blockquote element
 */

export default function Quote(props) {
  const {
    text,
    cite,
    size = 'md'
  } = props;

  const container = document.createElement('blockquote');
  container.classList.add('blockquote', `${size ? `blockquote--${size}` : ''}`);

  container.innerHTML = `
    <p>${text}</p>
  `;

  if (cite) {
    const citeElement = document.createElement('cite');
    citeElement.classList.add('cite');
    citeElement.textContent = cite;
    container.appendChild(citeElement);
  }

  return container;
}