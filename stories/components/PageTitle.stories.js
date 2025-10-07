import PageTitle from './PageTitle.js';

export default {
  title: 'Components/Page Title',
  tags: ['stable'],
  component: PageTitle,
  argTypes: {
    title: {
      control: 'text',
      description: 'The text content of the page title',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'The size of the page title',
      defaultValue: 'md',
    },
    useParagraph: {
      control: 'boolean',
      description: 'Whether to use a p tag with page title class instead of actual h1 element',
      defaultValue: false,
    },
  },
  args: {
    title: 'Page Title',
    useParagraph: false,
  },
};

export const Default = (args) => {
  return PageTitle(args);
};
Default.args = {
};

export const ExtraSmallPageTitle = (args) => {
  return PageTitle(args);
};
ExtraSmallPageTitle.args = {
  size: 'xs',
};

export const SmallPageTitle = (args) => {
  return PageTitle(args);
};
SmallPageTitle.args = {
  size: 'sm',
};

export const MediumPageTitle = (args) => {
  return PageTitle(args);
};
MediumPageTitle.args = {
  size: 'md',
};

export const LargePageTitle = (args) => {
  return PageTitle(args);
};
LargePageTitle.args = {
  size: 'lg',
};

export const ExtraLargePageTitle = (args) => {
  return PageTitle(args);
};
ExtraLargePageTitle.args = {
  size: 'xl',
};
export const ParagraphStylePageTitle = (args) => {
  return PageTitle(args);
};
ParagraphStylePageTitle.args = {
  useParagraph: true,
};