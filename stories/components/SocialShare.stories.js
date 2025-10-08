import SocialShare from './SocialShare';

export default {
  title: 'Components/SocialShare',
  tags: ['stable'],
  parameters: {
    design: {
      name: "Figma Assets",
      allowFullscreen: true,
      type: "figma",
      url: "https://www.figma.com/design/oMHFAa6HK6xMGMtxPhOkLV/University-of-Notre-Dame---Web-Theme-4.0-Digital-Design-Guide?node-id=3327-23046",
    },
    docs: {
      description: {
        component: 'Social share component allows users to easily share content on various platforms.'
      }
    },
  },
  argTypes: {
    url: {
      name: 'URL to Share',
      control: 'text',
      description: 'The URL to share (defaults to current page URL)'
    },
    title: {
      name: 'Title to Share',
      control: 'text',
      description: 'The title to share (defaults to current page title)'
    },
    showNative: {
      name: 'Show Native Share',
      control: 'boolean',
      description: 'Whether to show the native share button'
    },
    showFacebook: {
      name: 'Show Facebook',
      control: 'boolean',
      description: 'Whether to show Facebook share button'
    },
    showLinkedin: {
      name: 'Show LinkedIn',
      control: 'boolean',
      description: 'Whether to show LinkedIn share button'
    },
    showTwitter: {
      name: 'Show Twitter/X',
      control: 'boolean',
      description: 'Whether to show Twitter/X share button'
    },
    showEmail: {
      name: 'Show Email',
      control: 'boolean',
      description: 'Whether to show Email share button'
    },
    facebookAppId: {
      name: 'Facebook App ID',
      control: 'text',
      description: 'Facebook application ID for sharing'
    }
  },
  args: {
    url: 'https://news.nd.edu/news/the-commencement-of-the-class-of-2024/',
    title: 'The Commencement of the class of 2024',
    showNative: true,
    showFacebook: true,
    showLinkedin: true,
    showTwitter: true,
    showEmail: true,
    facebookAppId: '135465433914446'
  }
};

export const Default = (args) => {
  return SocialShare(args);
};

Default.parameters = {
  docs: {
    description: {
      story: 'Default social share component with all sharing options enabled.'
    }
  }
};

export const WithoutNative = (args) => {
  return SocialShare({
    ...args,
    showNative: false
  });
};

WithoutNative.storyName = 'Without Native Share';
WithoutNative.parameters = {
  docs: {
    description: {
      story: 'Social share component without the native share button, useful for browsers that do not support the Web Share API.'
    }
  }
};

export const SocialNetworksOnly = (args) => {
  return SocialShare({
    ...args,
    showNative: false,
    showEmail: false
  });
};

SocialNetworksOnly.storyName = 'Social Networks Only';
SocialNetworksOnly.parameters = {
  docs: {
    description: {
      story: 'Social share component with only social network options (Facebook, LinkedIn, Twitter/X).'
    }
  }
};

export const MinimalShare = (args) => {
  return SocialShare({
    ...args,
    showNative: true,
    showFacebook: false,
    showLinkedin: false,
    showTwitter: false,
    showEmail: false
  });
};

MinimalShare.storyName = 'Native Share Only';
MinimalShare.parameters = {
  docs: {
    description: {
      story: 'Minimal social share component with only the native share button.'
    }
  }
};

export const CustomURL = (args) => {
  return SocialShare({
    ...args,
    url: 'https://www.nd.edu/',
    title: 'University of Notre Dame'
  });
};

CustomURL.storyName = 'Custom URL and Title';
CustomURL.parameters = {
  docs: {
    description: {
      story: 'Social share component with custom URL and title to share.'
    }
  }
};
