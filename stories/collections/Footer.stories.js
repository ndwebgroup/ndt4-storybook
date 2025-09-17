import Footer from './Footer.js';

// Add styles to document head
const addFooterStyles = () => {
  if (!document.getElementById('footer-styles')) {
    const style = document.createElement('style');
    style.id = 'footer-styles';
    style.textContent = `
      .wrapper {
        min-height: revert;
        grid-template-rows: auto;
      }
      .site-footer {
        grid-row: 1/-1;
      }
    `;
    document.head.appendChild(style);
  }
};

export default {
  title: 'Collections/Footer',
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
      addFooterStyles();
      // This will only affect the preview
      const result = Story();
      return `<div class="wrapper">${result}</div>`;
    }
  ],
  argTypes: {
    // Nav footer props
    showNavFooter: {
      name: 'Show Navigation Footer',
      control: 'boolean',
      description: 'Display the optional top navigation in the footer',
    },
    navFooterLinks: {
      name: 'Navigation Footer Links',
      control: 'object',
      description: 'Links for the optional footer navigation',
    },

    // Site organization props
    siteName: {
      name: 'Site Name',
      control: 'text',
      description: 'Name of the site',
    },
    footerGrandparent: {
      name: 'Grandparent Organization',
      control: 'text',
      description: 'Grandparent organization name',
    },
    footerGrandparentLink: {
      name: 'Grandparent Organization Link',
      control: 'text',
      description: 'Grandparent organization URL',
    },
    footerParent: {
      name: 'Parent Organization',
      control: 'text',
      description: 'Parent organization name',
    },
    footerParentLink: {
      name: 'Parent Organization Link',
      control: 'text',
      description: 'Parent organization URL',
    },
    footerParent2: {
      name: 'Secondary Parent Organization',
      control: 'text',
      description: 'Secondary parent organization name',
    },
    footerParent2Link: {
      name: 'Secondary Parent Organization Link',
      control: 'text',
      description: 'Secondary parent organization URL',
    },

    // Contact info props
    siteAddress: {
      name: 'Site Address',
      control: 'text',
      description: 'Street address',
    },
    sitePhone: {
      name: 'Site Phone',
      control: 'text',
      description: 'Phone number',
    },
    siteFax: {
      name: 'Site Fax',
      control: 'text',
      description: 'Fax number',
    },
    siteEmail: {
      name: 'Site Email',
      control: 'text',
      description: 'Email address',
    },

    // Social media props
    siteFacebook: {
      name: 'Facebook URL',
      control: 'text',
      description: 'Facebook URL',
    },
    siteTwitter: {
      name: 'Twitter/X URL',
      control: 'text',
      description: 'Twitter/X URL',
    },
    siteInstagram: {
      name: 'Instagram URL',
      control: 'text',
      description: 'Instagram URL',
    },
    siteYoutube: {
      name: 'YouTube URL',
      control: 'text',
      description: 'YouTube URL',
    },
    siteLinkedin: {
      name: 'LinkedIn URL',
      control: 'text',
      description: 'LinkedIn URL',
    },

    // Current year prop
    currentYear: {
      name: 'Current Year',
      control: 'number',
      description: 'Current year for copyright notice',
    },
  },
  args: {
    // Default values for the component
    showNavFooter: false,
    navFooterLinks: [
      { label: 'Footer Link 1', url: '/#' },
      { label: 'Footer Link 2', url: '/#' },
      { label: 'Protected section', url: '/#', locked: true },
    ],
    siteName: 'Department of Example',
    currentYear: 2025,
    footerParent: '',
    footerParentLink: '',
    footerGrandparent: '',
    footerGrandparentLink: '',
    footerParent2: '',
    footerParent2Link: '',
    siteAddress: '',
    sitePhone: '',
    siteFax: '',
    siteEmail: '',
    siteFacebook: '',
    siteTwitter: '',
    siteInstagram: '',
    siteYoutube: '',
    siteLinkedin: '',
  }
};

// Basic footer example
export const Basic = (args) => {
  return Footer(args);
};
Basic.args = {
  // Basic example uses the default args
};

// Full example with all options populated
export const FullExample = (args) => {
  return Footer(args);
};
FullExample.args = {
  // Nav footer props (optional)
  showNavFooter: true,
  navFooterLinks: [
    { label: 'Footer Link 1', url: '/#' },
    { label: 'Footer Link 2', url: '/#' },
    { label: 'Protected section', url: '/#', locked: true },
  ],

  // Site organization props
  siteName: 'Department of Example',
  footerGrandparent: 'College of Arts and Letters',
  footerGrandparentLink: 'https://al.nd.edu/',
  footerParent: 'College of Science',
  footerParentLink: 'https://science.nd.edu/',
  footerParent2: 'College of Engineering',
  footerParent2Link: 'https://engineering.nd.edu/',

  // Contact info props
  siteAddress: '100 Main Building',
  sitePhone: '574-631-5555',
  siteFax: '574-631-5556',
  siteEmail: 'example@nd.edu',

  // Social media props
  siteFacebook: 'https://www.facebook.com/notredame/',
  siteTwitter: 'https://twitter.com/NotreDame/',
  siteInstagram: 'https://www.instagram.com/notredame/',
  siteYoutube: 'https://www.youtube.com/user/NDdotEDU',
  siteLinkedin: 'https://www.linkedin.com/school/university-of-notre-dame/',

  // Current year
  currentYear: 2025,
};

// Example without the nav-footer
export const NoNavFooter = (args) => {
  return Footer(args);
};
NoNavFooter.args = {
  showNavFooter: false,
  siteName: 'Department of Example',
  sitePhone: '574-631-5555',
  siteEmail: 'example@nd.edu',
  currentYear: 2025,
};

// Example with parent links but no social media
export const WithParentLinks = (args) => {
  return Footer(args);
};
WithParentLinks.args = {
  siteName: 'Department of Example',
  footerParent: 'College of Science',
  footerParentLink: 'https://science.nd.edu/',
  siteAddress: '100 Main Building',
  sitePhone: '574-631-5555',
  currentYear: 2025,
};

// Example with social media but minimal other info
export const WithSocialMedia = (args) => {
  return Footer(args);
};
WithSocialMedia.args = {
  siteName: 'Department of Example',
  siteFacebook: 'https://www.facebook.com/notredame/',
  siteTwitter: 'https://twitter.com/NotreDame/',
  siteInstagram: 'https://www.instagram.com/notredame/',
  currentYear: 2025,
};
