import Headings from './Headings';

export default {
  title: 'Components/Headings',
  tags: ['autodocs'],
  component: Headings,
  parameters: {
    docs: {
      description: {
        component: `
# Heading Elements (h1-h6)

Headings create clear hierarchical structure for page content. They help with both readability and accessibility.

## Heading Classes

You can also use the corresponding class (e.g., \`.h3\`) to make any element look like a heading.
This is useful when the HTML structure requires a different heading level for semantic reasons,
but visually you want it to match a different heading style.

**Note:** Using heading classes doesn't change the semantic meaning of an element.
For accessibility reasons, use actual heading elements (h1-h6) for page structure when possible.
        `,
      },
    },
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'The text content of the heading',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the heading',
    },
    useClass: {
      control: 'boolean',
      description: 'Whether to use a p tag with heading class instead of actual heading element',
    },
  },
};

// Group 1: All headings using the actual heading tags
export const AllHeadings = {
  render: () => {
    const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map(level => {
      return Headings({
        level,
        text: `This is a ${level} heading`,
        useClass: false
      });
    }).join('\n');

    return headings;
  },
};

// Group 2: All headings using paragraph with heading classes
export const HeadingClasses = {
  render: () => {
    const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map(level => {
      return Headings({
        level,
        text: `This is a paragraph with class ".${level}"`,
        useClass: true
      });
    }).join('\n');

    return headings;
  },
};

// Individual heading examples
export const Heading1 = {
  args: {
    level: 'h1',
    text: 'Heading Level 1',
    useClass: false,
  },
};

export const Heading2 = {
  args: {
    level: 'h2',
    text: 'Heading Level 2',
    useClass: false,
  },
};

export const Heading3 = {
  args: {
    level: 'h3',
    text: 'Heading Level 3',
    useClass: false,
  },
};

export const Heading4 = {
  args: {
    level: 'h4',
    text: 'Heading Level 4',
    useClass: false,
  },
};

export const Heading5 = {
  args: {
    level: 'h5',
    text: 'Heading Level 5',
    useClass: false,
  },
};

export const Heading6 = {
  args: {
    level: 'h6',
    text: 'Heading Level 6',
    useClass: false,
  },
};

// Examples of heading classes applied to non-heading elements
export const HeadingClassOnParagraph = {
  args: {
    level: 'h2',
    text: 'This is a paragraph that looks like an h2',
    useClass: true,
  },
};

// Example with additional class
export const HeadingWithAdditionalClass = {
  args: {
    level: 'h3',
    text: 'Heading with additional class',
    className: 'text-center margin-top',
    useClass: false,
  },
};