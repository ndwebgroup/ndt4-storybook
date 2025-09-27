/**
 * Notice component
 */
export default function Notice(args) {
  const {
    variant = 'default',
    icon = '',
    content = '',
    hasLink = false
  } = args;

  const variantClass = variant !== 'default' ? `notice--${variant}` : '';
  const iconMarkup = icon ? `<span class="icon" data-icon="${icon}"></span>` : '';
  const exampleLink = hasLink ? `<a href="#"><strong>an example link</strong></a>` : '';
  const contentWithLink = hasLink ? content.replace('{link}', exampleLink) : content;

  return `
    <div class="notice ${variantClass}" role="alert">
      ${iconMarkup}
      <div class="notice-content">${contentWithLink}</div>
    </div>
  `;
}