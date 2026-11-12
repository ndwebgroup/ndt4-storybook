import NetworkNotice from './NetworkNotice.js';

export default {
  title: 'Components/Network Notice',
  component: NetworkNotice,
  tags: ['coming'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: {
        inline: false,
        iframeHeight: 320,
      },
    },
  },
  decorators: [
    (Story) => {
      const wrapper = document.createElement('div');
      wrapper.style.minHeight = '50vh';
      wrapper.innerHTML = `
  <div style="padding:2rem;">
    <p>Example page content — the notice is fixed to the bottom of the viewport.</p>
  </div>
  `;
      const result = Story();
      wrapper.appendChild(typeof result === 'string' ? document.createRange().createContextualFragment(result) : result);
      return wrapper;
    }
  ],
  argTypes: {
    message: { name: 'Message', control: 'text', description: 'Notice text (HTML allowed)' },
    noticeLocation: { name: 'Notice Location', control:'select', options:['global', 'local'], description: 'Global shows the academic mark (desktop only); local hides it and allows an icon'},
    urgent: { name: 'Urgent', control: 'boolean', description: 'Urgent styling and role="alert"' },
    dismissible: { name: 'Dismissible', control: 'boolean' },
    icon: { name: 'Icon', control: 'text', description: 'Optional icon name (local notices only), e.g. info, exclamation, flag', if: { arg: 'noticeLocation', eq: 'local' } },
  },
  args: {
    message: 'This is an important notice. <a href="#">See more here</a>',
    noticeLocation: 'global',
    urgent: false,
    dismissible: true,
    icon: '',
  }
};

const Template = (args) => {
  return NetworkNotice(args);
};

export const Default = Template.bind({});
Default.args = {
};

export const Urgent = Template.bind({});
Urgent.args = {
  message: 'Emergency: shelter in place until further notice. <a href="#">Live updates</a>',
  urgent: true,
  dismissible: false,
};

export const Local = Template.bind({});
Local.args = {
  noticeLocation: 'local',
};

export const LocalWithIcon = Template.bind({});
LocalWithIcon.args = {
  noticeLocation: 'local',
  icon: 'info',
};

export const LocalUrgentWithIcon = Template.bind({});
LocalUrgentWithIcon.args = {
  message: 'This building is closed today due to a power outage. <a href="#">Details</a>',
  noticeLocation: 'local',
  icon: 'exclamation',
  urgent: true,
  dismissible: false,
};