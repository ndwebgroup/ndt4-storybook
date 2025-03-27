import { createStoryElement } from '../utils';
import Accordion from './Accordions.js';

export default {
  title: 'Components/Accordion',
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['default', 'large'] },
    summaryOne: { name: 'Summary One'},
    summaryTwo: { name: 'Summary Two'},
    summaryThree: { name: 'Summary Three'},
    detailOne: { name: 'Detail One'},
    detailTwo: { name: 'Detail Two'},
    detailThree: { name: 'Detail Three'},
  },
  parameters: {
    docs: {
      description: {
        component: 'Accordion component that can be used to show/hide content'
      }
    }
  }
};

// Default args for all stories
const defaultArgs = {
  summaryOne: 'Summary Number One',
  detailOne: 'Details for Summary Number One. Euismod donec id elit non mi porta gravida at eget metus. Malesuada porta etiam porta sem malesuada magna mollis euismod.',
  summaryTwo: 'Summary Number Two',
  detailTwo: 'Details for Summary Number One. Euismod donec id elit non mi porta gravida at eget metus. Malesuada porta etiam porta sem malesuada magna mollis euismod.',
  summaryThree: 'Summary Number Three',
  detailThree: 'Details for Summary Number One. Euismod donec id elit non mi porta gravida at eget metus. Malesuada porta etiam porta sem malesuada magna mollis euismod.',
};

export const Default = (args) => {
  const mergedArgs = { ...defaultArgs, ...args };
  return Accordion(mergedArgs);
};
Default.storyName = 'Default Accordion';
Default.args = {
  size: 'default',
};

export const Featured = (args) => {
  const mergedArgs = { ...defaultArgs, ...args };
  return Accordion(mergedArgs);
};
Featured.storyName = 'Featured Accordion';
Featured.args = {
  size: 'large',
};