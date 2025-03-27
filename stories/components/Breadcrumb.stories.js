import Breadcrumb from './Breadcrumb.js';

export default {
  title: 'Components/Breadcrumb',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Breadcrumbs indicate the current page\'s location within a navigational hierarchy and help users understand where they are in the website\'s structure.'
      }
    }
  },
  argTypes: {
    items: {
      name: 'Breadcrumb Items',
      description: 'Array of breadcrumb items. Each item should have a text property and, except for the last item, an href property.',
      control: 'object'
    }
  }
};

// Example breadcrumb items
const exampleItems = [
  { text: 'Home', href: '/' },
  { text: 'Documentation', href: '/documentation/' },
  { text: 'Page Title' }
];

export const Default = (args) => {
  return Breadcrumb(args);
};

Default.args = {
  items: exampleItems
};

Default.parameters = {
  docs: {
    description: {
      story: 'Standard breadcrumb navigation that shows the path from the homepage to the current page. The last item is not linked as it represents the current page.'
    }
  }
};

export const LongPath = (args) => {
  return Breadcrumb(args);
};

LongPath.storyName = 'Long Navigation Path';
LongPath.args = {
  items: [
    { text: 'Home', href: '/' },
    { text: 'Documentation', href: '/documentation/' },
    { text: 'Components', href: '/documentation/components/' },
    { text: 'Navigation', href: '/documentation/components/navigation/' },
    { text: 'Breadcrumbs' }
  ]
};

LongPath.parameters = {
  docs: {
    description: {
      story: 'Example of breadcrumbs with a deeper navigation hierarchy. For responsive design considerations, longer paths may need special handling on small screens.'
    }
  }
};