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

const addCarouselScript = () => {
  const script = document.createElement('script');
  script.textContent = `
    document.addEventListener('DOMContentLoaded', function(){
      var sliders = document.querySelectorAll('.list--carousel');
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
}

import Gallery from '/stories/components/Gallery';

export default function Banner(props) {
  const container = document.createElement('section');
  const { bannerWidth, headingTag, label, title, titleSize, summary, backgroundColor, backgroundWidth, variant } = props;

  container.className = `section align-center${ bannerWidth !== 'default' ? ` col--${bannerWidth}` : '' }${ backgroundColor !== 'none' ? ` bg--${backgroundColor}` : '' }${ backgroundWidth == 'full-width' ? ' bg--full-bleed' : '' }`;

  // Create banner secondary content first without buttons
  container.innerHTML = `
  <div class="section-content grid ${title && summary ? 'grid-ml-2 grid-gap--lg align-end' : ''}">
    ${title ? `<${headingTag} class="section-title${titleSize == 'default' ? '' : ` section-title--${titleSize}`}">${title}</${headingTag}>` : ''}
    <div>
      ${summary ? `<p>${summary}</p>` : ''}
    </div>
  </div>
  ${Gallery({ id:4, classes:`${variant === 'carousel' ? 'list--carousel' : 'gallery--tiled'}`, images:7 })}
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

  {variant === 'carousel' ? addCarouselScript() : ''}
  return container.outerHTML;
}