import BannerFull from './BannerFull';

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
    `;
    document.head.appendChild(style);
  }
};

export default {
  title: 'Collections/Banner/Banner (Full)',
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
    buttons: { name: 'Single Button', control: 'object' },
    buttonList: { name: 'Button List', control: 'object' },
    textAlign: {
      name: 'Text Align',
      control: { type: 'select' },
      options: ['left', 'center'],
      description: 'Text alignment for the banner content'
    },
    backgroundOverlay: {
      name: 'Background Overlay',
      control: { type: 'select' },
      options: ['gradient', 'full'],
      description: 'The background overlay treatment of the banner'
    },
    backgroundOverlayColor: {
      name: 'Background Overlay Color',
      control: { type: 'select' },
      options: ['brand-blue', 'brand-blue-dark', 'brand-blue-light', 'black'],
      description: 'The background overlay color of the banner'
    },
  },
  args: {
    // Default args for all stories
    label:'',
    title:'Banner Title',
    titleSize:'default',
    headingTag:'h2',
    summary:'Quis platea neque nisi a parturient mi suspendisse fusce nisl vestibulum montes dui fames curabitur ridiculus a a id himenaeos vehicula nisi.',
    backgroundOverlay:'gradient',
    backgroundOverlayColor:'brand-blue',
    textAlign:'start',
  },
};

const exampleButtons = [
  { label:'Button One', type:'primary', cta:true, more:true, },
  { label:'Button Two', type:'primary', cta:false, more:false, },
];

// With Gradient
export const Default = (args) => {
  const mergedArgs = { ...args };
  return BannerFull(mergedArgs);
};
Default.storyName = 'With Gradient';
Default.args = {
  buttons: exampleButtons[0],
};

// With Black Gradient
export const BlackGradient = (args) => {
  const mergedArgs = { ...args };
  return BannerFull(mergedArgs);
};
BlackGradient.storyName = 'With Black Gradient';
BlackGradient.args = {
  buttons: exampleButtons[0],
  backgroundOverlayColor:'black',
};

// With Overlay Background
export const Overlay = (args) => {
  const mergedArgs = { ...args };
  return BannerFull(mergedArgs);
};
Overlay.storyName = 'With Overlay';
Overlay.args = {
  buttonList: exampleButtons,
  backgroundOverlay: 'full',
  backgroundOverlayColor: 'brand-blue-light',
};

// With Black Overlay
export const BlackOverlay = (args) => {
  const mergedArgs = { ...args };
  return BannerFull(mergedArgs);
};
BlackOverlay.storyName = 'With Black Overlay';
BlackOverlay.args = {
  backgroundOverlayColor:'black',
  buttons: exampleButtons[0],
};

// With Text Centered 
export const TextCenter = (args) => {
  const mergedArgs = { ...args };
  return BannerFull(mergedArgs);
};
TextCenter.storyName = 'With Text Centered';
TextCenter.args = {
  backgroundOverlay: 'full',
  backgroundOverlayColor: 'brand-blue-dark',
  buttonList: exampleButtons,
  textAlign: 'center',
};