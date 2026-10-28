import LineChart from './LineChart.js';

export default {
  title: 'Components/Charts/Line Chart',
  tags: ['coming'],
  argTypes: {
    title: { name: 'Title', control: 'text' },
    description: { name: 'Description', control: 'text' },
    labels: { name: 'Labels', control: 'object', description: 'Point labels shared by all datasets (usually a time period)' },
    datasets: { name: 'Datasets', control: 'object', description: 'Array of { label, values } series' },
    filled: { name: 'Filled', control: 'boolean' },
    smooth: { name: 'Smooth', control: 'boolean' },
    showLegend: { name: 'Show Legend', control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component: 'The Line Chart component shows trends over time — applicant volume, endowment growth. Built on Chart.js and themed automatically from NDT4 brand colors, including dark mode.'
      }
    },
  },
  args: {
    title: 'Undergraduate Applications, 2021–2026',
    description: 'Total applications received per admission cycle.',
    labels: ['2021', '2022', '2023', '2024', '2025', '2026'],
    datasets: [{ label: 'Applications', values: [23800, 25300, 27100, 28900, 30200, 31500] }],
    filled: false,
    smooth: true,
    showLegend: undefined,
  }
};

export const Default = (args) => {
  return LineChart(args);
};
Default.args = {
};

export const Filled = (args) => {
  return LineChart(args);
};
Filled.args = {
  filled: true,
};

export const MultiSeries = (args) => {
  return LineChart(args);
};
MultiSeries.args = {
  title: 'Applications by Residency, 2021–2026',
  datasets: [
    { label: 'Domestic', values: [19200, 20100, 21400, 22600, 23500, 24300] },
    { label: 'International', values: [4600, 5200, 5700, 6300, 6700, 7200] },
  ],
};

export const Straight = (args) => {
  return LineChart(args);
};
Straight.args = {
  smooth: false,
};
