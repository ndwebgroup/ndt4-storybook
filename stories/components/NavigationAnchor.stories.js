import NavigationAnchor, { defaultNavigationItems } from './NavigationAnchor.js';

export default {
  title: 'Components/Navigation (Anchor)',
  tags: ['stable'],
  parameters: {
    design: {
      name: "Figma Assets",
      allowFullscreen: true,
      type: "figma",
      url: "https://www.figma.com/design/oMHFAa6HK6xMGMtxPhOkLV/University-of-Notre-Dame---Web-Theme-4.0-Digital-Design-Guide?node-id=1663-12974",
    },
    docs: {
      description: {
        component: 'The anchor navigation component is used for in-page navigation, typically to jump to sections within a long page.'
      }
    }
  },
  argTypes: {
    items: {
      name: 'Navigation Items',
      description: 'Array of nav items. Each item should have label and url properties.',
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
      }
    }
  }
};

export const Default = (args) => {
  return NavigationAnchor(args);
};

Default.args = {
  items: defaultNavigationItems
};
