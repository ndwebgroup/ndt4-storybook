import Avatar from './Avatar';

/**
 * MediaMention component
 * @param {Object} props - Component properties
 * @param {Object} props.item - The media mention item data
 * @param {string} [props.headingTag='h2'] - The heading tag to use for the title
 * @param {boolean} [props.showPublication=true] - Whether to show the publication information
 * @param {boolean} [props.showDate=true] - Whether to show the publication date
 * @param {boolean} [props.showPeople=true] - Whether to show the mentioned people
 * @returns {HTMLElement} - The media mention element
 */
export default function MediaMention(props) {
  const container = document.createElement('div');
  container.className = 'card-container';
  const {
    item,
    headingTag = 'h2',
    showPublication = true,
    showDate = true,
    showPeople = true
  } = props;

  // Determine subheading tag based on heading tag
  const subheadingTag = headingTag === 'h2' ? 'h3' : 'h4';

  // Publication logo/name section
  let publicationHTML = '';
  if (showPublication && item.publication && item.publication.name) {
    if (item.publication.logo_url) {
      publicationHTML = `
        <div class="publication-logo">
          <img class="publication-logo-img" alt="${item.publication.name}"
               src="${item.publication.logo_url}"
               width="${item.publication.logo_width || ''}"
               height="${item.publication.logo_height || ''}"
               loading="lazy">
          <p>${item.publication.name}</p>
        </div>`;
    }
  }

  // Date formatting - simple implementation
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Date section
  const dateHTML = showDate && item.publication_date
    ? `<p class="entry-date">${formatDate(item.publication_date)}</p>`
    : '';

  // People/Directory section
  let peopleHTML = '';
  if (showPeople && item.people && item.people.length > 0) {
    const peopleItemsHTML = item.people.map(person => {
      // Use Avatar component instead of direct image HTML
      const avatarHTML = person.image
        ? Avatar({
            size: 'xs',
            type: 'image',
            helper_class: 'person-avatar'
          })
        : '';

      return `
        <div class="person mm-directory__item horizontal-sm align-center">
          ${avatarHTML}
          <div class="person-body">
            <p class="mm-directory__title">
              <a class="person-link" href="${person.url || '#'}">${person.first_name} ${person.last_name}</a>
            </p>
            ${person.department ? `<p>${person.department}</p>` : ''}
          </div>
        </div>
      `;
    }).join('');

    peopleHTML = `
      <div class="card-meta mm-directory span-md-2 span-lg-1">
        <${subheadingTag} class="h5 mm-directory__list-title">Mentions</${subheadingTag}>
        <div class="mm-directory_people">
          ${peopleItemsHTML}
        </div>
      </div>
    `;
  }

  // Put it all together
  container.innerHTML = `
    <div class="card card--media-mention ${item.publication ? item.publication.slug || '' : ''}">
      <div class="card-body">
        ${publicationHTML}
        <div class="card-content">
          <${headingTag} class="card-title entry-title">
            <a class="card-link" href="${item.public_url || '#'}" target="_blank"
               id="${item.html_id || ''}" rel="noopener">${item.title}</a>
          </${headingTag}>
          <div class="summary">
            ${dateHTML}
            ${item.content || ''}
          </div>
        </div>
      </div>
      ${peopleHTML}
    </div>
  `;

  return container;
}