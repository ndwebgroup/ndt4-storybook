/**
 * Page Title component
 * @param {Object} props - Component properties
 * @param {('xs'|'sm'|'md'|'lg'|'xl')} [props.size='h1'] - The page title size
 * @param {string} props.text - Text content of the heading
 * @returns {string} - The heading HTML
 */
export default function Headings(props) {
  const {
    size = '',
    title = 'Page Title',
    useParagraph = false,
  } = props;

  // If using paragraph approach, use a p with the heading class
  const titleWrapper = useParagraph ? 'p' : 'h1';
  const element = document.createElement(titleWrapper);
  element.textContent = title;
  element.className = `page-title${size ? ` page-title--${size}` : ''}`;
  
  return element.outerHTML;
}