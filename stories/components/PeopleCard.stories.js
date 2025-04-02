import PeopleCard from './PeopleCard.js';

export default {
  title: 'Components/People Card',
  tags: ['autodocs'],
  argTypes: {
    summary: { name:'Card Summary',},
    placeholder: { name:'Placeholder Image',},
    name: { name:'Person Name',},
    title: { name:'Person Title',},
  },
  args: {
    placeholder: false,
    name: 'John Doe',
    title: 'Person title',
    summary: 'Hendrerit in quis venenatis aliquet venenatis scelerisque in ipsum parturient congue vulputate convallis ultricies at.',
  }
};

export const Primary = (args) => {
  return PeopleCard(args);
};
Primary.args = {
};

export const Secondary = (args) => {
  return PeopleCard(args);
};
Secondary.args = {
  placeholder:true,
};