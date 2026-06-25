import SiteHeader from '../SiteHeader.js';
import PageHeaderContainer from './PageHeaderContainer.js';
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
  title: 'Collections/Page Header/Page Header (Container)',
  component: PageHeaderContainer,
  tags: ['!autodocs', 'stable'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      source: {
        // This will be the code shown in the docs
        transform: (code) => {
          // Remove the wrapper div from the code view
          return code.replace(/<section class="wrapper" id="wrapper"><header(.*?)class="site-content">(.*?)<\/main><\/section>/gs, '$2');
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
      return `<section class="wrapper" id="wrapper">${SiteHeader({ siteName:`Department of Example`, navHeaderLinks: defaultNavigationItems, showNavButton:false, markRight:false })}<main id="content" class="site-content">${result}</main></section>`;
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
    backgroundGradient: {
      name: 'Show Gradient',
      control: 'boolean',
      description: 'Whether to show the background gradient',
      defaultValue: true,
      if: { arg: 'featuredImage'}
    },
    backgroundColor: {
      name: 'Background Color',
      control: { type: 'select' },
      options: ['black','brand-blue', 'brand-blue-light', 'brand-blue-dark', 'warm-white', 'sky-blue', 'sky-blue-light', 'gray-extra-extra-light', 'gray-dark'],
      description: 'Background color behind the featured image',
      defaultValue: 'brand-blue',
      if: { arg: 'featuredImage'}
    },
    fadeDirection: {
      name: 'Fade Direction',
      control: { type: 'select' },
      options: ['to-right', 'to-left', 'to-bottom', 'to-top', 'to-top-right', 'to-top-left', 'to-bottom-right', 'to-bottom-left'],
      description: 'Direction of the fade effect',
      defaultValue: 'to-right',
      if: { arg: 'backgroundGradient'}
    },
  },
  args: {
    // Default values for the component
    pageTitle: `Do more than dream about the future. Fight for it.`,
    pageTitleSize: 'md',
    pageLede: '',
    featuredImage: true,
    imageUrl: '/images/placeholder-campus-3-1600x900.jpg',
    backgroundColor: 'brand-blue',
    backgroundGradient: true,
    fadeDirection: 'to-right',
  }
};

const Template = (args) => {
  return PageHeaderContainer(args);
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