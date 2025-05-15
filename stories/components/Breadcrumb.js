/**
 * Breadcrumb component
 */
export default function Breadcrumb(args) {
  const { items = [] } = args;

  return `<nav aria-label="Breadcrumbs" class="breadcrumbs"><ol>${items.map((item, index) => {
    const isLast = index === items.length - 1;

    if (isLast) {
      return `<li>${item.text}</li>`;
    } else {
      return `<li><a href="${item.href}">${item.text}</a></li>`;
    }
  }).join('')}</ol></nav>`;
}