import Header from '../collections/Header.js';
import Hero from '../collections/Hero.js';
import NavigationSidebar from '../components/NavigationSidebar.js';
import { defaultNavigationItems } from '../components/NavigationPrimary.js';
import NewsCard from '../components/Cards/NewsCard.js';
import EventCard from '../components/Cards/EventCard.js';
import Footer from '../collections/Footer.js';
import Home from './Home.js';

export default {
  title: 'Templates/Home',
  component: Home,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      const result = Story();
      return `<body class="nav-top--false">
    <div class="wrapper" id="wrapper">
          ${Header({ siteName:`Department Title`, showNavigation:false, showNavButton:false, markRight:false })}
      <main id="content" class="site-content">
            ${Hero({ pageTitle:`Department of Example`, pageLede:``, heroLayout:`inline`, showFeaturedImage:true })}
            <div class="page-primary">
              ${result}

              <section class="section section--home-news">
                <h2 class="section-title">Latest News</h2>
                <div class="grid grid-lg-3">
                  ${NewsCard(Default.args)}
                  ${NewsCard(Default.args)}
                  ${NewsCard(Default.args)}
                </div>
              </section>

              <section class="section section--home-events">
                <h2 class="section-title">Upcoming Events</h2>
                <div class="grid grid-lg-3">
                  ${EventCard(Default.args)}
                  ${EventCard(Default.args)}
                  ${EventCard(Default.args)}
                </div>
              </section>
            </div>
            <div class="page-sidebar">
              ${NavigationSidebar({ items: defaultNavigationItems })}
            </div>
      </main>
          ${Footer({ siteName:`Department Title` })}
    </div>
  </body>`;
    }
  ],
  argTypes: {
   pageContent: {
      name: 'Page Content',
      description: 'HTML content for the main area of the home page',
      control: 'text'
    }
  },
  args: {
   pageContent: `<h2>Welcome to the Department of Example</h2>
   <p>This is a sample home page for the Department of Example. Use the controls to customize the content.</p>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
   <p>Explore our programs, faculty, and research initiatives to learn more about what we offer.</p>
   <p>Contact us for more information or to schedule a visit.</p>`
  }
};

const Template = (args) => {
  return Home(args);
};

export const Default = Template.bind({});
Default.args = {
  // Basic example uses the default args
};
