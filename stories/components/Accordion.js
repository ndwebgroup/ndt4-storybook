/**
 * Creates an accordion component
 * @param {Object} props - Component properties
 * @param {boolean} props.transparent - Whether to show the accordion background
 * @param {('default'|'large')} [props.size='default'] - Size of the accordion text
 * @param {string} props.summaryOne - The summary of the accordion 1
 * @param {string} props.detailOne - The details of the accordion 1
 * @param {string} props.summaryTwo - The summary of the accordion 2
 * @param {string} props.detailTwo - The details of the accordion 2
 * @param {string} props.summaryThree - The summary of the accordion 3
 * @param {string} props.detailThree - The details of the accordion 3
 * @returns {HTMLElement} - The accordion element
 */
export default function Accordion(props) {
  const container = document.createElement('div');
  const { size = 'default', transparent, summaryOne, detailOne, summaryTwo, detailTwo, summaryThree, detailThree } = props;

  const accordionClass = `accordion accordion--${size} accordion--${transparent}`;

  container.innerHTML = `
    <details class="${accordionClass}">
      <summary>${summaryOne}</summary>
      ${detailOne}
    </details>
    <details class="${accordionClass}">
      <summary>${summaryTwo}</summary>
      ${detailTwo}
    </details>
    <details class="${accordionClass}">
      <summary>${summaryThree}</summary>
      ${detailThree}
    </details>
  `;

  return container;
}