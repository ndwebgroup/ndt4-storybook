import MediaMentionQuoted from './MediaMentionQuoted';

export default {
  title: 'Components/Media Mentions/Media Mention (Quoted)',
  tags: ['stable'],
  argTypes: {
    showPublication: {
      control: 'boolean',
      description: 'Whether to show the publication information'
    },
    showPeople: {
      control: 'boolean',
      description: 'Whether to show the mentioned people'
    }
  },
};

// Sample media mention data
const sampleMediaMention = {
  quote: '“People are legitimately actually pissed off at the health care industry, and there is some kind of support for vigilante justice.”',
  public_url: 'https://example.com/notre-dame-energy-research',
  html_id: 'mention-123',
  publication: {
    name: 'New York Times',
    slug: 'nyt',
    logo_url: 'https://conductor.nd.edu/images/publications/the-new-york-times.png',
    logo_width: 180,
    logo_height: 60
  },
  people: [
    {
      first_name: 'Tim',
      last_name: 'Weninger',
      url: '#',
      image: '/images/profile-weninger.jpg'
    }
  ]
};

// Default media mention with all features
export const Default = {
  args: {
    item: sampleMediaMention,
    showPublication: true,
    showPeople: true
  },
  render: (args) => {
    return MediaMentionQuoted(args);
  },
};