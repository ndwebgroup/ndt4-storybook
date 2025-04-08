import Accordion from './Accordion';

export default {
  title: 'Components/Accordion',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The &lt;details&gt; element is a way to toggle the visibility of content. When closed, only the <summary> element is visible. When expanded, all content is visible. FAQ pages are one example where a list of &lt;details&gt; may be appropriate.'
      }
    }
  },
  argTypes: {
    variant: { name:'Variant', control: 'select', options: ['default', 'large', 'highlight'] },
    items: {
      title: 'List Items',
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
  variant: 'large',
  items: exampleItems,
};