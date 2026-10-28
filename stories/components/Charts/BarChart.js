/**
 * BarChart component — categorical comparison chart (enrollment by year,
 * budget by department, etc.). Built on Chart.js. Charts are an opt-in
 * package, not part of ndt.css — requires the chart.js dependency and
 * css/charts.css. See Components/Charts/Docs for installation.
 * @param {Object} props - Component properties
 * @param {string} props.title - Chart title (used as caption + accessible name)
 * @param {string} [props.description=''] - Optional supporting description
 * @param {string[]} props.labels - Category labels (x-axis)
 * @param {{label: string, values: number[]}[]} props.datasets - One or more series
 * @param {('vertical'|'horizontal')} [props.orientation='vertical'] - Bar direction
 * @param {boolean} [props.stacked=false] - Stack multiple series instead of grouping
 * @param {boolean} [props.showLegend] - Show the legend (defaults to true when >1 dataset)
 * @returns {HTMLElement} - The chart figure element
 */
import { buildChart } from '../../utils/chartBase.js';

export default function BarChart(props) {
  const {
    title = 'Bar Chart',
    description = '',
    labels = [],
    datasets = [],
    orientation = 'vertical',
    stacked = false,
    showLegend,
  } = props;

  const legend = showLegend ?? datasets.length > 1;

  return buildChart({
    title,
    description,
    labels,
    datasets,
    modifier: 'chart--bar',
    buildChartConfig: (theme) => ({
      type: 'bar',
      data: {
        labels,
        datasets: datasets.map((d, i) => ({
          label: d.label,
          data: d.values,
          backgroundColor: theme.palette[i % theme.palette.length],
          borderRadius: 4,
          borderSkipped: false,
          maxBarThickness: 56,
        })),
      },
      options: {
        indexAxis: orientation === 'horizontal' ? 'y' : 'x',
        responsive: true,
        maintainAspectRatio: false,
        font: { family: theme.fontFamily },
        plugins: {
          legend: {
            display: legend,
            labels: { color: theme.text, font: { family: theme.fontFamily } },
          },
          tooltip: {
            backgroundColor: theme.tooltipBg,
            titleColor: theme.tooltipText,
            bodyColor: theme.tooltipText,
            padding: 10,
            cornerRadius: 4,
          },
        },
        scales: {
          x: {
            stacked,
            ticks: { color: theme.subtext, font: { family: theme.fontFamily } },
            grid: { color: theme.grid, display: orientation === 'horizontal' },
          },
          y: {
            stacked,
            beginAtZero: true,
            ticks: { color: theme.subtext, font: { family: theme.fontFamily } },
            grid: { color: theme.grid, display: orientation === 'vertical' },
          },
        },
      },
    }),
  });
}
