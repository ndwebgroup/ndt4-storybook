/**
 * Breadcrumb component
 */
export default function Breadcrumb(args) {
  const { items = [] } = args;

  return `
    <ol class="breadcrumbs">
      ${items.map((item, index) => {
        const isLast = index === items.length - 1;

        if (isLast) {
          return `<li>${item.text}</li>`;
        } else {
          return `<li><a href="${item.href}">${item.text}</a> › </li>`;
        }
      }).join('\n      ')}
    </ol>
  `;
}