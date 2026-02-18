/**
 * Video component
 * @param {string} props.videoSrc - The source URL of the video to embed
 * @param {string} props.videoId - The video id
 * @param {('embed'|'placeholder'|'lightbox')} [props.style='embed'] - The play button style of the video
 * @param {('default'|'outline'|'minimal'|'ornamental')} [props.playStyle='default'] - The play button style of the video
 * @param {string} props.playText - The optional play button text of the video
 */

export default function Video(args) {
  const { style, videoSrc, videoId, playText, playStyle } = args;
  const container = document.createElement('figure')
  container.className = `video--${style}`;

  switch(style) {
    case 'embed':
      container.innerHTML = `
  <iframe width="1280" height="720" style="aspect-ratio: 16/9;" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
`;
      break;
    case 'placeholder':
      container.innerHTML = `
  <a class="video video--${playStyle}" href="https://www.youtube.com/watch?v=${videoId}">
    <img title="A YouTube Video" src="http://img.youtube.com/vi/${videoId}/maxresdefault.jpg" alt="A YouTube Video">
    ${playText}
  </a>
`;
      break;
    case 'lightbox':
      container.innerHTML = `
  <a class="video video--${playStyle}" href="https://www.youtube.com/watch?v=${videoId}">
    <img title="A YouTube Video" src="http://img.youtube.com/vi/${videoId}/maxresdefault.jpg"  alt="A YouTube Video">
    ${playText}
  </a>
`;
      break;
    default:
      container.innerHTML = `
  <iframe width="1280" height="720" style="aspect-ratio: 16/9;" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
 `;
  }

  return container;
}