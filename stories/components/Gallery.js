/**
 * Gallery component
 * @param {Object} props - Component properties
 * @param {string} props.id - The ID for the gallery
 * @param {Array} props.images - Array of image objects
 * @returns {string} - The gallery HTML
 */
export default function Gallery(props) {
  const { id, images } = props;
  const count = images.length;

  return `
    <ul id="gallery-${id}" class="gallery-lb gallery-${id}" data-count="${count}">
      ${images.map((image, index) => `
        <li>
          <a href="${image.fullsize}" title="${image.caption || ''}" data-title="${image.caption || ''}">
            <img
              src="${image.thumbnail}"
              alt="${image.alt || `Gallery image ${index + 1}`}"
              width="400"
              height="400"
              loading="lazy"
            />
          </a>
        </li>
      `).join('')}
    </ul>
    <script>
    document.addEventListener("DOMContentLoaded", function(){var lightbox = new Lightbox({showCaptions: true,elements: document.querySelector(".gallery-${id}").querySelectorAll("a")});});
    </script>
  `;
}
