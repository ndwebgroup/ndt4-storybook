/**
 * SocialShare component
 * @param {Object} props - Component properties
 * @param {string} props.url - The URL to share
 * @param {string} props.title - The title to share
 * @param {boolean} [props.showNative=true] - Whether to show the native share button
 * @param {boolean} [props.showFacebook=true] - Whether to show Facebook share
 * @param {boolean} [props.showLinkedin=true] - Whether to show LinkedIn share
 * @param {boolean} [props.showTwitter=true] - Whether to show Twitter/X share
 * @param {boolean} [props.showEmail=true] - Whether to show Email share
 * @param {string} [props.facebookAppId='135465433914446'] - Facebook App ID
 * @returns {HTMLElement} - The social share component
 */

export default function SocialShare(props) {
  const {
    url = window.location.href,
    title = document.title,
    showNative = true,
    showFacebook = true,
    showLinkedin = true,
    showTwitter = true,
    showEmail = true,
    facebookAppId = '135465433914446'
  } = props;

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  // Create the HTML for each share option
  let nativeShareHTML = '';
  if (showNative) {
    nativeShareHTML = `
      <li class="share-native">
        <button class="btn" title="Share this page" aria-label="Share this page">
          <svg class="icon" data-icon="box-arrow-up">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-box-arrow-up"></use>
          </svg>
          <span> Share</span>
        </button>
      </li>
    `;
  }

  let facebookShareHTML = '';
  if (showFacebook) {
    facebookShareHTML = `
      <li class="share-facebook share-custom">
        <a title="Share on Facebook" class="btn" href="https://www.facebook.com/dialog/share?app_id=${facebookAppId}&display=popup&href=${encodedUrl}&title=${encodedTitle}" aria-label="Share on Facebook">
          <svg class="icon" data-icon="facebook">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-facebook"></use>
          </svg>
        </a>
      </li>
    `;
  }

  let linkedinShareHTML = '';
  if (showLinkedin) {
    linkedinShareHTML = `
      <li class="share-linkedin share-custom">
        <a title="Share on LinkedIn" class="btn" href="https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&title=${encodedTitle}" aria-label="Share on LinkedIn">
          <svg class="icon" data-icon="linkedin">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-linkedin"></use>
          </svg>
        </a>
      </li>
    `;
  }

  let twitterShareHTML = '';
  if (showTwitter) {
    twitterShareHTML = `
      <li class="share-x-twitter share-custom">
        <a title="Share on X/Twitter" class="btn" href="https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}" aria-label="Share on X/Twitter">
          <svg class="icon" data-icon="twitter-x">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-twitter-x"></use>
          </svg>
        </a>
      </li>
    `;
  }

  let emailShareHTML = '';
  if (showEmail) {
    emailShareHTML = `
      <li class="share-email share-custom">
        <a title="Share on Email" class="btn" href="mailto:?subject=${encodedTitle}&body=${encodedUrl}" aria-label="Share on Email">
          <svg class="icon" data-icon="envelope-o">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-envelope-o"></use>
          </svg>
        </a>
      </li>
    `;
  }

  const container = document.createElement('div');
  container.className = 'social-share';

  container.innerHTML = `
    <ul class="no-bullets ${showNative ? 'native-true' : ''}">
      ${nativeShareHTML}
      ${facebookShareHTML}
      ${linkedinShareHTML}
      ${twitterShareHTML}
      ${emailShareHTML}
    </ul>
  `;

  // Add event listener for native share button if browser supports it
  if (showNative && typeof navigator.share === 'function') {
    const nativeShareButton = container.querySelector('.share-native button');
    if (nativeShareButton) {
      nativeShareButton.addEventListener('click', async () => {
        try {
          await navigator.share({
            title: title,
            url: url
          });
        } catch (error) {
          console.error('Error sharing:', error);
        }
      });
    }
  }

  return container;
}
