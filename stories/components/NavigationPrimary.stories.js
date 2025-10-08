import NavigationPrimary, { defaultNavigationItems } from './NavigationPrimary.js';

export default {
  title: 'Components/Navigation (Primary)',
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
        component: 'The Primary Navigation component provides a simple and accessible way to create a navigation menu. It is designed to be used as part of the header or main navigation of a website.'
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
  return NavigationPrimary(args);
};

Default.args = {
  items: defaultNavigationItems
};
