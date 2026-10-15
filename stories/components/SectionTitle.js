/**
 * Section Title component
 * @param {Object} props - Component properties
 * @param {('default'|'xs'|'sm'|'md'|'lg'|'xl')} [props.size=''] - The section title size (default is the base size)
 * @param {string} [props.title='Section Title'] - Text content of the heading
 * @param {('h2'|'h3'|'h4'|'p')} [props.headingTag='h2'] - The element used for the title
 * @param {string} [props.modifier] - Additional modifier for the title
 * @returns {string} - The heading HTML
 */
export default function SectionTitle(props) {
  const {
    size = '',
    title = 'Section Title',
    headingTag = 'h2',
    modifier = '',
  } = props;

  const element = document.createElement(headingTag);
  element.textContent = title;
  element.className = `section-title${size && size !== 'default' ? ` section-title--${size}` : ''}${modifier ? ` ${modifier}` : ''}`;

  return element.outerHTML;
}
