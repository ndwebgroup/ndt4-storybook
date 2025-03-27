/**
 * Table component
 */
export default function Table(args) {
  const { headers = [], rows = [], className = '' } = args;

  return `
    <table class="${className}">
      <thead>
        <tr>
          ${headers.map(header => `<th>${header}</th>`).join('\n          ')}
        </tr>
      </thead>
      <tbody>
        ${rows.map(row => `
          <tr>
            ${row.map(cell => `<td>${cell}</td>`).join('\n            ')}
          </tr>
        `).join('\n        ')}
      </tbody>
    </table>
  `;
}