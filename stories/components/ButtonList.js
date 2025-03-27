/**
 * Button List component
 * @param {('default'|'large')} [props.size='default'] - Size of the button list text
 */
export default function ButtonList(args,props) {

  const { items = [] } = args;
  const listClass = `no-bullets btn--list btn--list`;

  return `
    <ul class="${listClass}">
      ${items.map((item) => {
        return `<li><a class="btn" href="${item.href}">${item.text}</a></li>`;
      }).join('\n      ')}
    </ul>
  `;
}