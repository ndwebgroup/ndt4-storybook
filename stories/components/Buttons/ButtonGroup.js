/**
 * Button Group component
 * @param {boolean} [props.divided=false] - Divider variant of the button group
 */
export default function ButtonGroup(args) {

  const { items = [], divided = false } = args;

  return `
    <ul class="no-bullets btn-group${divided ? ' btn-group--border' : ''}">
      ${items.map((item) => {
        return `<li><a class="btn" href="${item.href}">${item.text}</a></li>`;
      }).join('\n      ')}
    </ul>
  `;
}