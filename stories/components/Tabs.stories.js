import Tabs from './Tabs.js';

const tabsDecorator = (story) => {
  const tabsElement = story();

  // Create a wrapper div to hold both the tabs and the script
  const wrapper = document.createElement('div');

  // Append the tabs element to the wrapper
  wrapper.appendChild(tabsElement);

  // Create and append the script element
  const scriptElement = document.createElement('script');
  scriptElement.textContent = `
    document.addEventListener('DOMContentLoaded', function() {
      const tabSets = document.querySelectorAll('.nav-tabs');

      tabSets.forEach(wrapper => {
        const tabs = wrapper.querySelectorAll('.tab');
        const panels = wrapper.parentElement.querySelectorAll('.tab-panel');

        tabs.forEach((tab, index) => {
          tab.addEventListener('click', (e) => {
            e.preventDefault();
            tabs.forEach(t => t.classList.remove('active'));
            panels.forEach(p => p.hidden = true);

            tab.classList.add('active');
            panels[index].hidden = false;
          });
        });
      });
    });
  `;
  wrapper.appendChild(scriptElement);

  return wrapper;
};

export default {
  title: 'Components/Tabs',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Tabs description'
      }
    }
  },
  argTypes: {
    items: {
      name: 'Tab Items',
      description: 'Array of tabs. Each item should have a title property, a content property, and an optional modifier property.',
      control: 'object',
    },
    tabVariant: { name:"Tab Variant", control:'select', options:['default','lg'] }
  },
  args: {
  // Default args for stories
  },
  decorators: [tabsDecorator],
};

// Example stats items
const exampleItems = [
  { title: 'Tab 1', content: 'Porta vestibulum ullamcorper ac hac a himenaeos dui nisl a condimentum ligula lorem litora vulputate placerat vel class id lacinia consectetur adipiscing pretium vel dictum parturient parturient varius parturient elit.', },
  { title: 'Tab 2', content: 'Atque excepturi perspiciatis fugit natus quas. Minima totam ab enim amet animi blanditiis laborum officiis porro eaque illum dicta. In consequatur at molestiae omnis. Possimus voluptatem ullam vel esse dolor molestiae tempora iure dolore eligendi perferendis culpa magni qui beatae.', },
  { title: 'Tab 3', content: 'Sunt aliquam molestiae facere non nulla et non eum omnis est rerum suscipit ad. Exercitationem hic mollitia mollitia cupiditate rerum totam dolor ex neque totam. Facere fugit explicabo eum similique et alias velit qui numquam sint laborum aliquid amet. Necessitatibus ratione in fugit. In ut quidem incidunt neque neque non asperiores perferendis explicabo aperiam. Et aut dolor qui error nihil dolorem aliquam ullam eum excepturi sapiente deleniti.', },
  { title: 'Tab 4', content: 'Et impedit ipsum quo. Tempora ex quas et qui consequatur incidunt voluptas aut. Qui alias iusto est occaecati ipsam sequi dolor qui et harum dolor.', },
];

export const Default = (args) => {
  return Tabs(args);
};
Default.args = {
  tabVariant: 'default',
  items: exampleItems,
};

export const Large = (args) => {
  return Tabs(args);
};
Large.args = {
  tabVariant: 'lg',
  items: exampleItems,
};
