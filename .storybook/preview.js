/** @type { import('@storybook/html').Preview } */

import { themes } from '@storybook/theming';
import '../public/global.css';

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

const body = document.body;
body.classList.add("sb-unstyled");

export default preview;