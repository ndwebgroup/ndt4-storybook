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
      options: ['unordered', 'ordered', 'no-bullets', 'list-inline', 'description']
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

Unstyled.args = {
  type: 'unstyled',
  items: exampleItems
};

Unstyled.parameters = {
  docs: {
    description: {
      story: 'An unstyled list uses the `<ul>` element but removes bullets and left padding for a cleaner appearance when styling is not needed.'
    }
  }
};

export const Inline = (args) => {
  return List(args);
};

Inline.args = {
  type: 'inline',
  items: ['Home', 'About', 'Services', 'Contact']
};

Inline.parameters = {
  docs: {
    description: {
      story: 'An inline list displays list items horizontally rather than vertically. Useful for navigation menus, tags, etc.'
    }
  }
};

export const Description = (args) => {
  return List(args);
};

Description.args = {
  type: 'description',
  items: exampleTerms,
  descriptions: exampleDescriptions
};

Description.parameters = {
  docs: {
    description: {
      story: 'A description list (`<dl>`) consists of term-description pairs. Each term (`<dt>`) is followed by its description (`<dd>`). Useful for dictionaries, metadata, FAQ sections, etc.'
    }
  }
};