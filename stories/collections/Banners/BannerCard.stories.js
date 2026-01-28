import BannerCard from './BannerCard';

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
  title: 'Collections/Banner/Banner (Cards)',
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
    backgroundColor: {
      name: 'Background Color',
      control: { type: 'select' },
      options: ['none', 'brand-blue', 'brand-blue-dark', 'sky-blue-light', 'warm-white'],
      description: 'The background color of the banner'
    },
    cardCount: { 
      name: 'Card Count',
      control: { type: 'number', min: 1, max: 6, step: 1 },
      description: 'The number of cards to display in the banner',
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
    cardCount: 3,
  },
};

// Default
export const Default = (args) => {
  const mergedArgs = { ...args };
  return BannerCard(mergedArgs);
};
Default.storyName = 'Default';
Default.args = {
  cardCount: 3,
};

// With Single Card
export const WithSingleCard = (args) => {
  const mergedArgs = { ...args };
  return BannerCard(mergedArgs);
};
WithSingleCard.storyName = 'With Single Card';
WithSingleCard.args = {
  cardCount: 1,
};

// With Two Cards
export const WithTwoCards = (args) => {
  const mergedArgs = { ...args };
  return BannerCard(mergedArgs);
};
WithTwoCards.storyName = 'With Two Cards';
WithTwoCards.args = {
  cardCount: 2,
};
// With Background Color
export const BackgroundColor = (args) => {
  const mergedArgs = { ...args };
  return BannerCard(mergedArgs);
};
BackgroundColor.storyName = 'With Background Color';
BackgroundColor.args = {
  backgroundColor: 'brand-blue',
};