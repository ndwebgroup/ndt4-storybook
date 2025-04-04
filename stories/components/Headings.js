/**
 * Headings component
 * @param {Object} props - Component properties
 * @param {string} props.level - Heading level (h1-h6)
 * @param {string} props.text - Text content of the heading
 * @param {string} props.className - Optional additional classes
 * @param {boolean} props.useClass - Whether to use the h-class instead of the actual heading tag
 * @returns {string} - The heading HTML
 */
export default function Headings(props) {
  const {
    level = 'h1',
    text = 'Heading',
    className = '',
    useClass = false
  } = props;

  // Validate level
  const validLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
  const headingLevel = validLevels.includes(level) ? level : 'h1';

  // If using class approach, use a div or p with the heading class
  if (useClass) {
    const combinedClass = `${headingLevel} ${className}`.trim();
    return `<p class="${combinedClass}">${text}</p>`;
  }

  // Otherwise, use the actual heading element
  const element = document.createElement(headingLevel);
  if (className) {
    element.className = className;
  }
  element.textContent = text;

  return element.outerHTML;
}