import SiteHeader from '../SiteHeader.js';
import PageHeaderScreen from './PageHeaderScreen.js';
import { defaultNavigationItems } from '../../components/NavigationPrimary.js';

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
  title: 'Collections/Page Header/Page Header (Screen)',
  component: PageHeaderScreen,
  tags: ['!autodocs', 'stable'],
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
      return `<div class="wrapper" id="wrapper">${SiteHeader({ siteName:`Department of Example`, navHeaderLinks: defaultNavigationItems, showNavButton:false, markRight:false })}<main id="content" class="site-content">${result}</main></div>`;
    }
  ],
  argTypes: {
    pageTitle: {
      name: 'Page Title',
      control: 'text',
      description: 'Title of the page',
    },
    pageTitleSize: {
      name: 'Page Title Size',
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'dynamic'],
      description: 'Size of the page title',
    },
    pageLede: {
      name: 'Page Lede',
      control: 'text',
      description: 'Lede or subtitle of the page',
    },
    featuredImage: {
      name: 'Show Featured Image',
      control: 'boolean',
      description: 'Whether to show the featured image',
      defaultValue: true
    },
    imageUrl: {
      name: 'Image URL',
      control: 'text',
      description: 'URL of the featured image',
      defaultValue: '/images/placeholder-campus-3-1600x900.jpg'
    },
  },
  args: {
    // Default values for the component
    pageTitle: 'Do more than dream about the future. Fight for it.',
    pageTitleSize: 'sm',
    pageLede: '',
    featuredImage: true,
    imageUrl: '/images/placeholder-campus-3-1600x900.jpg',
  }
};

const Template = (args) => {
  return PageHeaderScreen(args);
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
  featuredImage: false,
  pageLede: 'This is an example of a page lede or subtitle that provides additional context about the page.',
};