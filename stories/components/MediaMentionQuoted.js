import Avatar from './Avatar';

/**
 * MediaMentionQuoted component
 * @param {Object} props - Component properties
 * @param {Object} props.item - The media mention item data
 * @param {boolean} [props.showPublication=true] - Whether to show the publication information
 * @param {boolean} [props.showDate=true] - Whether to show the publication date
 * @param {boolean} [props.showPeople=true] - Whether to show the mentioned people
 * @returns {HTMLElement} - The media mention element
 */
export default function MediaMentionQuoted(props) {
  const container = document.createElement('div');
  container.className = 'card-container';
  const {
    item,
    showPublication = true,
    showPeople = true
  } = props;

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

  // People/Directory section
  let peopleHTML = '';
  if (showPeople && item.people && item.people.length > 0) {
    const peopleItemsHTML = item.people.map(person => {
      // Use Avatar component instead of direct image HTML
      const avatarHTML = person.image
        ? Avatar({
            size: 'xs',
            type: 'image',
            helper_class: 'byline-image'
          })
        : '';

      return `
        <div class="byline">
          ${avatarHTML}
          <div class="byline-body">
            <p class="byline-title">
              <a class="byline-link" href="${person.url || '#'}">${person.first_name} ${person.last_name}</a>
            </p>
            ${item.publication ? `<p class="person-title">in ${item.publication.name}</p>` : ''}
          </div>
        </div>
      `;
    }).join('');

    peopleHTML = `
      <div class="byline-group">
        ${peopleItemsHTML}
      </div>
    `;
  }

  // Put it all together
  container.innerHTML = `
    <div class="card card--media-mention-quoted ${item.publication ? item.publication.slug || '' : ''}">
      <div class="card-body">
        ${publicationHTML}
        <div class="card-content">
          <blockquote class="entry-quote">
            <p>${item.quote}</p>
          </blockquote>
          <div class="summary">
            ${item.content || ''}
          </div>
        </div>
        ${peopleHTML}
      </div>
      <div class="card-meta">
      <a class="card-btn" href="${item.public_url || '#'}" target="_blank" id="${item.html_id || ''}" rel="noopener">Read Article</a>
    </div>
  `;

  return container;
}