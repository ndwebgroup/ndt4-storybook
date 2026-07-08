/**
 * Button Group component
 * @param {boolean} [props.divided=false] - Divider variant of the button group
 * @param {boolean} [props.active=false] - Whether group has active class
 */
export default function ButtonGroup(args) {

  const { items = [], divided = false, active = false } = args;

  return `
    <ul class="no-bullets btn-group${divided ? ' btn-group--border' : ''}">
      ${items.map((i, index) => {
        return `<li><a class="btn${index === 0 && active ? ' active' : ''}" href="${i.href}">${i.text}</a></li>`;
      }).join('\n      ')}
    </ul>
  `;
}