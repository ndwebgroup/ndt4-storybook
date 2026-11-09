import BannerStickyHeader from './BannerStickyHeader';

// Add styles to document head
const addHeaderStyles = () => {
  if (!document.getElementById('header-styles')) {
    const style = document.createElement('style');
    style.id = 'header-styles';
    style.textContent = `
      .wrapper {
        min-height: revert;
        grid-template-rows: auto;
      }
      .page-secondary {
        margin-block:0;
      }
      .section {
        margin-block:clamp(2rem, 3.5vw, 5rem); 
      }
    `;
    document.head.appendChild(style);
  }
};

export default {
  title: 'Collections/Banner/Banner (Sticky Header)',
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
      addHeaderStyles();
      // This will only affect the preview
      const result = Story();
      return `<div class="wrapper"><div class="page-secondary full-width">${result}</div></div>`;
    }
  ],
  argTypes: {
    label: { name:'Label' },
    title: { name:'Title' },
    titleSize: {
      name:'Title Size',
      control: { type: 'select' },
      options: ['xs', 'sm', 'default', 'lg', 'xl', 'display'],
    },
    summary: { name:'Summary' },
    headingTag: {
      name:'Heading Tag',
      control: { type: 'select' },
      options: ['h2', 'h3', 'h4'],
      description: 'The heading tag to use for the title'
    },
    contentType: {
      name: 'Content',
      control: { type: 'select', labels: { cards: 'Card Listing', gallery: 'Gallery', quotes: 'Quotes', accordions: 'Accordions' } },
      options: ['cards', 'gallery', 'quotes', 'accordions'],
      description: 'The component displayed beside the sticky header',
    },
    backgroundColor: {
      name: 'Background Color',
      control: { type: 'select' },
      options: ['none', 'brand-blue', 'brand-blue-dark', 'sky-blue-light', 'warm-white'],
      description: 'The background color of the banner'
    },
    backgroundWidth: {
      name: 'Background Width',
      control: { type: 'select' },
      options: ['default', 'full-width'],
      description: 'The background width of the banner'
    },
  },
  args: {
    // Default args for all stories
    label:'',
    headingTag:'h2',
    title:'Banner Title',
    titleSize:'default',
    summary:'Risus parturient ullamcorper luctus tempor nisl lacus nec sociis cras a vestibulum cras parturient sociosqu augue senectus parturient laoreet euismod.',
    contentType:'cards',
    backgroundColor:'none',
    backgroundWidth:'default',
  },
};

// Default
export const Default = (args) => {
  const mergedArgs = { ...args };
  return BannerStickyHeader(mergedArgs);
};
Default.storyName = 'Default';
Default.args = {
};

// With Background Color
export const BackgroundColor = (args) => {
  const mergedArgs = { ...args };
  return BannerStickyHeader(mergedArgs);
};
BackgroundColor.storyName = 'With Background Color';
BackgroundColor.args = {
  backgroundColor: 'brand-blue',
  backgroundWidth: 'full-width',
};
// With Gallery
export const WithGallery = (args) => BannerStickyHeader({ ...args });
WithGallery.storyName = 'With Gallery';
WithGallery.args = {
  contentType: 'gallery',
};

// With Quotes
export const WithQuotes = (args) => BannerStickyHeader({ ...args });
WithQuotes.storyName = 'With Quotes';
WithQuotes.args = {
  contentType: 'quotes',
};

// With Accordions
export const WithAccordions = (args) => BannerStickyHeader({ ...args });
WithAccordions.storyName = 'With Accordions';
WithAccordions.args = {
  contentType: 'accordions',
};
