/**
 * Button List component
 */

export default function ButtonList(args) {

  const { items = [], className = '' } = args;

  return `
    <ul class="no-bullets btn--list ${className}">
      ${items.map((item) => {
        return `<li><a class="btn" href="${item.href}">${item.text}</a></li>`;
      }).join('\n      ')}
    </ul>
  `;
}