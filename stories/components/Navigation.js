/**
 * Creates a navigation component for pagination
 * @param {Object} props - Component properties
 * @param {number} props.currentPage - The current page number
 * @param {number} props.totalPages - The total number of pages
 * @param {string} props.baseUrl - The base URL for pagination links (defaults to "#")
 * @param {boolean} props.showEllipsis - Whether to show ellipsis for large page ranges
 * @param {number} props.displayRange - Number of page links to display around current page
 * @returns {HTMLElement} - The navigation element
 */
export default function Navigation(props) {
  const {
    currentPage = 1,
    totalPages = 10,
    baseUrl = '#',
    showEllipsis = true,
    displayRange = 2
  } = props;

  const container = document.createElement('div');
  container.setAttribute('role', 'navigation');
  container.setAttribute('aria-label', 'Pagination');
  container.className = 'pagination';
  container.setAttribute('separator', ' ');

  // Create pagination content
  let paginationHTML = '';

  // Previous button
  if (currentPage > 1) {
    paginationHTML += `<a class="previous_page" aria-label="Previous page" rel="prev" href="${baseUrl}">Previous</a> `;
  } else {
    paginationHTML += `<span class="previous_page disabled" aria-label="Previous page">Previous</span> `;
  }

  // Calculate range of pages to show
  let startPage = Math.max(1, currentPage - displayRange);
  let endPage = Math.min(totalPages, currentPage + displayRange);

  // Adjust to show more pages when at the ends
  if (startPage <= 3) {
    endPage = Math.min(totalPages, 5);
    startPage = 1;
  }

  if (endPage >= totalPages - 2) {
    startPage = Math.max(1, totalPages - 4);
    endPage = totalPages;
  }

  // First page
  if (startPage > 1) {
    paginationHTML += `<a aria-label="Page 1" href="${baseUrl}">1</a> `;

    // Show ellipsis if needed
    if (showEllipsis && startPage > 2) {
      paginationHTML += `<span class="gap">…</span> `;
    }
  }

  // Page numbers
  for (let i = startPage; i <= endPage; i++) {
    if (i === currentPage) {
      paginationHTML += `<span class="current">${i}</span> `;
    } else {
      paginationHTML += `<a aria-label="Page ${i}" href="${baseUrl}">${i}</a> `;
    }
  }

  // Last page
  if (endPage < totalPages) {
    // Show ellipsis if needed
    if (showEllipsis && endPage < totalPages - 1) {
      paginationHTML += `<span class="gap">…</span> `;
    }

    paginationHTML += `<a aria-label="Page ${totalPages}" href="${baseUrl}">${totalPages}</a> `;
  }

  // Next button
  if (currentPage < totalPages) {
    paginationHTML += `<a class="next_page" aria-label="Next page" rel="next" href="${baseUrl}">Next</a>`;
  } else {
    paginationHTML += `<span class="next_page disabled" aria-label="Next page">Next</span>`;
  }

  container.innerHTML = paginationHTML;
  return container;
}