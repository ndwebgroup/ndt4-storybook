import { createStoryElement } from '../utils';
import Accordion from './Accordion.js';

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
    summaryOne: { name: 'Summary One'},
    summaryTwo: { name: 'Summary Two'},
    summaryThree: { name: 'Summary Three'},
    detailOne: { name: 'Detail One'},
    detailTwo: { name: 'Detail Two'},
    detailThree: { name: 'Detail Three'},
  },
  args: {
    // Default args for all stories
    variant: 'default',
    transparent: true,
    summaryOne: 'Summary Number One',
    detailOne: 'Details for Summary Number One. Euismod donec id elit non mi porta gravida at eget metus. Malesuada porta etiam porta sem malesuada magna mollis euismod.',
    summaryTwo: 'Summary Number Two',
    detailTwo: 'Details for Summary Number One. Euismod donec id elit non mi porta gravida at eget metus. Malesuada porta etiam porta sem malesuada magna mollis euismod.',
    summaryThree: 'Summary Number Three',
    detailThree: 'Details for Summary Number One. Euismod donec id elit non mi porta gravida at eget metus. Malesuada porta etiam porta sem malesuada magna mollis euismod.',
  },
};

export const Default = (args) => {
  const mergedArgs = { ...args };
  return Accordion(mergedArgs);
};
Default.storyName = 'Default Accordion';
Default.args = {
};

export const Highlighted = (args) => {
  const mergedArgs = { ...args };
  return Accordion(mergedArgs);
};
Highlighted.storyName = 'Highlighted Accordion';
Highlighted.args = {
  variant: 'highlight',
};

export const Large = (args) => {
  const mergedArgs = { ...args };
  return Accordion(mergedArgs);
};
Large.storyName = 'Large Accordion';
Large.args = {
  variant: 'large',
};