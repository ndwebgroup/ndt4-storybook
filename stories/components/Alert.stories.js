import Alert from './Alert.js';

export default {
  title: 'Components/Alert',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Alerts provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.'
      }
    }
  },
  argTypes: {
    variant: {
      name: 'Variant',
      description: 'The style variant of the alert',
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'danger', 'warning', 'info']
    },
    icon: {
      name: 'Icon',
      description: 'Optional icon to display in the alert',
      control: 'text'
    },
    content: {
      name: 'Text',
      description: 'The content of the alert. Use {link} as a placeholder for the link if hasLink is true.',
      control: 'text'
    },
    hasLink: {
      name: 'Link',
      description: 'Whether to include an example link in the alert',
      control: 'boolean'
    }
  }
};

// Basic content for examples
const basicContent = 'This is {link}. Give it a click if you like.';
const noLinkContent = 'This is an alert message with no link.';

export const Default = (args) => {
  return Alert(args);
};

Default.args = {
  variant: 'default',
  content: basicContent,
  hasLink: true
};

Default.parameters = {
  docs: {
    description: {
      story: 'Default alert style without an icon.'
    }
  }
};

export const DefaultWithIcon = (args) => {
  return Alert(args);
};

DefaultWithIcon.storyName = 'Default with Icon';
DefaultWithIcon.args = {
  variant: 'default',
  icon: 'flag',
  content: basicContent,
  hasLink: true
};

DefaultWithIcon.parameters = {
  docs: {
    description: {
      story: 'Default alert with an icon.'
    }
  }
};

export const Primary = (args) => {
  return Alert(args);
};

Primary.args = {
  variant: 'primary',
  icon: 'question',
  content: basicContent,
  hasLink: true
};

export const Secondary = (args) => {
  return Alert(args);
};

Secondary.args = {
  variant: 'secondary',
  icon: 'info',
  content: basicContent,
  hasLink: true
};

export const Success = (args) => {
  return Alert(args);
};

Success.args = {
  variant: 'success',
  icon: 'check',
  content: basicContent,
  hasLink: true
};

export const Danger = (args) => {
  return Alert(args);
};

Danger.args = {
  variant: 'danger',
  icon: 'exclamation',
  content: basicContent,
  hasLink: true
};

export const Warning = (args) => {
  return Alert(args);
};

Warning.args = {
  variant: 'warning',
  icon: 'prohibited',
  content: basicContent,
  hasLink: true
};

export const Info = (args) => {
  return Alert(args);
};

Info.args = {
  variant: 'info',
  icon: 'info',
  content: basicContent,
  hasLink: true
};

export const NoIcon = (args) => {
  return Alert(args);
};

NoIcon.storyName = 'Without Icon';
NoIcon.args = {
  variant: 'success',
  content: noLinkContent,
  hasLink: false
};

NoIcon.parameters = {
  docs: {
    description: {
      story: 'Alert without an icon, demonstrating that icons are optional.'
    }
  }
};