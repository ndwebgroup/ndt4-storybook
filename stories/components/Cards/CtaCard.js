/**
 * CtaCard component — text-only call-to-action card. The whole card is a
 * link; a circled arrow fills on hover. Works on dark backgrounds
 * (bg--brand-blue, bg--black) and light ones (bg--warm-white, bg--white),
 * adapting text colors automatically via color-scheme + light-dark().
 * PROTOTYPE: styles live in css/prototypes.css until they ship in ndt.css.
 * @param {Object} props - Component properties
 * @param {string} props.label - Kicker label above the title
 * @param {string} props.title - The title of the card
 * @param {string} [props.summary=''] - Optional supporting text
 * @param {string} [props.link='#'] - Destination of the card link
 * @param {string} [props.backgroundColor='brand-blue'] - Background color (bg-- class)
 * @param {string} [props.headingTag='h2'] - Heading tag for the title
 * @param {string} [props.wrapperTag='div'] - Wrapper element tag
 * @returns {HTMLElement} - The CTA card element
 */

export default function CtaCard(props) {
  const {
    label = '',
    title,
    summary = '',
    link = '#',
    backgroundColor = 'brand-blue',
    headingTag = 'h2',
    wrapperTag = 'div',
  } = props;

  const container = document.createElement(wrapperTag);
  container.className = 'card-container';

  container.innerHTML = `
  <div class="card card--cta bg--${backgroundColor}">
    <div class="card-body">${label ? `\n      <p class="card-label">${label}</p>` : ''}
      <${headingTag} class="card-title"><a class="card-link" href="${link}">${title}</a></${headingTag}>
      ${summary ? `<p class="card-summary">${summary}</p>` : ''}
    </div>
    <span class="card-cta-arrow" aria-hidden="true"><svg class="icon" focusable="false"><use href="#icon-arrow-right"></use></svg></span>
  </div>
`;

  return container;
}
