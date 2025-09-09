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
    media = '',
    dialogModifier = '',
    contentModifier = ''
  } = args;

  return `
    <dialog class="dialog${dialogModifier ? ` ${dialogModifier}` : ''}">
      <div class="dialog-header">
        <form method="dialog" class="dialog-close">
          <button type="submit" title="${closeButtonText}">×</button>
        </form>
        ${title ? `<p class="dialog-heading h4">${title}</p>` : ''}
      </div>
      <div class="dialog-content ${contentModifier}">
        ${media}
        ${content ? `<div class="dialog-body">${content}</div>` : ''}
      </div>
      <div class="dialog-footer">${footer}</div>
    </dialog>
  `;
}