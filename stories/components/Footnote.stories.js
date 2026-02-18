import Footnote from './Footnote.js';

export default {
  title: 'Components/Footnote',
  tags: ['coming'],
  parameters: {
    design: {
      name: "Figma Assets",
      allowFullscreen: true,
      type: "figma",
      url: "https://www.figma.com/design/oMHFAa6HK6xMGMtxPhOkLV/University-of-Notre-Dame---Web-Theme-4.0-Digital-Design-Guide?node-id=969-2441",
    },
    docs: {
      description: {
        component: 'Footnote component for displaying various types of footnotes.'
      }
    }
  },
  argTypes: {
    items: {
      description: 'Array of footnote items.',
      control: 'object'
    }
  }
};

// Example items for standard lists
const exampleItems = [
  `University of Notre Dame, “About Notre Dame,” last modified July 15, 2024, <a href="https://www.nd.edu/about/">https://www.nd.edu/about/</a>.`, 
`Notre Dame Archives, “A Brief History of the University of Notre Dame,” updated March 11, 2023, <a href="https://archives.nd.edu/history.htm">https://archives.nd.edu/history.htm</a>.`,
`Hesburgh Libraries, University of Notre Dame, “Services and Resources,” accessed February 18, 2026, <a href="https://library.nd.edu/services/">https://library.nd.edu/services/</a>.`,
`Notre Dame Athletics, “Fighting Irish Football: History and Traditions,” updated August 20, 2025, <a href="https://fightingirish.com/history/">https://fightingirish.com/history/</a>.`
];

export const Default = (args) => {
  return Footnote(args);
};

Default.args = {
  items: exampleItems
};
