import CardListing from './CardListing.js';

export default {
  title: 'Collections/Card Listing',
  component: CardListing,
  tags: ['!autodocs', 'stable'],
  parameters: {
    docs: {
      description: {
        component: 'The Card Listing collection displays a set of cards as either a responsive grid or a stacked list. Choose how many cards to show, how many columns the grid uses, and whether card images appear.'
      }
    },
  },
  argTypes: {
    cardType: {
      name: 'Card Type',
      description: 'Which card component to list',
      control: { type: 'select', labels: { standard: 'Standard Cards', people: 'People Cards', news: 'News Cards', event: 'Event Cards', featured: 'Featured Cards' } },
      options: ['standard', 'people', 'news', 'event', 'featured'],
    },
    format: {
      name: 'Format',
      description: 'Display the cards as a grid or a stacked list',
      control: { type: 'select', labels: { grid: 'Grid', list: 'List' } },
      options: ['grid', 'list'],
    },
    count: {
      name: 'Number of Cards',
      description: 'How many cards to show',
      control: { type: 'range', min: 1, max: 12, step: 1 },
    },
    columns: {
      name: 'Grid Columns',
      description: 'Number of columns on large screens (grid format only)',
      control: { type: 'range', min: 2, max: 4, step: 1 },
      if: { arg: 'format', eq: 'grid' },
    },
    summary: {
      name: 'Card Summary',
      description: 'Summary text shown on each card. Leave empty to hide it. Not used by Featured cards.',
      control: 'text',
    },
    showImages: {
      name: 'Show Images',
      description: 'Whether each card shows its image (Featured cards always show one)',
      control: 'boolean',
    },
  },
  args: {
    cardType: 'standard',
    format: 'grid',
    count: 6,
    columns: 3,
    showImages: true,
    summary: 'A short summary that gives visitors a little more context before they click.',
  },
};

export const Default = (args) => CardListing(args);

export const List = (args) => CardListing(args);
List.args = {
  format: 'list',
  count: 4,
};

export const TextOnlyGrid = (args) => CardListing(args);
TextOnlyGrid.args = {
  summary: '',
  columns: 4,
  count: 8,
  showImages: false,
};

export const People = (args) => CardListing(args);
People.args = {
  cardType: 'people',
  columns: 4,
};

export const News = (args) => CardListing(args);
News.args = {
  cardType: 'news',
  format: 'list',
};

export const Events = (args) => CardListing(args);
Events.args = {
  cardType: 'event',
  format: 'list',
  count: 5,
  showImages: false,
};

export const Featured = (args) => CardListing(args);
Featured.args = {
  cardType: 'featured',
  columns: 3,
  count: 3,
};
