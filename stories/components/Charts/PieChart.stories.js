import PieChart from './PieChart.js';

export default {
  title: 'Components/Charts/Pie Chart',
  tags: ['coming'],
  argTypes: {
    title: { name: 'Title', control: 'text' },
    description: { name: 'Description', control: 'text' },
    seriesLabel: { name: 'Series Label', control: 'text', description: 'Row label used in the accessible data table' },
    labels: { name: 'Labels', control: 'object', description: 'Slice labels' },
    values: { name: 'Values', control: 'object', description: 'Slice values' },
    donut: { name: 'Donut', control: 'boolean' },
    legendPosition: { name: 'Legend Position', control: 'select', options: ['top', 'bottom', 'left', 'right'] },
  },
  parameters: {
    docs: {
      description: {
        component: 'The Pie Chart component shows a part-to-whole breakdown — budget allocation, demographic makeup. Set Donut for a donut variant. Built on Chart.js and themed automatically from NDT4 brand colors, including dark mode.'
      }
    },
  },
  args: {
    title: 'Academic Interest of Enrolled Class',
    description: 'Distribution of enrolled students across academic disciplines.',
    seriesLabel: 'Student Share',
    labels: ['Architecture', 'Business', 'Arts, Humanities, and Social Studies', 'Engineering', 'Global Affairs', 'Science'],
    values: [24, 3, 25, 21, 3, 24],
    donut: false,
    legendPosition: 'right',
  }
};

export const Default = (args) => {
  return PieChart(args);
};
Default.args = {
};

export const Donut = (args) => {
  return PieChart(args);
};
Donut.args = {
  donut: true,
};

export const LegendBottom = (args) => {
  return PieChart(args);
};
LegendBottom.args = {
  legendPosition: 'bottom',
};
