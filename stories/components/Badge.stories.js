import Badge from './Badge.js';

export default {
  title: 'Components/Badge',
  tags: ['autodocs'],
  argTypes: {
    placeholder: { name:'Placeholder Image',},
    name: { name:'Person Name',},
    title: { name:'Person Title',},
    link: { name:'Person Link'}
  },
  args: {
    // Default args for all stories
    placeholder: false,
    name: 'John Doe',
    title: 'Person title',
    link:'#',
  }
};

export const Primary = (args) => {
  return Badge(args);
};
Primary.args = {
};

export const Placeholder = (args) => {
  return Badge(args);
};
Placeholder.args = {
  placeholder:true,
};