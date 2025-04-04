/**
 * Timeline component
 * @param {Object} props - Component properties
 * @param {Array} props.items - List of items for the timeline
 * @param {('left'|'right'|'center')} [props.layout='left'] - The layout of the timeline
 * @returns {HTMLElement} - The card element
 */

export default function Timeline(props) {
  const { items=[], layout } = props;

  const container = document.createElement('ul');
  container.className = `timeline timeline--${layout}`;

container.innerHTML = `
${items.map((item) => {
  return `
  <li class="timeline-item">
      <div class="timeline-body">
        <p class="timeline-title">${item.title}</p>
        <p class="timeline-date">${item.date}</p>
        <p>${item.description}</p>
      </div>
  </li>
  `;
}).join('\n      ')}
`;

  return container;
}