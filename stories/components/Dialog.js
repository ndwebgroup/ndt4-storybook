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
    closeButtonText = 'Close'
  } = args;

  return `
    <dialog class="dialog">
      <form method="dialog" class="dialog-close">
        <button type="submit" title="${closeButtonText}">×</button>
      </form>
      <div class="dialog-content">
        <div class="dialog-body">
          <p class="dialog-heading h2">${title}</p>
          <div class="dialog-text">${content}</div>
        </div>
      </div>
    </dialog>
  `;
}