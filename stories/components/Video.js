/**
 * Video component
 * @param {string} props.videoSrc - The source URL of the video to embed
 * @param {string} props.videoId - The video id
 * @param {('embed'|'placeholder'|'dialog')} [props.style='embed'] - The play button style of the video
 * @param {('default'|'outline'|'minimal'|'ornamental')} [props.playStyle='default'] - The play button style of the video
 * @param {string} props.playText - The optional play button text of the video
 */

export default function Video(args) {
  const { style, videoSrc, videoId, playText, playStyle } = args;
  // Dialog videos need extra dialog markup in the container, so the
  // container is a plain div and the figure wraps the image instead.
  const container = document.createElement('div')
  container.className = `video--wrapper`;

  switch(style) {
    case 'embed':
      container.innerHTML = `
  <iframe width="1280" height="720" style="aspect-ratio: 16/9;" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
`;
      break;
    case 'placeholder':
      container.innerHTML = `
  <a class="video video--${playStyle}" href="https://www.youtube.com/watch?v=${videoId}">
    <figure><img title="A YouTube Video" src="http://img.youtube.com/vi/${videoId}/maxresdefault.jpg" width="1280" height="720" alt="A YouTube Video"></figure>
    ${playText}
  </a>
`;
      break;
    case 'dialog':
      container.innerHTML = `
  <div class="dialog-item">
    <a class="video video--${playStyle} dialog-link" href="https://www.youtube.com/watch?v=${videoId}">
      <figure><img title="A YouTube Video" src="http://img.youtube.com/vi/${videoId}/maxresdefault.jpg" width="1280" height="720" alt="A YouTube Video"></figure>
      ${playText}
    </a>
    
    <dialog class="dialog dialog--video">
      <form method="dialog" class="dialog-close">
        <button type="submit" title="Close">×</button>
      </form>
      <div class="dialog-content">
        <iframe width="1280" height="720" style="aspect-ratio: 16/9;" src="https://www.youtube.com/embed/${videoId}?enablejsapi=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
        <div><p>This is a caption for the video.</p></div>
      </div>
    </dialog>
  </div>
`;
      break;
    default:
      container.innerHTML = `
  <iframe width="1280" height="720" style="aspect-ratio: 16/9;" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
 `;
  }

  return container;
}