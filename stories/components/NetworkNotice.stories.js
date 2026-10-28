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
    showMark: { name: 'Show ND Mark', control: 'boolean' },
    urgent: { name: 'Urgent', control: 'boolean', description: 'Urgent styling and role="alert"' },
    dismissible: { name: 'Dismissible', control: 'boolean' },
    noticeLocation: { name: 'Notice Location', control:'select', options:['global', 'local']}
  },
  args: {
    message: 'This is an important notice. <a href="#">See more here</a>',
    showMark: true,
    urgent: false,
    dismissible: true,
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
}