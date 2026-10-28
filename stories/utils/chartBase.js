/**
 * Shared scaffolding for NDT4 chart components (Bar, Line, Pie, Stat Ring).
 * Handles the parts that are identical across chart types: the figure
 * wrapper, an accessible data table fallback for screen readers, Chart.js
 * lifecycle (create/destroy), and re-theming when light/dark mode changes.
 *
 * Chart.js canvases are opaque to assistive technology, so every chart
 * ships a real <table> of the same data, visually hidden via the existing
 * .visually-hidden utility class rather than a separate a11y-only pattern.
 */
import { Chart } from 'chart.js/auto';
import { getChartTheme, watchChartTheme } from './chartTheme.js';

/**
 * @param {Object} config
 * @param {string} config.title - Chart title, used as the figcaption and table caption
 * @param {string} [config.description=''] - Optional longer description below the title
 * @param {string[]} config.labels - Category labels shared by all datasets
 * @param {{label: string, values: number[]}[]} config.datasets - One or more data series
 * @param {(theme: ReturnType<typeof getChartTheme>) => Object} config.buildChartConfig -
 *   Returns a Chart.js config object (type, data, options) for the given theme
 * @param {string} [config.modifier=''] - Extra class(es) for the figure wrapper (e.g. 'chart--ring')
 * @param {(canvas: HTMLCanvasElement, chart: Chart) => void} [config.onReady] - Called after each (re)render
 * @returns {HTMLElement} - The chart figure element
 */
export function buildChart(config) {
  const {
    title,
    description = '',
    labels,
    datasets,
    buildChartConfig,
    modifier = '',
    onReady,
  } = config;

  const figure = document.createElement('figure');
  figure.className = `chart${modifier ? ` ${modifier}` : ''}`;

  const canvasWrap = document.createElement('div');
  canvasWrap.className = 'chart-canvas-wrap';
  const canvas = document.createElement('canvas');
  canvas.setAttribute('role', 'img');
  canvas.setAttribute('aria-label', title);
  canvasWrap.appendChild(canvas);
  figure.appendChild(canvasWrap);

  figure.appendChild(buildDataTable(title, labels, datasets));

  if (title || description) {
    const caption = document.createElement('figcaption');
    caption.innerHTML = `${title ? `<span class="chart-title">${title}</span>` : ''}${description ? `<span class="chart-description">${description}</span>` : ''}`;
    figure.appendChild(caption);
  }

  let chart;
  const render = (theme) => {
    if (chart) chart.destroy();
    chart = new Chart(canvas, buildChartConfig(theme));
    if (onReady) onReady(canvas, chart);
  };

  render(getChartTheme());
  const stopWatching = watchChartTheme(render);

  // Clean up if the figure is ever removed from the page (Storybook story
  // switches replace DOM outright, so this is mostly relevant to real use)
  new MutationObserver((mutations, observer) => {
    if (!document.body.contains(figure)) {
      stopWatching();
      if (chart) chart.destroy();
      observer.disconnect();
    }
  }).observe(document.body, { childList: true, subtree: true });

  return figure;
}

function buildDataTable(caption, labels, datasets) {
  const table = document.createElement('table');
  table.className = 'chart-data visually-hidden';

  const captionEl = document.createElement('caption');
  captionEl.textContent = caption;
  table.appendChild(captionEl);

  const thead = document.createElement('thead');
  thead.innerHTML = `<tr><th scope="col"></th>${labels.map((l) => `<th scope="col">${l}</th>`).join('')}</tr>`;
  table.appendChild(thead);

  const tbody = document.createElement('tbody');
  tbody.innerHTML = datasets.map((d) =>
    `<tr><th scope="row">${d.label}</th>${d.values.map((v) => `<td>${v}</td>`).join('')}</tr>`
  ).join('');
  table.appendChild(tbody);

  return table;
}
