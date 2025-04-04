/**
 * FAQ component
 * @param {Object} props - Component properties
 * @param {string} props.id - ID for the FAQ section
 * @param {boolean} [props.showAnchors=true] - Whether to show the anchor list at the top
 * @param {boolean} [props.showBackToTop=true] - Whether to show "Back to top" links
 * @param {Array} props.faqItems - Array of FAQ items (questions and answers)
 * @returns {HTMLElement} - The FAQ element
 */
export default function FAQ(props) {
  const container = document.createElement('div');
  const {
    id = 'faq-section',
    showAnchors = true,
    showBackToTop = true,
    faqItems = []
  } = props;

  // Create anchor list if enabled
  let anchorList = '';
  if (showAnchors && faqItems.length > 0) {
    const anchors = faqItems.map(item => {
      return `<li><a href="#${item.id}">${item.question}</a></li>`;
    }).join('');

    anchorList = `<ol class="faq-anchors" id="${id}">${anchors}</ol>`;
  }

  // Create FAQ items
  const faqItemsHTML = faqItems.map(item => {
    const backToTopLink = showBackToTop
      ? `<p class="link-top"><a href="#${id}">Back to top</a></p>`
      : '';

    return `<div id="${item.id}" class="faq-item" property="mainEntity" typeof="Question">
        <dt class="faq-q" property="name">${item.question}</dt>
        <dd class="faq-a" property="acceptedAnswer" typeof="Answer">
          <div class="faq-a-text" property="text">${item.answer}</div>
          ${backToTopLink}
        </dd>
      </div>`;
  }).join('');

  container.innerHTML = `
    ${anchorList}
    <dl class="faq">
      ${faqItemsHTML}
    </dl>
  `;

  return container;
}