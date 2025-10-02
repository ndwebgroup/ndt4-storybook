import Button from './Button.js';

export default {
  title: 'Components/Buttons/Button',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: [
          'Component Name helps users take a primary action. Use it for the most important calls to action on a page.',
          'Common uses include forms, dialogs, and page level actions.',
        ].join('\n'),
      }
    },
  },
  argTypes: {
    label: {
      name:'Button Label',
    },
    href: {
      name:'Button Link',
    },
    type: { 
      name: 'Button Type',
      control: 'select', 
      options: ['primary', 'secondary', 'tertiary', 'neutral']
    },
    cta: { 
      name: 'Call to Action', 
    },
    more: { 
      name: 'More Icon'
    },
  },
  args: {
    // Default args for all stories
    label: 'Button',
    href:'#',
  }
};

export const Default = (args) => {
  return Button(args);
};
Default.storyName = 'Single Button';
Default.args = {
  type: 'primary',
  cta: false,
  more: false,
};

// Default Buttons
export const DefaultButtons = (args) => {
  const container = document.createElement('div');
  const types = ['primary', 'secondary', 'tertiary', 'neutral'];

  types.forEach(type => {
    const buttonProps = { ...args, type };
    const button = Button(buttonProps);
    container.appendChild(button);
    container.appendChild(document.createTextNode('\n  ')); // Add space between buttons
  });

  return container;
};
DefaultButtons.storyName = 'Default Buttons';
DefaultButtons.args = {
  cta: false,
  type: 'primary',
  more: false,
};

// Buttons with CTA
export const CTA = (args) => {
  const container = document.createElement('div');
  const types = ['primary', 'secondary', 'tertiary', 'neutral'];

  types.forEach(type => {
    const buttonProps = { ...args, type };
    const button = Button(buttonProps);
    container.appendChild(button);
    container.appendChild(document.createTextNode('\n  ')); // Add space between buttons
  });

  return container;
};
CTA.storyName = 'CTA Buttons';
CTA.args = {
  cta: true,
  type: 'primary',
  more: false,
};

// Buttons with More Icon
export const More = (args) => {
  const container = document.createElement('div');
  const types = ['primary', 'secondary', 'tertiary', 'neutral'];

  types.forEach(type => {
    const buttonProps = { ...args, type };
    const button = Button(buttonProps);
    container.appendChild(button);
    container.appendChild(document.createTextNode('\n  ')); // Add space between buttons
  });

  return container;
};
More.storyName = 'More Buttons';
More.args = {
  cta: false,
  type: 'primary',
  more: true,
};

// Buttons with More Icon and CTA
export const MoreCTA = (args) => {
  const container = document.createElement('div');
  const types = ['primary', 'secondary', 'tertiary', 'neutral'];

  types.forEach(type => {
    const buttonProps = { ...args, type };
    const button = Button(buttonProps);
    container.appendChild(button);
    container.appendChild(document.createTextNode('\n  ')); // Add space between buttons
  });

  return container;
};
MoreCTA.storyName = 'CTA More Buttons';
MoreCTA.args = {
  cta: true,
  type: 'primary',
  more: true,
};
