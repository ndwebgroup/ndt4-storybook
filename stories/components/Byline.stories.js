import Byline from './Byline';

export default {
  title: 'Components/Byline',
  parameters: {
    design: {
      name: "Figma Assets",
      allowFullscreen: true,
      type: "figma",
      url: "https://www.figma.com/design/oMHFAa6HK6xMGMtxPhOkLV/University-of-Notre-Dame---Web-Theme-4.0-Digital-Design-Guide?node-id=3299-1983",
    }
  },
  argTypes: {
    image: { name:'Image', control:'select', options:['image', 'placeholder', 'none']},
    name: { name:'Person Name',},
    title: { name:'Person Title',},
    link: { name:'Person Link'}
  },
  args: {
    // Default args for all stories
    image: 'image',
    name: 'Rev. Robert A. Dowd, C.S.C.',
    title: 'President of the University of Notre Dame',
    link:'#',
  }
};

export const Default = (args) => {
  return Byline(args);
};
Default.args = {
};

export const withPlaceholder = (args) => {
  return Byline(args);
};
withPlaceholder.args = {
  image:'placeholder',
};

export const withoutImage = (args) => {
  return Byline(args);
};
withoutImage.args = {
  image:'none',
};