import BarChart from './BarChart.js';

export default {
  title: 'Components/Charts/Bar Chart',
  tags: ['coming'],
  argTypes: {
    title: { name: 'Title', control: 'text' },
    description: { name: 'Description', control: 'text' },
    labels: { name: 'Labels', control: 'object', description: 'Category labels shared by all datasets' },
    datasets: { name: 'Datasets', control: 'object', description: 'Array of { label, values } series' },
    orientation: { name: 'Orientation', control: 'select', options: ['vertical', 'horizontal'] },
    stacked: { name: 'Stacked', control: 'boolean' },
    showLegend: { name: 'Show Legend', control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component: 'The Bar Chart component compares values across categories — enrollment by year, budget by department. Built on Chart.js and themed automatically from NDT4 brand colors, including dark mode.'
      }
    },
  },
  args: {
    title: 'First-Year Enrollment by College',
    description: 'Fall 2026 incoming class, by college of first enrollment.',
    labels: ['Arts & Letters', 'Science', 'Engineering', 'Business', 'Architecture'],
    datasets: [{ label: 'Students', values: [620, 410, 505, 380, 90] }],
    orientation: 'vertical',
    stacked: false,
    showLegend: undefined,
  }
};

export const Default = (args) => {
  return BarChart(args);
};
Default.args = {
};

export const MultiSeries = (args) => {
  return BarChart(args);
};
MultiSeries.args = {
  title: 'Applications vs. Enrollment by College',
  datasets: [
    { label: 'Applications', values: [3100, 2400, 3600, 2900, 640] },
    { label: 'Enrolled', values: [620, 410, 505, 380, 90] },
  ],
};

export const Horizontal = (args) => {
  return BarChart(args);
};
Horizontal.args = {
  orientation: 'horizontal',
};

export const Stacked = (args) => {
  return BarChart(args);
};
Stacked.args = {
  title: 'Housing Occupancy by Hall',
  labels: ['Alumni', 'Dunne', 'Flaherty', 'Zahm'],
  datasets: [
    { label: 'Freshmen', values: [140, 120, 90, 160] },
    { label: 'Upperclass', values: [60, 40, 70, 30] },
  ],
  stacked: true,
};
