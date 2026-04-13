/**
 * Banner component
 * @param {Object} props - Component properties
 * @param {('sm'|'md'|'lg'|'xl'|'screen')} props.bannerWidth - The width of the banner
 * @param {('tiled'|'carousel')} props.variant - The varient of the gallery in the banner
 * @param {string} props.label - The label of the banner
 * @param {string} [props.headingTag='h2'] - The heading tag to use for the title
 * @param {string} props.title - The title of the banner
 * @param {('default'|'sm'|'md'|'lg'|'xl')} props.titleSize - The title size of the banner
 * @param {string} props.summary - The summary of the banner
 * @param {string} props.backgroundColor - The background color of the banner
 * @param {('default'|'full-width')} [props.backgroundWidth='default'] - The background width of the banner
 * @returns {HTMLElement} - The banner element
 */

const addCarouselStyles = () => {
  const style = document.createElement('style');
  style.textContent = `
    .gallery--carousel {
      position:relative; 
      z-index:1;
    }
    .gallery--carousel::after { content:''; display:block; position:absolute; right:0; bottom:3px; left:0; height:1px; border-top:var(--border-primary); z-index:-1; }

    @supports selector(::-webkit-scrollbar) {
      .gallery--carousel ul::-webkit-scrollbar { height:7px; background-color:transparent; }
      .gallery--carousel ul::-webkit-scrollbar-thumb { border-radius:var(--border-radius); background-color:var(--brand-gold); cursor:grab; }
      .gallery--carousel ul::-webkit-scrollbar-track { border-radius:0; background-color:transparent; }
    }
    .gallery--carousel ul {
      height:100%; padding-block:0 2rem; display:grid; grid-template-columns:repeat(auto-fill, minmax(65vw,1fr)); scroll-behavior:smooth; overflow-x:scroll; overflow-y:hidden; scroll-snap-type:x mandatory; grid-auto-columns:65vw; grid-template-rows:1fr; grid-auto-flow:column; grid-gap:1.75rem; margin:0; list-style:none; max-width:90dvw;
    }
    .gallery--carousel li {
      grid-column:span 1; grid-row:span 1; position:relative;
    }
    .gallery--carousel img { aspect-ratio:6/4; width:100%; height:100%; object-fit:cover; scroll-snap-align:center; }

    @media (min-width: 60em) {
      .gallery--carousel ul { padding-block:2rem; grid-template-columns:repeat(auto-fill, minmax(36vw,1fr)); grid-auto-columns:36vw; }
    }

    @media (min-width: 100em) {
      .gallery--carousel ul { grid-template-columns:repeat(auto-fill, minmax(21vw,1fr)); grid-auto-columns:21vw; }
    }
  `;
  const script = document.createElement('script');
  script.textContent = `
    document.addEventListener('DOMContentLoaded', function(){
      var sliders = document.querySelectorAll('.gallery--carousel');
      [].forEach.call(sliders, function(slider){
        var slides = slider.querySelector('ul');
        var slide_items = slides.querySelectorAll('li');
        var btn_prev = slider.querySelector('.btn-prev.slide-prev');
        var btn_next = slider.querySelector('.btn-next.slide-next');

        // Show/Hide the slider buttons
        slides.addEventListener('scroll', function(){
          (slides.scrollLeft < 100) ? btn_prev.classList.add('hidden') : btn_prev.classList.remove('hidden');
          (slides.scrollLeft > (slides.scrollWidth - slides.clientWidth - 10)) ? btn_next.classList.add('hidden') : btn_next.classList.remove('hidden');
        });

        // Slider buttons listeners
        slider.querySelectorAll('.slide-next').forEach(function(item, i){
          item.addEventListener('click', function(target){
            slides.scrollBy(slider.clientWidth, 0);
          });
        });
        slider.querySelector('.slide-prev').addEventListener('click', function(){
          left = (slides.scrollLeft < slide_items[0].clientWidth) ? left = slides.scrollLeft : slider.clientWidth;
          slides.scrollBy(-left, 0);
        });
      });
    });
  `;
  document.head.appendChild(script);
  document.head.appendChild(style);
}

import Gallery from '/stories/components/Gallery';

export default function Banner(props) {
  const container = document.createElement('section');
  const { bannerWidth, headingTag, label, title, titleSize, summary, backgroundColor, backgroundWidth, variant } = props;

  container.className = `section align-center${ bannerWidth !== 'default' ? ` col--${bannerWidth}` : '' }${ backgroundColor !== 'none' ? ` bg--${backgroundColor}` : '' }${ backgroundWidth == 'full-width' ? ' bg--full-bleed' : '' }`;

 const createGalleryImages = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    thumbnail: `/images/placeholder-campus-3-600x600.jpg`,
    fullsize: `/images/placeholder-campus-3-1200x675.jpg`,
    alt: `Gallery image ${i + 1}`,
    caption: i % 2 === 0 ? `Caption for image ${i + 1}` : '',
  }));
};

  // Create banner secondary content first without buttons
  container.innerHTML = `
  <div class="section-content grid ${title && summary ? 'grid-ml-2 grid-gap--lg align-end' : ''}">
    ${title ? `<${headingTag} class="section-title${titleSize == 'default' ? '' : ` section-title--${titleSize}`}">${title}</${headingTag}>` : ''}
    <div>
      ${summary ? `<p>${summary}</p>` : ''}
    </div>
  </div>
  <div class="${variant === 'carousel' ? 'gallery--carousel' : 'gallery--tiled'}">
    ${Gallery({ id:4, images:createGalleryImages(7) })}
  </div>
`

  // Get the banner body element to append buttons properly
  const bannerBody = container.querySelector('.section-content');

  // Handle label
  if (label) {
    const labelElement = document.createElement('p');
    labelElement.className = 'section-label';
    labelElement.textContent = label;
    bannerBody.prepend(labelElement);
  }

  {variant === 'carousel' ? addCarouselStyles() : ''}
  return container.outerHTML;
}