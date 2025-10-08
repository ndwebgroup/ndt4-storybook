import Accordion from './Accordion';

export default {
  title: 'Components/Accordion',
  tags: ['stable'],
  parameters: {
    design: {
      name: "Figma Assets",
      allowFullscreen: true,
      type: "figma",
      url: "https://www.figma.com/design/oMHFAa6HK6xMGMtxPhOkLV/University-of-Notre-Dame---Web-Theme-4.0-Digital-Design-Guide?node-id=3217-3286",
    },
    docs: {
      description: {
        component: 'The `<details>` element is a way to toggle the visibility of content. When closed, only the `<summary>` element is visible. When expanded, all content is visible. FAQ pages are one example where a list of `<details>` may be appropriate.'
      }
    }
  },
  argTypes: {
    variant: { name:'Variant', control: 'select', options: ['default', 'lg', 'highlight'] },
    items: {
      name: 'List Items',
      description: 'Array of detail/summary items. Each item should have a summary and detail property.',
      control: 'object'
    },
  },
  args: {
    // Default args for all stories
    variant: 'default',
  },
};

const exampleItems = [
  { summary:'Summary One', detail:'Litora volutpat a ad fermentum scelerisque parturient egestas vestibulum a malesuada ut turpis vestibulum ullamcorper vehicula torquent viverra.' },
  { summary:'Summary Two', detail:'Litora volutpat a ad fermentum scelerisque parturient egestas vestibulum a malesuada ut turpis vestibulum ullamcorper vehicula torquent viverra.' },
  { summary:'Summary Three', detail:'Litora volutpat a ad fermentum scelerisque parturient egestas vestibulum a malesuada ut turpis vestibulum ullamcorper vehicula torquent viverra.' },
];

export const Default = (args) => {
  const mergedArgs = { ...args };
  return Accordion(mergedArgs);
};
Default.storyName = 'Default Accordion';
Default.args = {
  items: exampleItems,
};

export const Highlighted = (args) => {
  const mergedArgs = { ...args };
  return Accordion(mergedArgs);
};
Highlighted.storyName = 'Highlighted Accordion';
Highlighted.args = {
  variant: 'highlight',
  items: exampleItems,
};

export const Large = (args) => {
  const mergedArgs = { ...args };
  return Accordion(mergedArgs);
};
Large.storyName = 'Large Accordion';
Large.args = {
  variant: 'lg',
  items: exampleItems,
};

export const LargeHighlighted = (args) => {
  const mergedArgs = { ...args };
  return Accordion(mergedArgs);
};
LargeHighlighted.storyName = 'Large Highlighted Accordion';
LargeHighlighted.args = {
  variant: 'lg accordion--highlight',
  items: exampleItems,
};