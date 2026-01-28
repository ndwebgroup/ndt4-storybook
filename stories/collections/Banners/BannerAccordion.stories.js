import BannerAccordion from './BannerAccordion';

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
  title: 'Collections/Banner/Banner (Accordion)',
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
      options: ['default', 'sm', 'md', 'lg', 'xl'],
    },
    headingTag: {
      name:'Heading Tag',
      control: { type: 'select' },
      options: ['h2', 'h3', 'h4'],
      description: 'The heading tag to use for the title'
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
    accordions: { name: 'Accordions', control: 'object' },
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
  },
};

const exampleItems = [
  { summary:'Summary One', detail:'Litora volutpat a ad fermentum scelerisque parturient egestas vestibulum a malesuada ut turpis vestibulum ullamcorper vehicula torquent viverra.' },
  { summary:'Summary Two', detail:'Litora volutpat a ad fermentum scelerisque parturient egestas vestibulum a malesuada ut turpis vestibulum ullamcorper vehicula torquent viverra.' },
  { summary:'Summary Three', detail:'Litora volutpat a ad fermentum scelerisque parturient egestas vestibulum a malesuada ut turpis vestibulum ullamcorper vehicula torquent viverra.' },
];

// Default
export const Default = (args) => {
  const mergedArgs = { ...args };
  return BannerAccordion(mergedArgs);
};
Default.storyName = 'Default';
Default.args = {
  accordions: exampleItems,
};

// Wide Banner
export const WideBanner = (args) => {
  const mergedArgs = { ...args };
  return BannerAccordion(mergedArgs);
};
WideBanner.storyName = 'Wide Banner';
WideBanner.args = {
  bannerWidth: 'xl',
  accordions: exampleItems,
};

// With Background
export const WithBackground = (args) => {
  const mergedArgs = { ...args };
  return BannerAccordion(mergedArgs);
};
WithBackground.storyName = 'With Background';
WithBackground.args = {
  backgroundColor: 'brand-blue',
  accordions: exampleItems,
};