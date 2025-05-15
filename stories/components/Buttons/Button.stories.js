import Button from './Button.js';

export default {
  title: 'Components/Buttons/Button',
  tags: ['autodocs'],
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
Default.storyName = 'Default Buttons';
Default.args = {
  type: 'primary',
  cta: false,
  more: false,
};

// Default Buttons
export const Base = (args) => {
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
Base.storyName = 'Base Buttons';
Base.args = {
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
