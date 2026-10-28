/**
 * LineChart component — trend over time (applicants, endowment, enrollment).
 * Built on Chart.js. Charts are an opt-in package, not part of ndt.css —
 * requires the chart.js dependency and css/charts.css. See
 * Components/Charts/Docs for installation.
 * @param {Object} props - Component properties
 * @param {string} props.title - Chart title (used as caption + accessible name)
 * @param {string} [props.description=''] - Optional supporting description
 * @param {string[]} props.labels - Point labels (x-axis, usually a time period)
 * @param {{label: string, values: number[]}[]} props.datasets - One or more series
 * @param {boolean} [props.filled=false] - Fill the area under each line
 * @param {boolean} [props.smooth=true] - Use a slight curve instead of straight segments
 * @param {boolean} [props.showLegend] - Show the legend (defaults to true when >1 dataset)
 * @returns {HTMLElement} - The chart figure element
 */
import { buildChart } from '../../utils/chartBase.js';

export default function LineChart(props) {
  const {
    title = 'Line Chart',
    description = '',
    labels = [],
    datasets = [],
    filled = false,
    smooth = true,
    showLegend,
  } = props;

  const legend = showLegend ?? datasets.length > 1;

  return buildChart({
    title,
    description,
    labels,
    datasets,
    modifier: 'chart--line',
    buildChartConfig: (theme) => ({
      type: 'line',
      data: {
        labels,
        datasets: datasets.map((d, i) => {
          const color = theme.palette[i % theme.palette.length];
          return {
            label: d.label,
            data: d.values,
            borderColor: color,
            backgroundColor: filled ? `${color}26` : color, // ~15% alpha fill
            pointBackgroundColor: color,
            pointBorderColor: theme.tooltipText === '#fff' ? '#fff' : color,
            pointRadius: 3,
            pointHoverRadius: 5,
            borderWidth: 2,
            fill: filled,
            tension: smooth ? 0.3 : 0,
          };
        }),
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        font: { family: theme.fontFamily },
        interaction: { mode: 'index', intersect: false },
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
            ticks: { color: theme.subtext, font: { family: theme.fontFamily } },
            grid: { color: theme.grid },
          },
          y: {
            beginAtZero: true,
            ticks: { color: theme.subtext, font: { family: theme.fontFamily } },
            grid: { color: theme.grid },
          },
        },
      },
    }),
  });
}
