/** @type { import('@storybook/html').Preview } */

import { themes } from '@storybook/theming';
import '../public/css/global.css';

const withSvgSprite = (Story) => {
  // Only inject the sprite if it hasn't been injected already
  if (!document.getElementById('nd-icons-sprite')) {
    // Fetch the SVG sprite content
    fetch('/icons-nd-base.svg')
      .then(response => response.text())
      .then(svgContent => {
        // Create a container for the SVG sprite
        const div = document.createElement('div');
        div.style.display = 'none';
        div.innerHTML = svgContent;

        // Add an ID to make it easier to reference
        const svgElement = div.querySelector('svg');
        svgElement.id = 'nd-icons-sprite';

        // Insert at the beginning of the body
        if (document.body.firstChild) {
          document.body.insertBefore(svgElement, document.body.firstChild);
        } else {
          document.body.appendChild(svgElement);
        }
      })
      .catch(error => {
        console.error('Error loading SVG sprite:', error);
      });
  }

  return Story();
};

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable:true,
    },
    docs: {
      toc: {
        headingSelector: 'h2, h3',
      }

    },
  },
  sidebar: {
    order: {
      default: ['Components', ['*', 'Other']], // Sort Components alphabetically
    },
  },
  darkMode: {
    dark: { ...themes.dark, appBg: '#0c2340', barBg: '#0c2340', },
    light: { ...themes.normal, appBg: '#fff' }
  },
  decorators: [withSvgSprite],
};

/*!
 * Load ND icons
 * Replaces a `span` with the `.icon` class
 * <span class="icon" data-icon="calendar"></span>
 */
const loadIcons = () => {
  let icons = document.querySelectorAll('span.icon');
  for(let i=0; i< icons.length; i++){
    let el = icons[i],
        className = el.getAttribute('class'),
        dataIcon = el.getAttribute('data-icon'),
        svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
        use = document.createElementNS('http://www.w3.org/2000/svg', 'use')
    ;
    use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#icon-' + dataIcon);
    svg.setAttribute('class', className);
    svg.setAttribute('data-icon', dataIcon);
    svg.setAttribute('aria-hidden', true);
    svg.setAttribute('focusable', false);
    svg.appendChild(use);
    el.parentNode.replaceChild(svg, el);
  }
};
document.addEventListener('DOMContentLoaded', function() {
  loadIcons();
});

const body = document.body;
body.classList.add("sb-unstyled");

export default preview;