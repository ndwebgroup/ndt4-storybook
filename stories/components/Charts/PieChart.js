/**
 * PieChart component — part-to-whole breakdown (budget allocation,
 * demographic split). Set `donut` to render as a donut chart. Built on
 * Chart.js. Charts are an opt-in package, not part of ndt.css — requires
 * the chart.js dependency and css/charts.css. See Components/Charts/Docs
 * for installation.
 * @param {Object} props - Component properties
 * @param {string} props.title - Chart title (used as caption + accessible name)
 * @param {string} [props.description=''] - Optional supporting description
 * @param {string} [props.seriesLabel='Share'] - Row label for the accessible data table
 * @param {string[]} props.labels - Slice labels
 * @param {number[]} props.values - Slice values (any unit — percentages, dollars, counts)
 * @param {boolean} [props.donut=false] - Render as a donut instead of a full pie
 * @param {('top'|'bottom'|'left'|'right')} [props.legendPosition='right'] - Legend placement
 * @returns {HTMLElement} - The chart figure element
 */
import { buildChart } from '../../utils/chartBase.js';

export default function PieChart(props) {
  const {
    title = 'Pie Chart',
    description = '',
    seriesLabel = 'Share',
    labels = [],
    values = [],
    donut = false,
    legendPosition = 'right',
  } = props;

  return buildChart({
    title,
    description,
    labels,
    datasets: [{ label: seriesLabel, values }],
    modifier: `chart--pie${donut ? ' chart--donut' : ''}`,
    buildChartConfig: (theme) => ({
      type: 'doughnut',
      data: {
        labels,
        datasets: [{
          data: values,
          backgroundColor: labels.map((_, i) => theme.palette[i % theme.palette.length]),
          borderColor: theme.surfaceBg,
          borderWidth: 2,
          hoverOffset: 6,
        }],
      },
      options: {
        cutout: donut ? '60%' : 0,
        responsive: true,
        maintainAspectRatio: false,
        font: { family: theme.fontFamily },
        plugins: {
          legend: {
            display: true,
            position: legendPosition,
            labels: { color: theme.text, font: { family: theme.fontFamily }, padding: 14 },
          },
          tooltip: {
            backgroundColor: theme.tooltipBg,
            titleColor: theme.tooltipText,
            bodyColor: theme.tooltipText,
            padding: 10,
            cornerRadius: 4,
            callbacks: {
              label: (ctx) => {
                const total = ctx.dataset.data.reduce((sum, v) => sum + v, 0);
                const pct = total ? Math.round((ctx.parsed / total) * 100) : 0;
                return ` ${ctx.label}: ${ctx.parsed.toLocaleString()} (${pct}%)`;
              },
            },
          },
        },
      },
    }),
  });
}
