/**
 * Stats component
 */
export default function Stats(args) {

  const { items = [] } = args;

  return `
    <ul class="no-bullets stat-list grid grid-sm-3">
      ${items.map((item) => {
        return `<li class="stat-item"><span class="stat-number">${item.number}</span> ${item.text}</li>`;
      }).join('\n      ')}
    </ul>
  `;
}