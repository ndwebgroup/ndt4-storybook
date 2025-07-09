/**
 * Accordion component
 * @param {Object} props - Component properties
 * @param {('default'|'lg'|'highlight')} [props.variant='default'] - Variant of the accordion
 * @returns {HTMLElement} - The accordion element
 */
export default function Accordion(props) {
  const container = document.createElement('div');
  container.className = 'accordion-list'
  const { variant = 'default', items  } = props;

  const accordionClass = `accordion${variant == `default` ? `` : ` accordion--${variant}`}`;

  container.innerHTML = `
  ${items.map((item) => {
    return `<details class="${accordionClass}">
    <summary>${item.summary}</summary>
    <p>${item.detail}</p>
  </details>`;
  }).join('\n  ')}
`;

  return container;
}