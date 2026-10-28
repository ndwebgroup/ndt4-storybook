/**
 * NetworkNotice component — site-wide alert banner fixed to the bottom of
 * the viewport. Uses the #network_notice id required by the CMS injection.
 * PROTOTYPE styles live in css/prototypes.css until they ship in ndt.css.
 * @param {Object} props - Component properties
 * @param {string} [props.message=''] - Notice Message
 * @param {string} [props.noticeLocation] - Notice Location
 * @param {boolean} [props.showMark=true] - Whether to show the ND mark (desktop only)
 * @param {boolean} [props.urgent=false] - Urgent styling + role="alert" for emergencies
 * @param {boolean} [props.dismissible=true] - Whether to show the close button
 * @returns {HTMLElement} - The network notice element
 */

export default function NetworkNotice(props) {
  const {
    message = '',
    showMark = true,
    urgent = false,
    dismissible = true,
    noticeLocation = 'global',
  } = props;

  const container = document.createElement('div');
  container.id = 'network_notice';
  if (urgent) {
    container.className = `network-notice--urgent ${noticeLocation ? `network-notice--${noticeLocation}` : ''}`;
  }
  container.setAttribute('role', urgent ? 'alert' : 'region');
  container.setAttribute('aria-label', 'University notice');

  container.innerHTML = `
    ${showMark & noticeLocation == 'global' ? `<img class="notice-mark" src="https://static.nd.edu/images/marks/gold-white/ndmark.svg" alt="University of Notre Dame mark">` : ''}
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
