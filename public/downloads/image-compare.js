/*!
 * Image Compare
 * v2026-08-07
 */
document.addEventListener('input', function(e){
  var input = e.target;
  if(!input.classList || !input.classList.contains('image-compare-input')) return;

  var compare = input.closest('.image-compare');
  if(!compare) return;

  compare.style.setProperty('--compare-position', input.value + '%');
  input.setAttribute('aria-valuetext', Math.round(input.value) + '% of the before image shown');
});
