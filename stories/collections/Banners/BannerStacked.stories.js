import BannerDefault from './BannerStacked';

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
  title: 'Collections/Banner/Banner (Stacked)',
  tags: ['!autodocs', 'stable'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      source: {
        // This will be the code shown in the docs
        transform: (code) => {
          // Remove the wrapper div from the code view
          return code.replace(/<section class="wrapper"><div class="page-secondary full-width">(.*?)<\/div><\/section>/gs, '$1');
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
      return `<section class="wrapper"><div class="page-secondary full-width">${result}</div></section>`;
    }
  ],
  argTypes: {
    textOrientation: {
      name: 'Text Orientation',
      control: { type: 'select' },
      options: ['left', 'center'],
      description: 'The text orientation for the banner content'
    },
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
    bannerWidth: {
      name: 'Banner Width',
      control: { type: 'select' },
      options: ['default', 'sm', 'md', 'lg', 'xl', 'screen'],
    },
    imageCount: {
      name: 'Image Count',
      control: { type: 'number', min: 1, max: 3, step: 1 },
      description: 'The number of images to display in the banner'
    },
    buttons: { name: 'Single Button', control: 'object' },
    buttonList: { name: 'Button List', control: 'object' },
    backgroundColor: {
      name: 'Background Color',
      control: { type: 'select' },
      options: ['none', 'brand-blue', 'brand-blue-dark', 'sky-blue-light', 'warm-white'],
      description: 'The background color of the banner'
    },
  },
  args: {
    // Default args for all stories
    textOrientation:'left',
    label:'',
    headingTag:'h2',
    title:'Banner Title',
    titleSize:'default',
    summary:'Risus parturient ullamcorper luctus tempor nisl lacus nec sociis cras a vestibulum cras parturient sociosqu augue senectus parturient laoreet euismod.',
    imageCount:1,
    bannerWidth:'default',
    backgroundColor:'none',
  },
};

const exampleButtons = [
  { label:'Button One', type:'primary', cta:true, more:true, },
  { label:'Button Two', type:'primary', cta:false, more:false, },
];

// Default
export const Default = (args) => {
  const mergedArgs = { ...args };
  return BannerDefault(mergedArgs);
};
Default.storyName = 'Default';
Default.args = {
  buttons: { label: 'Explore all programs', type: 'primary', cta:false, more: true }
};

// With Background Color
export const BackgroundColor = (args) => {
  const mergedArgs = { ...args };
  return BannerDefault(mergedArgs);
};
BackgroundColor.storyName = 'With Background Color';
BackgroundColor.args = {
  buttons: { label: 'Learn More', type: 'primary', cta:false, more: false },
  backgroundColor: 'brand-blue',
};