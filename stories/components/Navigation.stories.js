import Navigation from './Navigation.js';

export default {
  title: 'Components/Navigation',
  tags: ['autodocs'],
  argTypes: {
    currentPage: {
      name: 'Current Page',
      control: 'number',
      description: 'The current active page number'
    },
    totalPages: {
      name: 'Total Pages',
      control: 'number',
      description: 'The total number of pages'
    },
    baseUrl: {
      name: 'Base URL',
      control: 'text',
      description: 'The base URL for pagination links'
    },
    showEllipsis: {
      name: 'Show Ellipsis',
      control: 'boolean',
      description: 'Whether to show ellipsis for large page ranges'
    },
    displayRange: {
      name: 'Display Range',
      control: 'number',
      description: 'Number of page links to display around current page'
    }
  },
  args: {
    currentPage: 1,
    totalPages: 38,
    baseUrl: '#',
    showEllipsis: true,
    displayRange: 2
  }
};

export const Default = (args) => {
  return Navigation(args);
};

export const CurrentPageInMiddle = (args) => {
  return Navigation(args);
};
CurrentPageInMiddle.args = {
  currentPage: 5,
  totalPages: 38
};

export const LastPage = (args) => {
  return Navigation(args);
};
LastPage.args = {
  currentPage: 38,
  totalPages: 38
};

export const SinglePage = (args) => {
  return Navigation(args);
};
SinglePage.args = {
  currentPage: 1,
  totalPages: 1
};

export const FewPages = (args) => {
  return Navigation(args);
};
FewPages.args = {
  currentPage: 2,
  totalPages: 5,
  showEllipsis: false
};

export const NoEllipsis = (args) => {
  return Navigation(args);
};
NoEllipsis.args = {
  currentPage: 10,
  totalPages: 38,
  showEllipsis: false
};

export const LargerDisplayRange = (args) => {
  return Navigation(args);
};
LargerDisplayRange.args = {
  currentPage: 10,
  totalPages: 38,
  displayRange: 4
};