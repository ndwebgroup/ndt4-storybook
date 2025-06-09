// import { createStoryElement } from '../utils';
import Timeline from './Timeline.js';

export default {
  title: 'Components/Timeline',
  tags: ['autodocs'],
  argTypes: {
    layout: { name: 'Timeline Layout', control:'select', options:['left','right','center']},
    items: {
      title: 'Timeline Items',
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
  { title:'Timeline Item', date:'November 2, 2023', image:'', description:'Litora volutpat a ad fermentum scelerisque parturient egestas vestibulum a malesuada ut turpis vestibulum ullamcorper vehicula torquent viverra.' },
  { title:'Timeline Item', date:'November 2, 2023', image:'', description:'Litora volutpat a ad fermentum scelerisque parturient egestas vestibulum a malesuada ut turpis vestibulum ullamcorper vehicula torquent viverra.' },
  { title:'Timeline Item', date:'November 2, 2023', image:'', description:'Litora volutpat a ad fermentum scelerisque parturient egestas vestibulum a malesuada ut turpis vestibulum ullamcorper vehicula torquent viverra.' },
];

const exampleItemsImages = [
  { title:'Timeline Item', date:'November 2, 2023', image:'<img src="/images/placeholder-campus-1-600x400.jpg" width="600" height="400" alt="">', description:'Litora volutpat a ad fermentum scelerisque parturient egestas vestibulum a malesuada ut turpis vestibulum ullamcorper vehicula torquent viverra.' },
  { title:'Timeline Item', date:'November 2, 2023', image:'<img src="/images/placeholder-campus-1-600x400.jpg" width="600" height="400" alt="">', description:'Litora volutpat a ad fermentum scelerisque parturient egestas vestibulum a malesuada ut turpis vestibulum ullamcorper vehicula torquent viverra.' },
  { title:'Timeline Item', date:'November 2, 2023', image:'<img src="/images/placeholder-campus-1-600x400.jpg" width="600" height="400" alt="">', description:'Litora volutpat a ad fermentum scelerisque parturient egestas vestibulum a malesuada ut turpis vestibulum ullamcorper vehicula torquent viverra.' },
];



export const Default = (args) => {
  return Timeline(args);
};
Default.storyName = 'Default Timeline';
Default.args = {
  items: exampleItems,
};

export const Right = (args) => {
  return Timeline(args);
};
Right.storyName = 'Right Aligned Timeline';
Right.args = {
  layout: 'right',
  items: exampleItems,
};

export const Center = (args) => {
  return Timeline(args);
};
Center.storyName = 'Center Aligned Timeline';
Center.args = {
  layout: 'center',
  items: exampleItems,
};

export const Images = (args) => {
  return Timeline(args);
};
Images.storyName = 'Timeline with Images';
Images.args = {
  items: exampleItemsImages,
};