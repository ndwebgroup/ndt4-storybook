import PeopleLanding from './PeopleLanding.js';

export default {
  title: 'Templates/People Landing Page',
  component: PeopleLanding,
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    profileImage: {
      name: 'Profile Image',
      description: 'Whether to show the profile image in the hero section',
      control: 'boolean'
    },
    personName: {
      name: 'Person Name',
      description: 'Name of the person featured on the page',
      control: 'text',
    },
    personTitle: {
      name: 'Person Title',
      description: 'Title of the person featured on the page',
      control: 'text',
    },
    personCopy: {
      name: 'Person Copy',
      description: 'HTML content for the main area about the person',
      control: 'text',
    },
    personBiography: {
      name: 'Person Biography',
      description: 'Biography content for the person',
      control: 'text',
    },
    personResearch: {
      name: 'Person Research',
      description: 'Research content for the person',
      control: 'text',
    },
    personEducation: {
      name: 'Person Education',
      description: 'Education content for the person',
      control: 'text',
    },
    navTop: {
      name: 'Navigation Top',
      description: 'If true, navigation is at the top of the page',
      control: 'boolean'
    },
  },
  args: {
    personName: 'John Smith',
    personTitle: 'Chief Example Officer',
    profileImage: true,
    navTop: false,
    personCopy: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,
    personBiography: `<p>John Smith has over 20 years of experience in the field of examples. He has worked on numerous high-profile projects and has been recognized for his contributions to the industry.</p>`,
    personResearch: `<ul><li>Research Topic 1</li><li>Research Topic 2</li><li>Research Topic 3</li></ul>`,
    personEducation: `<p>John holds a Ph.D. in Example Studies from Example University and a Master's degree in Exemplary Practices from Sample College.</p>`,
  },
  decorators: [
    (Story) => {
      const result = Story();
      return `${result}`;
    }
  ],

};

const Template = (args) => {
  return PeopleLanding(args);
};

export const Default = Template.bind({});
Default.args = {
  // Basic example uses the default args
};
