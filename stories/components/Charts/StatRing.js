/**
 * StatRing component — single-value radial progress ring, for pairing
 * with the Stat component (e.g. "72% of goal reached", "3 of 4 credits
 * complete"). Built on Chart.js. Charts are an opt-in package, not part
 * of ndt.css — requires the chart.js dependency and css/charts.css. See
 * Components/Charts/Docs for installation.
 *
 * Unlike the other charts, a single value/max pair doesn't need the
 * shared bar/line/pie table-and-legend scaffolding — a native
 * role="meter" is the correct accessible pattern for one number, so this
 * component is built directly rather than through utils/chartBase.js.
 *
 * @param {Object} props - Component properties
 * @param {string} props.label - What the ring measures (e.g. "Fundraising Goal")
 * @param {number} props.value - Current value
 * @param {number} [props.max=100] - Value representing a full ring
 * @param {string} [props.displayValue] - Text shown in the center (defaults to "value%" when max is 100, else "value/max")
 * @param {number} [props.colorIndex=0] - Palette index for the ring color
 * @returns {HTMLElement} - The stat ring figure element
 */
import { Chart } from 'chart.js/auto';
import { getChartTheme, watchChartTheme, getChartPalette } from '../../utils/chartTheme.js';

export default function StatRing(props) {
  const {
    label = 'Progress',
    value = 0,
    max = 100,
    displayValue,
    colorIndex = 0,
  } = props;

  const clamped = Math.max(0, Math.min(value, max));
  const centerText = displayValue ?? (max === 100 ? `${Math.round(clamped)}%` : `${clamped}/${max}`);

  const figure = document.createElement('figure');
  figure.className = 'chart chart--ring';

  const canvasWrap = document.createElement('div');
  canvasWrap.className = 'chart-canvas-wrap chart-ring-wrap';
  canvasWrap.setAttribute('role', 'meter');
  canvasWrap.setAttribute('aria-label', label);
  canvasWrap.setAttribute('aria-valuenow', String(clamped));
  canvasWrap.setAttribute('aria-valuemin', '0');
  canvasWrap.setAttribute('aria-valuemax', String(max));
  canvasWrap.setAttribute('aria-valuetext', centerText);

  const canvas = document.createElement('canvas');
  const center = document.createElement('span');
  center.className = 'chart-ring-value';
  center.setAttribute('aria-hidden', 'true');
  center.textContent = centerText;

  canvasWrap.appendChild(canvas);
  canvasWrap.appendChild(center);
  figure.appendChild(canvasWrap);

  const caption = document.createElement('figcaption');
  caption.innerHTML = `<span class="chart-title">${label}</span>`;
  figure.appendChild(caption);

  let chart;
  const render = (theme) => {
    if (chart) chart.destroy();
    const palette = getChartPalette();
    const color = palette[colorIndex % palette.length];
    chart = new Chart(canvas, {
      type: 'doughnut',
      data: {
        labels: [label, 'Remaining'],
        datasets: [{
          data: [clamped, Math.max(max - clamped, 0)],
          backgroundColor: [color, theme.grid],
          borderWidth: 0,
        }],
      },
      options: {
        cutout: '78%',
        rotation: -90,
        circumference: 360,
        responsive: true,
        maintainAspectRatio: false,
        animation: { animateRotate: true },
        plugins: { legend: { display: false }, tooltip: { enabled: false } },
      },
    });
  };

  render(getChartTheme());
  watchChartTheme(render);

  return figure;
}
