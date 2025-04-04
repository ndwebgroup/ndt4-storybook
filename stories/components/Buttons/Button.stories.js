import Button from './Button.js';

export default {
  title: 'Components/Buttons/Button',
  tags: ['autodocs'],
  argTypes: {
    label: {
      name:'Button Label',
    },
    state: { 
      name: 'Button State',
      control: 'select', 
      options: ['default', 'cta'] 
    },
    type: { 
      name: 'Button Type',
      control: 'select', 
      options: ['primary', 'secondary', 'tertiary', 'neutral']
    },
    moreIcon: { 
      name: 'Show More Icon'
    },
  },
  args: {
    // Default args for all stories
    label: 'Button',
  }
};

export const Default = (args) => {
  return Button(args);
};
Default.storyName = 'Default Buttons';
Default.args = {
  state: 'default',
  type: 'primary',
  moreIcon: false,
};

export const Base = (args) => {
  const container = document.createElement('div');
  const types = ['primary', 'secondary', 'tertiary', 'neutral'];

  types.forEach(type => {
    const buttonProps = { ...args, type };
    const button = Button(buttonProps);
    container.appendChild(button);
    container.appendChild(document.createTextNode(' ')); // Add space between buttons
  });

  return container;
};
Base.storyName = 'Base Buttons';
Base.args = {
  state: 'default',
  type: 'primary',
  moreIcon: false,
};

export const CTA = (args) => {
  const container = document.createElement('div');
  const types = ['primary', 'secondary', 'tertiary', 'neutral'];

  types.forEach(type => {
    const buttonProps = { ...args, type };
    const button = Button(buttonProps);
    container.appendChild(button);
    container.appendChild(document.createTextNode(' ')); // Add space between buttons
  });

  return container;
};
CTA.storyName = 'CTA Buttons';
CTA.args = {
  state: 'cta',
  type: 'primary',
  moreIcon: false,
};

export const More = (args) => {
  const container = document.createElement('div');
  const types = ['primary', 'secondary', 'tertiary', 'neutral'];

  types.forEach(type => {
    const buttonProps = { ...args, type };
    const button = Button(buttonProps);
    container.appendChild(button);
    container.appendChild(document.createTextNode(' ')); // Add space between buttons
  });

  return container;
};
More.storyName = 'More Buttons';
More.args = {
  state: 'default',
  type: 'primary',
  moreIcon: true,
};

export const MoreCTA = (args) => {
  const container = document.createElement('div');
  const types = ['primary', 'secondary', 'tertiary', 'neutral'];

  types.forEach(type => {
    const buttonProps = { ...args, type };
    const button = Button(buttonProps);
    container.appendChild(button);
    container.appendChild(document.createTextNode(' ')); // Add space between buttons
  });

  return container;
};
MoreCTA.storyName = 'CTA More Buttons';
MoreCTA.args = {
  state: 'cta',
  type: 'primary',
  moreIcon: true,
};
