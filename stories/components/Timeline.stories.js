import { createStoryElement } from '../utils';
import Timeline from './Timeline.js';

export default {
  title: 'Components/Timeline',
  tags: ['autodocs'],
  argTypes: {
    layout: { name: 'Timeline Layout', control:'select', options:['left','right','center']},
    items: {
      title: 'Radio Group Items',
      description: 'Array of timeline items. Each item should have a title, date, and description property.',
      control: 'object'
    },
  },
  args: {
    // Default args for all stories
    layout:'left',
  },
};

const exampleItems = [
  { title:'Timeline Item', date:'November 2, 2023', description:'Litora volutpat a ad fermentum scelerisque parturient egestas vestibulum a malesuada ut turpis vestibulum ullamcorper vehicula torquent viverra.' },
  { title:'Timeline Item', date:'November 2, 2023', description:'Litora volutpat a ad fermentum scelerisque parturient egestas vestibulum a malesuada ut turpis vestibulum ullamcorper vehicula torquent viverra.' },
  { title:'Timeline Item', date:'November 2, 2023', description:'Litora volutpat a ad fermentum scelerisque parturient egestas vestibulum a malesuada ut turpis vestibulum ullamcorper vehicula torquent viverra.' },
];

export const Default = (args) => {
  return Timeline(args);
};
Default.storyName = 'Default Timeline';
Default.args = {
  items: exampleItems,
};