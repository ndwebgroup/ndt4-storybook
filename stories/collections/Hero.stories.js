import Header from './Header.js';
import Hero from './Hero.js';
import { defaultNavigationItems } from '../components/NavigationPrimary.js';

// Add styles to document head
const addHeaderStyles = () => {
  if (!document.getElementById('header-styles')) {
    const style = document.createElement('style');
    style.id = 'header-styles';
    style.textContent = `
      .wrapper {
        min-height: revert;
      }
    `;
    document.head.appendChild(style);
  }
};


export default {
  title: 'Collections/Hero',
  component: Hero,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      source: {
        // This will be the code shown in the docs
        transform: (code) => {
          // Remove the wrapper div from the code view
          return code.replace(/<div class="wrapper">(.*?)<\/div>/gs, '$1');
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
      return `<div class="wrapper" id="wrapper">${Header({ siteName:`Department of Example`, navHeaderLinks: defaultNavigationItems, showNavButton:false, markRight:false })}<main id="content" class="site-content">${result}</main></div>`;
    }
  ],
  argTypes: {
    pageTitle: {
      name: 'Page Title',
      control: 'text',
      description: 'Title of the page',
    },
    pageLede: {
      name: 'Page Lede',
      control: 'text',
      description: 'Lede or subtitle of the page',
    },
    showFeaturedImage: {
      name: 'Show Featured Image',
      control: 'boolean',
      description: 'Whether to show the featured image',
      defaultValue: true
    },
    heroLayout: {
      name: 'Hero Layout',
      control: { type: 'select' },
      options: ['inset', 'container', 'screen'],
      description: 'Layout style for the hero section',
    },
  },
  args: {
    // Default values for the component
    siteTitle: 'Department of Example',
    pageTitle: 'Do more than dream about the future. <em>Fight</em> for it.',
    pageLede: '',
    showFeaturedImage: true,
    heroLayout: 'inset',
  }
};

const Template = (args) => {
  return Hero(args);
};

export const Default = Template.bind({});
Default.args = {
  // Basic example uses the default args
};

export const WithLede = Template.bind({});
WithLede.args = {
  pageLede: 'This is an example of a page lede or subtitle that provides additional context about the page.',
};

export const NoFeaturedImage = Template.bind({});
NoFeaturedImage.args = {
  heroLayout: 'inset',
  showFeaturedImage: false,
  pageLede: 'This is an example of a page lede or subtitle that provides additional context about the page.',
};
export const ContainerLayout = Template.bind({});
ContainerLayout.args = {
  heroLayout: 'container',
  pageLede: 'This is an example of a page lede or subtitle that provides additional context about the page.',
};
export const ScreenLayout = Template.bind({});
ScreenLayout.args = {
  heroLayout: 'screen',
  pageLede: 'This is an example of a page lede or subtitle that provides additional context about the page.',
};