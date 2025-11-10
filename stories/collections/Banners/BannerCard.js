/**
 * Banner component
 * @param {Object} props - Component properties
 * @param {('sm'|'md'|'lg'|'xl'|'screen')} props.bannerWidth - The width of the banner
 * @param {string} props.label - The label of the banner
 * @param {string} [props.headingTag='h2'] - The heading tag to use for the title
 * @param {string} props.title - The title of the banner
 * @param {number} props.cardCount - The number of cards to display
 * @param {('default'|'sm'|'md'|'lg'|'xl')} props.titleSize - The title size of the banner
 * @param {string} props.summary - The summary of the banner
 * @param {string} props.backgroundColor - The background color of the banner
 * @returns {HTMLElement} - The banner element
 */

import Card from '/stories/components/Cards/Card.js';

export default function Banner(props) {
  const container = document.createElement('section');
  const { bannerWidth, headingTag, label, title, titleSize, summary, backgroundColor, cardCount } = props;

  container.className = `section${ bannerWidth !== 'default' ? ` col--${bannerWidth}` : '' }${ backgroundColor !== 'none' ? ` bg--${backgroundColor} bg--full-bleed` : '' }`;

  // Create banner secondary
  container.innerHTML = ``;

  if (title || summary) container.innerHTML += `
  <div class="section-intro text-center">
    <${headingTag} class="section-title${titleSize == 'default' ? '' : ` section-title--${titleSize}`}">${title}</${headingTag}>
    ${summary ? `<p>${summary}</p>` : ''}
  </div>
`;

  // Get the banner body element
  const bannerBody = container.querySelector('.section-intro');

  // Handle label
  if (label) {
    const labelElement = document.createElement('p');
    labelElement.className = 'section-label';
    labelElement.textContent = label;
    bannerBody.prepend(labelElement);
  }

  // Handle cards
  if (cardCount && cardCount > 0) {
    const cardsContainer = document.createElement('div');
    cardsContainer.className = `flex-auto${cardCount === 1 ? ' col--sm' : ''}`;
    for (let i = 0; i < cardCount; i++) {
      const card = Card({
        title: `Card Title ${i + 1}`,
        summary: 'This is a summary of the card content. It provides a brief overview of the information contained within the card.',
        imageUrl: '/images/placeholder-campus-1-600x400.jpg',
        imageAlt: `Placeholder Image for Card ${i + 1}`,
        backgroundColor: 'none',
      });
      cardsContainer.appendChild(card);
    }
    container.appendChild(cardsContainer);
  }

  return container.outerHTML;
}