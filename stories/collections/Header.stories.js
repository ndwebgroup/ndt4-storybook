import Header from './Header.js';
import { defaultNavigationItems } from '../components/NavigationPrimary.js';

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
      .site-header {
        grid-row: 1/-1;
      }
    `;
    document.head.appendChild(style);
  }
};

export default {
  title: 'Collections/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
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
      return `<div class="wrapper">${result}</div>`;
    }
  ],
  argTypes: {
    // Nav footer props
    navHeaderLinks: {
      name: 'Navigation Header Links',
      control: {
        type: 'array',
        of: {
          type: 'object',
          properties: {
            label: {
              name: 'Label',
              type: 'string'
            },
            url: {
              name: 'URL',
              type: 'string'
            }
          }
        }
      },
      description: 'Links for main header navigation (defaults to NavigationPrimary defaults if not provided)',
    },

    // Site organization props
    siteName: {
      name: 'Site Name',
      control: 'text',
      description: 'Name of the site',
    },
    siteTagline: {
      name: 'Site Tagline',
      control: 'text',
      description: 'Tagline of the site',
    },
    showNavigation: {
      control: 'boolean',
      description: 'Whether to show the navigation',
      defaultValue: true
    },
    showNavButton: {
      control: 'boolean',
      description: 'Whether to show the navigation button',
      defaultValue: true
    }
  },
  args: {
    // Default values for the component
    siteName: 'Department of Example',
    siteTagline: '',
    showNavButton: false,
  }
};

const Template = (args) => {
  return Header(args);
};

export const Default = Template.bind({});
Default.args = {
  siteName: 'Notre Dame',
  showNavigation: true,
  navHeaderLinks: defaultNavigationItems
};

export const WithTagline = Template.bind({});
WithTagline.args = {
  siteName: 'Notre Dame',
  siteTagline: 'The University of Example',
  showNavigation: true
};

export const WithNavigationButton = Template.bind({});
WithNavigationButton.args = {
  siteName: 'Notre Dame',
  showNavigation: true,
  showNavButton: true
};

export const WithoutNavigation = Template.bind({});
WithoutNavigation.args = {
  siteName: 'Notre Dame',
  showNavigation: false
};
