import CtaCard from './CtaCard.js';

export default {
  title: 'Components/Cards/Card (CTA)',
  tags: ['coming'],
  argTypes: {
    label: { name: 'Label', control: 'text' },
    title: { name: 'Title', control: 'text' },
    summary: { name: 'Summary', control: 'text' },
    link: { name: 'Link', control: 'text' },
    backgroundColor: {
      name: 'Background Color',
      control: { type: 'select' },
      options: ['brand-blue', 'brand-blue-dark', 'warm-white', 'sky-blue-light', 'white'],
    },
    headingTag: {
      name: 'Heading Tag',
      control: { type: 'select' },
      options: ['h2', 'h3', 'h4', 'p'],
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'The CTA Card is a text-only call to action — more prominent than a button, leaner than an image card. The entire card is a link; a circled arrow fills on hover. Dark and light background variants adapt automatically.'
      }
    },
  },
  args: {
    label: 'Undergraduate Admissions',
    title: 'Begin your Notre Dame story',
    summary: 'Applications for fall 2027 open August 1. Explore requirements, deadlines, and aid.',
    link: '#',
    backgroundColor: 'brand-blue',
    headingTag: 'h2',
  }
};

export const Primary = (args) => {
  return CtaCard(args);
};
Primary.args = {
};

export const Light = (args) => {
  return CtaCard(args);
};
Light.args = {
  backgroundColor: 'warm-white',
};

export const NoSummary = (args) => {
  return CtaCard(args);
};
NoSummary.args = {
  summary: '',
};
