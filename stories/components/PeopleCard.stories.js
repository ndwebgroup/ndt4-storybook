import PeopleCard from './PeopleCard.js';

export default {
  title: 'Components/Cards/Card (People)',
  tags: ['autodocs'],
  argTypes: {
    summary: { name:'Card Summary',},
    placeholder: { name:'Placeholder Image',},
    name: { name:'Person Name',},
    title: { name:'Person Title',},
    layout: { name:'Layout Override', control: 'select', options: ['','horizontal','stacked','compact']},
    useDialog: { name:'Use Dialog', control: 'boolean' },
    email: { name:'Email Address' },
    website: { name:'Website URL' },
    phone: { name:'Phone Number' },
    mobile: { name:'Mobile Number' },
    fax: { name:'Fax Number' },
    street: { name:'Street Address' },
    content: { name:'Biographical Content' },
  },
  args: {
    placeholder: false,
    name: 'John Doe',
    title: 'Person title',
    summary: 'Hendrerit in quis venenatis aliquet venenatis scelerisque in ipsum parturient congue vulputate convallis ultricies at.',
    useDialog: false,
    email: '',
    website: '',
    phone: '',
    mobile: '',
    fax: '',
    street: '',
    content: '',
  }
};

export const Primary = (args) => {
  return PeopleCard(args);
};
Primary.args = {
};

export const Horizontal = (args) => {
  return PeopleCard(args);
};
Horizontal.args = {
  layout:'horizontal',
};

export const Stacked = (args) => {
  return PeopleCard(args);
};
Stacked.args = {
  layout:'stacked',
};

export const Compact = (args) => {
  return PeopleCard(args);
};
Compact.args = {
  layout:'compact',
};

export const WithDialog = (args) => {
  return PeopleCard(args);
};
WithDialog.args = {
  useDialog: true,
  email: 'johndoe@example.com',
  website: 'https://example.com',
  phone: '+1 555-123-4567',
  mobile: '+1 555-987-6543',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu erat quis urna fringilla ultrices. Duis eleifend leo id purus commodo, vitae aliquet nisi tincidunt. In tincidunt purus vel aliquet lobortis. Morbi feugiat tortor nec justo varius, non congue ante congue.',
};