import SectionTitle from './SectionTitle.js';

export default {
  title: 'Components/Section Title',
  tags: ['stable'],
  component: SectionTitle,
  parameters: {
    docs: {
      description: {
        component: 'The Section Title component is used to display the heading of a section within a page.'
      }
    },
  },
  argTypes: {
    title: {
      name: 'Title Text',
      control: 'text',
      description: 'The text content of the section title',
    },
    size: {
      name: 'Size',
      control: { type: 'select', labels: { '': 'Default' } },
      options: ['xs', 'sm', '', 'lg', 'xl', 'display'],
      description: 'The size of the section title',
    },
    headingTag: {
      name: 'Heading Tag',
      control: { type: 'select' },
      options: ['h2', 'h3', 'h4', 'p'],
      description: 'The element used for the title. Choose based on the page outline, not appearance.',
    },
  },
  args: {
    title: 'Section Title',
    size: '',
    headingTag: 'h2',
  },
};

export const Default = (args) => {
  return SectionTitle(args);
};
Default.args = {
};

export const ExtraSmallSectionTitle = (args) => {
  return SectionTitle(args);
};
ExtraSmallSectionTitle.args = {
  size: 'xs',
};

export const SmallSectionTitle = (args) => {
  return SectionTitle(args);
};
SmallSectionTitle.args = {
  size: 'sm',
};

export const LargeSectionTitle = (args) => {
  return SectionTitle(args);
};
LargeSectionTitle.args = {
  size: 'lg',
};

export const ExtraLargeSectionTitle = (args) => {
  return SectionTitle(args);
};
ExtraLargeSectionTitle.args = {
  size: 'xl',
};

export const ParagraphStyleSectionTitle = (args) => {
  return SectionTitle(args);
};
ParagraphStyleSectionTitle.args = {
  headingTag: 'p',
};
