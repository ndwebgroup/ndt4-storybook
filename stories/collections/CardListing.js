/**
 * Card Listing collection
 * @param {Object} props - Component properties
 * @param {('standard'|'people'|'news'|'event'|'featured')} [props.cardType='standard'] - Which card component to list
 * @param {('grid'|'list')} [props.format='grid'] - Display the cards as a grid or a stacked list
 * @param {number} [props.count=6] - Number of cards to show
 * @param {number} [props.columns=3] - Number of grid columns (grid format only)
 * @param {string} [props.summary=''] - Summary text shown on every card; omitted entirely when empty
 * (Featured cards have no summary area, so it is not applied to them)
 * @param {boolean} [props.showImages=true] - Whether each card shows its image
 * @returns {HTMLElement} - The card listing element
 */
import Card from '../components/Cards/Card.js';
import PeopleCard from '../components/Cards/PeopleCard.js';
import NewsCard from '../components/Cards/NewsCard.js';
import EventCard from '../components/Cards/EventCard.js';
import FeaturedCard from '../components/Cards/FeaturedCard.js';

const sampleCards = [
  { title: 'Academic Excellence' },
  { title: 'Research Opportunities' },
  { title: 'Student Success' },
  { title: 'Living on Campus' },
  { title: 'Arts and Culture' },
  { title: 'Global Engagement' },
  { title: 'Faith and Service' },
  { title: 'Fighting Irish Athletics' },
  { title: 'Alumni Network' },
  { title: 'Supporting the Mission' },
  { title: 'Innovation and Entrepreneurship' },
  { title: 'Plan Your Visit' },
];

const eventLocations = ['Raclin Murphy Art Museum', 'Bond Hall', 'Joyce Center', 'Stepan Center', 'God Quad', 'Hesburgh Library'];

const peopleSamples = [
  { name: 'Alice Johnson', title: 'Assistant Professor of Physics' },
  { name: 'Bob Brown', title: 'Lecturer in Mathematics' },
  { name: 'Carol White', title: 'Senior Researcher in Computer Science' },
  { name: 'David Green', title: 'Professor of History' },
  { name: 'Eva Blue', title: 'Assistant Professor of English' },
  { name: 'Frank Black', title: 'Associate Professor of Economics' },
];

const newsDates = ['September 9, 2026', 'August 22, 2026', 'August 15, 2026', 'August 1, 2026', 'July 18, 2026', 'July 5, 2026'];

const eventDates = [
  ['2026-10-22T10:00', '2026-10-22T12:00'],
  ['2026-11-05T18:00', '2026-11-05T20:00'],
  ['2026-11-14T08:00', '2026-11-14T11:00'],
  ['2026-12-01T09:00', '2026-12-01T17:00'],
  ['2026-12-10T10:00', '2026-12-10T18:00'],
  ['2027-01-20T19:00', '2027-01-20T21:00'],
];

export default function CardListing(props) {
  const {
    cardType = 'standard',
    format = 'grid',
    count = 6,
    columns = 3,
    showImages = true,
    summary = '',
  } = props;

  const summaryText = String(summary || '').trim();

  const total = Math.max(0, Math.min(Number(count) || 0, sampleCards.length));
  const cols = Math.max(2, Math.min(Number(columns) || 3, 6));
  const isGrid = format === 'grid';

  const list = document.createElement('ul');
  list.className = isGrid
    ? `grid grid-md-2 grid-ml-${cols}`
    : 'card-listing no-bullets';

  // Featured cards always have an image; the others honor the toggle.
  const layout = isGrid ? 'default' : '';
  const base = { link: '#', headingTag: 'h3' };

  // Cards that can't render as an <li> themselves get wrapped in one.
  const wrap = (el) => {
    const li = document.createElement('li');
    li.appendChild(el);
    return li;
  };

  const builders = {
    standard: (c) => Card({ ...c, ...base, label: '', summary: summaryText, showImage: showImages, layout, wrapperTag: 'li' }),
    people: (c, i) => PeopleCard({
      ...base,
      name: peopleSamples[i % peopleSamples.length].name,
      title: peopleSamples[i % peopleSamples.length].title,
      summary: summaryText,
      placeholder: showImages,
      layout,
      wrapperTag: 'li',
    }),
    news: (c, i) => wrap(NewsCard({
      ...base,
      title: c.title,
      label: '',
      excerpt: summaryText,
      showImage: showImages,
      layout,
      publishDate: newsDates[i % newsDates.length],
    })),
    event: (c, i) => wrap(EventCard({
      ...base,
      title: c.title,
      featuredImage: showImages,
      showExcerpt: Boolean(summaryText),
      excerpt: summaryText,
      startDate: eventDates[i % eventDates.length][0],
      endDate: eventDates[i % eventDates.length][1],
      location: eventLocations[i % eventLocations.length],
    })),
    featured: (c) => FeaturedCard({ ...base, title: c.title, label: '', wrapperTag: 'li' }),
  };

  const build = builders[cardType] || builders.standard;
  sampleCards.slice(0, total).forEach((card, i) => {
    list.appendChild(build(card, i));
  });

  return list;
}
