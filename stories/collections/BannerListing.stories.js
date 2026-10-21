import BannerListing from './BannerListing.js';

// Add styles to document head
const addFooterStyles = () => {
  if (!document.getElementById('footer-styles')) {
    const style = document.createElement('style');
    style.id = 'footer-styles';
    style.textContent = `
      .wrapper {
        min-height: revert;
        grid-template-rows: auto;
      }
      .page-secondary {
        margin-block:0;
      }

      .section.section-group {
        margin-block:clamp(2rem, 3.5vw, 5rem); 
      }
      .section.section-group[class*="bg--"] {
        margin-block: 0;
      }
    `;
    document.head.appendChild(style);
  }
};

export default {
  title: 'Collections/Banner Listing',
  tags: ['!autodocs', 'stable'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      source: {
        // This will be the code shown in the docs
        transform: (code) => {
          // Remove the wrapper div from the code view
          return code.replace(/<div class="wrapper"><div class="page-secondary full-width">(.*?)<\/div><\/div>/gs, '$1');
        }
      }
    }
  },
  decorators: [
    (Story) => {
      // Add styles to document head
      addFooterStyles();
      // This will only affect the preview
      const result = Story();
      return `<div class="wrapper"><div class="page-secondary full-width">${result}</div></div>`;
    }
  ],
  argTypes: {
    // Banner listing props
    backgroundColor: {
      name: 'Background Color',
      control: { type: 'select' },
      options: ['none', 'brand-blue', 'brand-blue-dark', 'sky-blue-light', 'warm-white'],
      description: 'The background color of the banner'
    },
    banners: {
      name: 'Number of Banners',
      control: { type: 'range', min: 1, max: 8, step: 1 },
      description: 'The number of banners to display in the list',
    },
    alternate: {
      name: 'Alternate Banners',
      control: 'boolean',
      description: 'Whether to alternate the image of each banner',
    }
  },
  args: {
    backgroundColor: '',
    banners: 3,
    alternate: false
  }
};

// Default footer example
export const Default = (args) => {
  return BannerListing(args);
};
Default.args = {
  // Default example uses the default args
};

export const Alternate = (args) => {
  return BannerListing(args);
};
Alternate.args = {
  alternate: true
};

export const BackgroundColor = (args) => {
  return BannerListing(args);
};
BackgroundColor.args = {
  backgroundColor: 'brand-blue'
};
export const BackgroundColorAlternate = (args) => {
  return BannerListing(args);
};
BackgroundColorAlternate.args = {
  backgroundColor: 'brand-blue',
  alternate: true
};
