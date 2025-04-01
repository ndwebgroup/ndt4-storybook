// filepath: /Users/erunyon/Sites/ndt4-storybook/stories/components/Event.js
/**
 * Creates an event component
 * @param {Object} props - Component properties
 * @param {string} props.title - The title of the event
 * @param {string} props.startDate - The start date/time of the event (ISO string)
 * @param {string} props.endDate - The end date/time of the event (ISO string)
 * @param {boolean} props.allDay - Whether the event is all day
 * @param {string} props.location - The location of the event
 * @param {boolean} props.showExcerpt - Whether to show the event excerpt
 * @param {string} props.excerpt - The excerpt of the event
 * @param {boolean} props.showReadMore - Whether to show the "Read More" button
 * @param {boolean} props.showCalendars - Whether to show the event calendars
 * @param {Array} props.calendars - The calendars the event belongs to
 * @param {string} props.link - The link to the event
 * @param {string} props.headingTag - The heading tag to use (h1, h2, h3, etc.)
 * @param {boolean} props.repeatDate - Whether the date is repeated (for grouping events by date)
 * @returns {HTMLElement} - The event element
 */
export default function Event(props) {
  const {
    title,
    startDate = new Date().toISOString(),
    endDate = new Date(new Date().getTime() + 60 * 60 * 1000).toISOString(),
    allDay = false,
    location = 'Main Building',
    showExcerpt = false,
    excerpt = 'This is a sample event description that provides details about what attendees can expect.',
    showReadMore = false,
    showCalendars = false,
    calendars = ['Academic Calendar', 'Campus Events'],
    link = '#',
    headingTag = 'h2',
    repeatDate = false
  } = props;

  const container = document.createElement('article');
  container.className = 'article snippet event';
  container.setAttribute('typeof', 'Event');

  const startDateObj = new Date(startDate);
  const endDateObj = new Date(endDate);

  const month = startDateObj.toLocaleString('en-US', { month: 'short' });
  const day = startDateObj.getDate();

  const startDateFormatted = startDateObj.toLocaleString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });

  const startTimeFormatted = startDateObj.toLocaleString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });

  const endTimeFormatted = endDateObj.toLocaleString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });

  const startDateISO = startDateObj.toISOString().split('T')[0] + 'T' +
                      startDateObj.toTimeString().substring(0, 5) + '-05:00';
  const endDateISO = endDateObj.toISOString().split('T')[0] + 'T' +
                    endDateObj.toTimeString().substring(0, 5) + '-05:00';

  let eventHTML = `
    <div aria-hidden="true" class="meta-item event-date${repeatDate ? ' event-date-repeat' : ''}">
      <span class="event-month">${month}</span>
      <span class="event-day">${day}</span>
    </div>
    <div class="card">
      <div class="card-body">
        <${headingTag} class="article-title card-title" property="name"><a href="${link}" class="card-link">${title}</a></${headingTag}>
        <div class="article-meta">
          <p class="meta-item event-time" title="${startDateFormatted}, ${startTimeFormatted} - ${endTimeFormatted}">
            <time property="startDate" datetime="${startDateISO}"><span class="icon" data-icon="clock-o">Time:</span>
            <span class="date-string">${startDateFormatted}</span>${allDay ? ', All Day' : ` at ${startTimeFormatted}`}</time> ${!allDay ? ' - ' : ''}
            <time property="endDate" datetime="${endDateISO}">${!allDay ? endTimeFormatted : ''}</time>
          </p>
          ${location ? `<p class="meta-item event-location" property="location" typeof="Place"><span class="icon" data-icon="map-pin">Location:</span> <span property="name address">${location}</span></p>` : ''}
          <link property="image" href="/images/placeholder-campus-1-600x400.jpg">
          <link property="organizer" resource="#siteorg">
        </div>
  `;

  if (showExcerpt) {
    eventHTML += `
        <div class="article-excerpt event-excerpt" property="description">
          ${excerpt}
          ${showReadMore ? `<p class="article-more"><a href="${link}" class="btn btn-inline" aria-label="${title}">Read More</a></p>` : ''}
        </div>
    `;
  } else {
    eventHTML += `<meta property="description" content="${excerpt}">`;
  }

  if (showCalendars && calendars.length > 0) {
    eventHTML += `
        <footer class="article-footer event-footer">
          <p class="meta-item posted-in"><b>Posted In:</b> ${calendars.join(', ')}</p>
        </footer>
    `;
  }

  eventHTML += `
      </div>
    </div>
  `;

  container.innerHTML = eventHTML;
  return container;
}