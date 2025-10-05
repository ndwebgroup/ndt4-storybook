import Notice from './Notice.js';

export default {
  title: 'Components/Notice',
  tags: ['stable'],
  parameters: {
    design: {
      name: "Figma Assets",
      allowFullscreen: true,
      type: "figma",
      url: "https://www.figma.com/design/oMHFAa6HK6xMGMtxPhOkLV/University-of-Notre-Dame---Web-Theme-4.0-Digital-Design-Guide?node-id=3327-22975",
    },
    docs: {
      description: {
        component: 'Notices provide contextual feedback messages for typical user actions with the handful of available and flexible notice messages.'
      }
    }
  },
  argTypes: {
    variant: {
      name: 'Variant',
      description: 'The style variant of the notice',
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'danger', 'warning', 'info']
    },
    icon: {
      name: 'Icon',
      description: 'Optional icon to display in the notice',
      control: 'text'
    },
    content: {
      name: 'Text',
      description: 'The content of the notice. Use {link} as a placeholder for the link if hasLink is true.',
      control: 'text'
    },
    hasLink: {
      name: 'Link',
      description: 'Whether to include an example link in the notice',
      control: 'boolean'
    }
  }
};

// Basic content for examples
const basicContent = 'This is {link}. Give it a click if you like.';
const noLinkContent = 'This is a notice message with no link.';

export const Default = (args) => {
  return Notice(args);
};

Default.args = {
  variant: 'default',
  content: basicContent,
  hasLink: true
};

Default.parameters = {
  docs: {
    description: {
      story: 'Default notice style without an icon.'
    }
  }
};

export const DefaultWithIcon = (args) => {
  return Notice(args);
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
      story: 'Default notice style with an icon.'
    }
  }
};

export const Primary = (args) => {
  return Notice(args);
};

Primary.args = {
  variant: 'primary',
  icon: 'question',
  content: basicContent,
  hasLink: true
};

export const Secondary = (args) => {
  return Notice(args);
};

Secondary.args = {
  variant: 'secondary',
  icon: 'info',
  content: basicContent,
  hasLink: true
};

export const Success = (args) => {
  return Notice(args);
};

Success.args = {
  variant: 'success',
  icon: 'check',
  content: basicContent,
  hasLink: true
};

export const Danger = (args) => {
  return Notice(args);
};

Danger.args = {
  variant: 'danger',
  icon: 'exclamation',
  content: basicContent,
  hasLink: true
};

export const Warning = (args) => {
  return Notice(args);
};

Warning.args = {
  variant: 'warning',
  icon: 'prohibited',
  content: basicContent,
  hasLink: true
};

export const Info = (args) => {
  return Notice(args);
};

Info.args = {
  variant: 'info',
  icon: 'info',
  content: basicContent,
  hasLink: true
};

export const NoIcon = (args) => {
  return Notice(args);
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
      story: 'Notice without an icon, demonstrating that icons are optional.'
    }
  }
};