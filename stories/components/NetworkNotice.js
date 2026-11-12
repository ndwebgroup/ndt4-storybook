/**
 * NetworkNotice component — site-wide alert banner fixed to the bottom of
 * the viewport. Uses the #network_notice id required by the CMS injection.
 * PROTOTYPE styles live in css/prototypes.css until they ship in ndt.css.
 * @param {Object} props - Component properties
 * @param {string} [props.message=''] - Notice Message
 * @param {string} [props.noticeLocation='global'] - 'global' shows the academic mark (desktop only); 'local' hides it and allows an icon
 * @param {boolean} [props.urgent=false] - Urgent styling + role="alert" for emergencies
 * @param {boolean} [props.dismissible=true] - Whether to show the close button
 * @param {string} [props.icon=''] - Optional icon name (local notices only), e.g. 'info'
 * @returns {HTMLElement} - The network notice element
 */

export default function NetworkNotice(props) {
  const {
    message = '',
    urgent = false,
    dismissible = true,
    noticeLocation = 'global',
    icon = '',
  } = props;

  const isLocal = noticeLocation === 'local';

  const container = document.createElement('div');
  container.id = 'network_notice';
  container.className = [
    urgent ? 'network-notice--urgent' : '',
    noticeLocation ? `network-notice--${noticeLocation}` : '',
  ].filter(Boolean).join(' ');
  container.setAttribute('role', urgent ? 'alert' : 'region');
  container.setAttribute('aria-label', 'University notice');

  container.innerHTML = `
    ${!isLocal ? `<svg class="icon notice-mark" aria-hidden="true" focusable="false"><use href="#academic-mark"></use></svg>` : ''}
    ${icon && isLocal ? `<svg class="icon notice-icon" data-icon="${icon}" aria-hidden="true" focusable="false"><use href="#icon-${icon}"></use></svg>` : ''}
    <div class="notice-text">
      <div class="notice-site"><p>${message}</p></div>
    </div>
    ${dismissible ? `<div class="notice-close">
      <button class="notice-close-button" id="notice-close-button" aria-label="Close notice">
        <svg id="notice-close-icon" class="notice-close-icon" viewBox="0 0 384 512"><path d="M231.6 256l130.1-130.1c4.7-4.7 4.7-12.3 0-17l-22.6-22.6c-4.7-4.7-12.3-4.7-17 0L192 216.4 61.9 86.3c-4.7-4.7-12.3-4.7-17 0l-22.6 22.6c-4.7 4.7-4.7 12.3 0 17L152.4 256 22.3 386.1c-4.7 4.7-4.7 12.3 0 17l22.6 22.6c4.7 4.7 12.3 4.7 17 0L192 295.6l130.1 130.1c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17L231.6 256z"></path></svg>
      </button>
    </div>` : ''}
`;

  const closeButton = container.querySelector('.notice-close-button');
  if (closeButton) {
    closeButton.addEventListener('click', () => container.classList.add('hidden'));
  }

  return container;
}
