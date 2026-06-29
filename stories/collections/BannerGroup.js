/**
 * Banner Group collection
 * @param {string} props.backgroundColor - The background color of the banner
 * @param {number} props.banners - The number of banners to display in the group
 * @param {boolean} props.alternate - Whether to alternate the image of each banner
 * @returns {string} - The footer HTML
 */

import Banner from '../collections/Banners/BannerDefault.js';

export default function BannerGroup(props) {
  const {
    backgroundColor = '',
    banners = 3,
    alternate = false
  } = props;

  // Create the footer HTML
  const container = document.createElement('div');
  container.className = `section section-group${ alternate ? ' section-group--alt' : '' }${ backgroundColor && backgroundColor !== 'none' ? ` bg--${backgroundColor} bg--full-bleed` : '' }`;
  
  container.innerHTML = `
${Array.from({ length: banners }, (_, i) => Banner({ bannerWidth:'default', media:'image', order:'default', headingTag:'h2', title:'Spotlight on Faculty Research', titleSize:'default', summary:'Discover the groundbreaking work being done by our faculty members across various disciplines.', backgroundColor:'none' })).join('')}
`;

   // Otherwise, return the footer HTML directly
  return container.outerHTML;
}
