/**
 * ImageCompare component — draggable before/after image slider.
 * Charts are an opt-in package, not part of ndt.css — requires
 * css/image-compare.css and public/js/image-compare.js. See
 * Components/Image Compare/Docs for installation.
 *
 * This function is a Storybook/authoring convenience for generating the
 * markup below; it does not attach its own event listener. On a real
 * site, public/js/image-compare.js drives every .image-compare via a
 * single delegated listener, so drag, tap, touch, and keyboard (arrow
 * keys) all work with no extra JS libraries and no per-component setup.
 * @param {Object} props - Component properties
 * @param {string} props.beforeImage - URL of the "before" image
 * @param {string} props.afterImage - URL of the "after" image
 * @param {string} [props.beforeAlt=''] - Alt text for the before image
 * @param {string} [props.afterAlt=''] - Alt text for the after image
 * @param {string} [props.caption=''] - Optional figcaption below the slider
 * @returns {HTMLElement} - The image compare figure element
 */

export default function ImageCompare(props) {
  const {
    beforeImage = '/images/placeholder-campus-number-1-1200x675.jpg',
    afterImage = '/images/placeholder-campus-number-2-1200x675.jpg',
    beforeAlt = '',
    afterAlt = '',
    caption = '',
  } = props;

  const container = document.createElement('figure');
  container.classList.add('image-compare');

  container.innerHTML = `
    <img class="image-compare-after" src="${afterImage}" width="1200" height="675" alt="${afterAlt}">
    <img class="image-compare-before" src="${beforeImage}" width="1200" height="675" alt="${beforeAlt}">
    <input type="range" class="image-compare-input" min="0" max="100" step="0.1" value="50"
      aria-label="Image comparison slider" aria-valuetext="50% of the before image shown">
    <span class="image-compare-divider" aria-hidden="true">
      <span class="image-compare-handle">
        <svg class="icon" aria-hidden="true" focusable="false"><use href="#icon-angle-left"></use></svg>
        <svg class="icon" aria-hidden="true" focusable="false"><use href="#icon-angle-right"></use></svg>
      </span>
    </span>
  `;

  if (caption) {
    const captionElement = document.createElement('figcaption');
    captionElement.textContent = caption;
    container.appendChild(captionElement);
  }

  return container;
}
