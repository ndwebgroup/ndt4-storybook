/**
 * Creates a news article component
 * @param {Object} props - Component properties
 * @param {string} props.title - The title of the news article
 * @param {boolean} props.showImage - Whether to show the article image
 * @param {string} props.label - The label of the article
 * @param {string} props.link - The link to the full article
 * @param {string} props.author - The author of the article
 * @param {string} props.publishDate - The publish date of the article
 * @param {string} props.headingTag - The heading tag to use (h1, h2, h3, etc.)
 * @returns {HTMLElement} - The news article element
 */
export default function NewsCard(props) {
  const {
    title,
    excerpt,
    showImage = true,
    imageUrl,
    label = '',
    link = '#',
    author = 'Author Name',
    publishDate = 'April 1, 2025',
    headingTag = 'h2'
  } = props;

  const container = document.createElement('article');
  container.className = `article snippet card-container`;
  container.setAttribute('typeof', 'NewsArticle');

  let articleHTML = `\n  <div class="card">`;

  if (showImage) {
    articleHTML += `
      ${imageUrl ? `<figure class="card-image entry-image"><img property="image" src="${imageUrl}" width="600" height="400" alt="" loading="lazy"></figure>` : '<figure class="card-image"><img src="/images/placeholder-campus-1-600x400.jpg" width="600" height="400" alt=""></figure>'}
    `;
  }

  articleHTML += `
      <div class="card-body">
        ${label ? `<p class="card-label">${label}</p>` : ''}
        <${headingTag} class="article-title card-title" property="headline">
          <a class="card-link" href="${link}">${title}</a>
        </${headingTag}>
        <div class="article-meta">
          <link property="publisher" resource="#siteorg">
          <div property="author" typeof="Person"><meta property="name" content="${author}"></div>
          <p class="meta-item publish-info"><time property="datePublished" datetime="${new Date(publishDate).toISOString()}">${publishDate}</time></p>
        </div>
        ${excerpt ? `<div class="card-summary">${excerpt}</div>` : ''}
      </div>
    </div>
  `;

  container.innerHTML = articleHTML;
  return container;
}