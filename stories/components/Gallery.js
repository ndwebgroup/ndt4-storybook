/**
 * Gallery component
 * @param {Object} props - Component properties
 * @param {string} props.id - The ID for the gallery
 * @param {string} [props.classes] - Additional CSS classes to apply to the gallery container
 * @param {number} props.images - Number of images in the gallery
 * @param {boolean} [props.showNumber] - Whether to show the image number as overlay on the images
 * @returns {string} - The gallery HTML
 */
export default function Gallery(props) {
  const { id, classes, images, showNumber } = props;

  return `
    <div class="gallery-wrapper${classes ? ' ' + classes : ''}">
      <ul id="gallery-${id}" class="gallery-lb gallery-${id}" data-count="${images}">
        ${Array.from({ length: images }, (_, i) => `
          <li ${showNumber ? ' class="show-number"' : ''}">
            <a href="#" title="" data-title="Image ${i + 1}">
              <img
                src="/images/placeholder-campus-1-600x600.jpg"
                alt="Gallery image ${i + 1}"
                width="400"
                height="400"
                loading="lazy"
              />
            </a>
          </li>
        `).join('')}
      </ul>
    </div>
    <script>
    document.addEventListener("DOMContentLoaded", function(){var lightbox = new Lightbox({showCaptions: true,elements: document.querySelector(".gallery-${id}").querySelectorAll("a")});});
    </script>
  `;
}
