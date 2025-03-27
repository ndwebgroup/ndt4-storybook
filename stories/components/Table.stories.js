import Table from './Table.js';

export default {
  title: 'Components/Table',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'This is a standard table. Tables are intended to be used with tabular data. Tables can be difficult to read on narrow screens (mobile devices), and we encourage users to avoid them when other formatting options are a possibility.'
      }
    }
  },
  argTypes: {
    headers: {
      description: 'Array of header cell contents',
      control: 'object'
    },
    rows: {
      description: 'Array of row data, where each row is an array of cell contents',
      control: 'object'
    }
  }
};

// Example data for all stories
const exampleHeaders = ['Header 1', 'Header 2', 'Header 3', 'Header 4'];
const exampleRows = [
  ['Row 1 column 1', 'Row 1 column 2', 'Row 1 column 3', 'Row 1 column 4'],
  ['Alpha', 'Beta', 'Gamma', 'Delta'],
  ['$19.95', '<strong>A bolded item</strong>', 'Example table', '<em>An ITALIC item</em>']
];

export const Default = (args) => {
  return Table(args);
};

Default.args = {
  headers: exampleHeaders,
  rows: exampleRows
};

export const Minimal = (args) => {
  return Table(args);
};

Minimal.storyName = 'Minimal Table';
Minimal.args = {
  headers: exampleHeaders,
  rows: exampleRows,
  className: 'table--minimal'
};

Minimal.parameters = {
  docs: {
    description: {
      story: 'A minimal table with reduced styling. The `table--minimal` class removes most borders and background colors for a cleaner, more streamlined appearance.'
    }
  }
};