import BannerTestimonial from './BannerTestimonial';

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
  title: 'Collections/Banner/Banner (Testimonial)',
  tags: ['!autodocs', 'coming'],
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
      options: ['default', 'sm', 'md', 'lg', 'xl'],
    },
    summary: { name:'Summary' },
    headingTag: {
      name:'Heading Tag',
      control: { type: 'select' },
      options: ['h2', 'h3', 'h4'],
      description: 'The heading tag to use for the title'
    },
    variant: {
      name: 'Testimonial Variant',
      control: { type: 'select' },
      options: ['default', 'carousel'],
    },
    bannerWidth: {
      name: 'Banner Width',
      control: { type: 'select' },
      options: ['default', 'sm', 'md', 'lg', 'xl', 'screen'],
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
    bannerWidth:'default',
    backgroundColor:'none',
    backgroundWidth:'default',
    variant:'default',
  },
};

// Default
export const Default = (args) => {
  const mergedArgs = { ...args };
  return BannerTestimonial(mergedArgs);
};
Default.storyName = 'Default';

// Gallery Carousel
export const TestimonialCarousel = (args) => {
  const mergedArgs = { ...args, variant: 'carousel' };
  return BannerTestimonial(mergedArgs);
};
TestimonialCarousel.storyName = 'Carousel';