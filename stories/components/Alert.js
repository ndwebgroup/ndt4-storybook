/**
 * Alert component
 */
export default function Alert(args) {
  const {
    variant = 'default',
    icon = '',
    content = '',
    hasLink = false
  } = args;

  const variantClass = variant !== 'default' ? `alert--${variant}` : '';
  const iconMarkup = icon ? `<span class="icon" data-icon="${icon}"></span>` : '';
  const exampleLink = hasLink ? `<a class="alert-link" href="#">an example link</a>` : '';
  const contentWithLink = hasLink ? content.replace('{link}', exampleLink) : content;

  return `
    <div class="alert ${variantClass}" role="alert">
      ${iconMarkup}
      <div class="alert-content">${contentWithLink}</div>
    </div>
  `;
}