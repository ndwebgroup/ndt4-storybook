/**
 * Banner (Sticky Header) component
 * @param {Object} props - Component properties
 * @param {string} props.label - The label of the banner
 * @param {string} [props.headingTag='h2'] - The heading tag to use for the title
 * @param {string} props.title - The title of the banner
 * @param {('default'|'sm'|'md'|'lg'|'xl')} props.titleSize - The title size of the banner
 * @param {string} props.summary - The summary of the banner
 * @param {('cards'|'gallery'|'quotes'|'accordions')} [props.contentType='cards'] - The component shown in the content column
 * @param {string} props.backgroundColor - The background color of the banner
 * @param {('default'|'full-width')} [props.backgroundWidth='default'] - The background width of the banner
 * @returns {HTMLElement} - The banner element
 */

import Card from '/stories/components/Cards/Card.js';
import Gallery from '/stories/components/Gallery';
import QuoteStacked from '/stories/components/QuoteStacked';
import Accordion from '/stories/components/Accordion.js';
import SectionTitle from '../../components/SectionTitle.js';

// Fixed number of cards; this banner does not expose a card count control.
const CARD_COUNT = 5;

const sampleAccordions = [
  { summary: 'Accordion Item One', detail: 'Risus parturient ullamcorper luctus tempor nisl lacus nec sociis cras a vestibulum cras parturient sociosqu augue senectus.' },
  { summary: 'Accordion Item Two', detail: 'Risus parturient ullamcorper luctus tempor nisl lacus nec sociis cras a vestibulum cras parturient sociosqu augue senectus.' },
  { summary: 'Accordion Item Three', detail: 'Risus parturient ullamcorper luctus tempor nisl lacus nec sociis cras a vestibulum cras parturient sociosqu augue senectus.' },
  { summary: 'Accordion Item Four', detail: 'Risus parturient ullamcorper luctus tempor nisl lacus nec sociis cras a vestibulum cras parturient sociosqu augue senectus.' },
  { summary: 'Accordion Item Five', detail: 'Risus parturient ullamcorper luctus tempor nisl lacus nec sociis cras a vestibulum cras parturient sociosqu augue senectus.' },
];

// Renders the content column for the selected content type
const renderContent = (contentType) => {
  switch (contentType) {
    case 'gallery':
      return Gallery({ id: 'sticky-header', classes: '', images: 20 });
    case 'quotes': {
      const quote = () => QuoteStacked({
        text: '"As a premier Catholic research university, our research and learning drive insights, innovation, and impact for good around the world."',
        modifier: 'mbe-4',
        layout: 'left',
        cite: true,
        image: true,
      }).outerHTML;
      return `<div class="grid gap-lg">${quote()}${quote()}${quote()}</div>`;
    }
    case 'accordions':
      return Accordion({ items: sampleAccordions }).outerHTML;
    case 'cards':
    default: {
      let cards = '';
      for (let i = 0; i < CARD_COUNT; i++) {
        cards += Card({
          title: `Card Title ${i + 1}`,
          summary: 'This is a summary of the card content. It provides a brief overview of the information contained within the card.',
          imageUrl: '/images/placeholder-campus-1-600x400.jpg',
          imageAlt: `Placeholder Image for Card ${i + 1}`,
          backgroundColor: 'none',
        }).outerHTML;
      }
      return `<div class="grid gap-md">${cards}</div>`;
    }
  }
};

export default function BannerStickyHeader(props) {
  const container = document.createElement('section');
  const { headingTag, label, title, titleSize, summary, backgroundColor, backgroundWidth, contentType = 'cards' } = props;

  container.className = `section col--xl${ backgroundColor !== 'none' ? ` bg--${backgroundColor}` : '' }${ backgroundWidth == 'full-width' ? ' bg--full-bleed' : '' }`;

  // Header column (sticky): label, title, and summary
  const header = `${label ? `<p class="section-label">${label}</p>` : ''}${title ? SectionTitle({ title, size: titleSize, headingTag }) : ''}${summary ? `<p>${summary}</p>` : ''}`;

  container.innerHTML = `
  <div class="grid grid-ml-3 grid-gap-lg align-start">
    <div class="position-sticky">
      ${header}
    </div>
    <div class="section-content span-ml-2">
      ${renderContent(contentType)}
    </div>
  </div>
`;

  return container.outerHTML;
}