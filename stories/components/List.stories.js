import List from './List.js';

export default {
  title: 'Components/List',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'List component for displaying various types of lists: unordered, ordered, unstyled, inline, and description lists.'
      }
    }
  },
  argTypes: {
    type: {
      description: 'The type of list to display',
      control: 'select',
      options: ['unordered', 'ordered', 'unstyled', 'inline', 'description']
    },
    items: {
      description: 'Array of list items. For description lists, these are the terms.',
      control: 'object'
    },
    descriptions: {
      description: 'Array of descriptions (only used for description lists)',
      control: 'object'
    },
    className: {
      description: 'Additional CSS class names to add to the list',
      control: 'text'
    }
  }
};

// Example items for standard lists
const exampleItems = [
  'First list item with some longer text to demonstrate wrapping',
  'Second list item',
  'Third list item',
  'Fourth list item with <a href="#">a link</a> embedded in it'
];

// Example terms and descriptions for description lists
const exampleTerms = [
  'HTML',
  'CSS',
  'JavaScript',
  'Accessibility'
];

const exampleDescriptions = [
  'HyperText Markup Language is the standard markup language for documents designed to be displayed in a web browser.',
  'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in HTML.',
  'A programming language that enables interactive web pages and is an essential part of web applications.',
  'The practice of making websites usable by people with all abilities and disabilities.'
];

export const Unordered = (args) => {
  return List(args);
};

Unordered.args = {
  type: 'unordered',
  items: exampleItems
};

Unordered.storyName = 'Unordered List';
Unordered.parameters = {
  docs: {
    description: {
      story: 'An unordered list (`<ul>`) is used when the order of items does not matter. Items are typically displayed with bullet points.'
    }
  }
};

export const Ordered = (args) => {
  return List(args);
};

Ordered.args = {
  type: 'ordered',
  items: exampleItems
};

Ordered.storyName = 'Ordered List';
Ordered.parameters = {
  docs: {
    description: {
      story: 'An ordered list (`<ol>`) is used when the sequence of items matters. Items are typically displayed with sequential numbers.'
    }
  }
};

export const Unstyled = (args) => {
  return List(args);
};

Unstyled.storyName = 'Unstyled List';
Unstyled.args = {
  type: 'unstyled',
  items: exampleItems
};

Unstyled.parameters = {
  docs: {
    description: {
      story: 'An unstyled list uses the `<ul class="list--unstyled">` element but removes bullets and left padding for a cleaner appearance when styling is not needed.'
    }
  }
};

export const Inline = (args) => {
  return List(args);
};

Inline.storyName = 'Inline List';
Inline.args = {
  type: 'inline',
  items: ['Home', 'About', 'Services', 'Contact']
};

Inline.parameters = {
  docs: {
    description: {
      story: 'An inline list `<ul class="list--inline">` displays list items horizontally rather than vertically. Useful for groups of buttons, tags, etc.'
    }
  }
};

export const Description = (args) => {
  return List(args);
};

Description.storyName = 'Description List';
Description.args = {
  type: 'description',
  items: exampleTerms,
  descriptions: exampleDescriptions
};

Description.parameters = {
  docs: {
    description: {
      story: 'A description list (`<dl>`) consists of term-description pairs. Each term (`<dt>`) is followed by its description (`<dd>`). Common uses for this element are implementing a glossary or displaying meta data (a list of key-value pairs). FAQ pages are another use case.'
    }
  }
};

export const GridDescription = (args) => {
  return List(args);
};

GridDescription.storyName = 'Description List (Grid)';
GridDescription.args = {
  type: 'description',
  items: exampleTerms,
  descriptions: exampleDescriptions,
  className: 'list--grid'
};

GridDescription.parameters = {
  docs: {
    description: {
      story: 'A grid-style description list uses the `list--grid` class to display terms and descriptions in a responsive grid layout. This provides a more compact and structured appearance for term-description pairs, especially useful for displaying metadata or specifications.'
    }
  }
};

// HTML Details/Summary Example
export const DetailsSummary = () => `
  <details>
    <summary>More Information</summary>
    <ul>
      <li>This is a native HTML <code>&lt;details&gt;</code> element.</li>
      <li>Click the summary to expand or collapse the content.</li>
      <li>Useful for progressive disclosure.</li>
    </ul>
  </details>
  <details>
    <summary>Another Item with Details</summary>
    <p>Aut minima architecto reiciendis cupiditate est aut nobis explicabo alias excepturi doloremque enim quia hic sit. Esse tempore rerum natus consequuntur facere deleniti eum odit enim dolorem fugit illo molestiae dolores illum.</p>
  </details>
`;

DetailsSummary.storyName = 'Details/Summary';
DetailsSummary.parameters = {
  docs: {
    description: {
      story: 'The native HTML <code>&lt;details&gt;</code> and <code>&lt;summary&gt;</code> elements provide a built-in way to show and hide content. They are accessible and require no JavaScript for basic functionality.'
    }
  }
};