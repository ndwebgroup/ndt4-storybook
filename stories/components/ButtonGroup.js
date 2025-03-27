/**
 * Button Group component
 */
export default function ButtonGroup(args) {

  const { items = [] } = args;

  return `
    <ul class="no-bullets btn--group">
      ${items.map((item) => {
        return `<a class="btn" href="${item.href}">${item.text}</a>`;
      }).join('\n      ')}
    </ul>
  `;
}