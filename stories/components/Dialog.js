/**
 * Dialog component
 * @param {Object} args - Component properties
 * @param {string} args.title - The title of the dialog
 * @param {string} args.content - The content of the dialog
 * @param {string} args.closeButtonText - Text for the close button title attribute
 * @returns {string} - HTML markup for the dialog
 */
export default function Dialog(args) {
  const {
    title = 'Dialog Title',
    content = 'Dialog content goes here.',
    closeButtonText = 'Close',
    footer = '',
    image = '',
    dialogSize = '',
    imageSize = ''
  } = args;

  return `
    <dialog class="dialog ${dialogSize}">
      <div class="dialog-header">
        <form method="dialog" class="dialog-close">
          <button type="submit" title="${closeButtonText}">×</button>
        </form>
        <p class="dialog-heading h4">${title}</p>
      </div>
      <div class="dialog-content ${imageSize}">
        ${image}
        <div class="dialog-body">
          <div class="dialog-text">${content}</div>
        </div>
      </div>
      <div class="dialog-footer">${footer}</div>
    </dialog>
  `;
}