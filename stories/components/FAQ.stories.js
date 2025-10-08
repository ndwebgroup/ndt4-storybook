import FAQ from './FAQ';

export default {
  title: 'Components/FAQ',
  tags: ['stable'],
  parameters: {
    design: {
      name: "Figma Assets",
      allowFullscreen: true,
      type: "figma",
      url: "https://www.figma.com/design/oMHFAa6HK6xMGMtxPhOkLV/University-of-Notre-Dame---Web-Theme-4.0-Digital-Design-Guide?node-id=3279-3479",
    },
    docs: {
      description: {
        component: 'The FAQ component displays a list of frequently asked questions with answers, along with optional features like an anchor list and "Back to top" links.'
      }
    }
  },
  argTypes: {
    showAnchors: {
      control: 'boolean',
      description: 'Whether to show the anchor list at the top'
    },
    showBackToTop: {
      control: 'boolean',
      description: 'Whether to show "Back to top" links'
    },
    id: {
      control: 'text',
      description: 'ID for the FAQ section'
    }
  },
};

// Sample FAQ items
const sampleFaqItems = [
  {
    id: 'faq_001',
    question: 'What is the history behind the Golden Dome?',
    answer: '<p>The Golden Dome is the main building at Notre Dame and one of the most recognizable university landmarks in the world. It was completed in 1879 after the original main building was destroyed in a fire. The dome was added in 1882 and most recently regilded in 2005. The statue atop the dome is of Mary, the mother of Jesus, who is the patron saint of the university.</p>'
  },
  {
    id: 'faq_002',
    question: 'How competitive is admission to Notre Dame?',
    answer: '<p>Notre Dame is highly selective, with an acceptance rate typically between 15-18%. For the Class of 2025, approximately 21,000 students applied and about 3,500 were admitted. The middle 50% SAT score range for admitted students is approximately 1400-1550, and the middle 50% ACT range is about 32-35.</p>'
  },
  {
    id: 'faq_003',
    question: 'What are Notre Dame\'s most popular majors?',
    answer: '<p>Some of Notre Dame\'s most popular undergraduate majors include Finance, Economics, Political Science, Computer Science, and Mechanical Engineering. The university is particularly well-known for its Mendoza College of Business, its College of Arts and Letters, and its strong liberal arts education foundation regardless of major.</p>'
  },
  {
    id: 'faq_004',
    question: 'What is the significance of "Fighting Irish" and how did it become Notre Dame\'s nickname?',
    answer: '<p>While the exact origin of the "Fighting Irish" nickname is debated, it became the official nickname in 1927. One theory suggests it came from Irish immigrant students who joined the Union Army during the Civil War. Others believe it originated during an 1899 football game when a Northwestern fan reportedly shouted, "The Fighting Irish are on the field!" The leprechaun mascot was adopted in 1965, replacing earlier mascot iterations including Irish terrier dogs.</p>'
  },
  {
    id: 'faq_005',
    question: 'What are the residential traditions at Notre Dame?',
    answer: '<p>Notre Dame has a unique residential life system with approximately 80% of undergraduates living on campus across more than 30 residence halls. Unlike many universities, Notre Dame does not have Greek life. Instead, each residence hall has its own distinct traditions, events, and intramural sports teams. Students typically remain in the same hall throughout their undergraduate years, creating strong community bonds.</p>'
  }
];

// Standard FAQ with anchors and back-to-top links
export const Default = {
  args: {
    id: 'faq-faqs-example',
    showAnchors: true,
    showBackToTop: true,
    faqItems: sampleFaqItems
  },
  render: (args) => {
    return FAQ(args);
  },
};

// FAQ without anchor list
export const WithoutAnchors = {
  args: {
    id: 'faq-no-anchors-example',
    showAnchors: false,
    showBackToTop: true,
    faqItems: sampleFaqItems
  },
  render: (args) => {
    return FAQ(args);
  },
};

// FAQ without back-to-top links
export const WithoutBackToTop = {
  args: {
    id: 'faq-no-backtotop-example',
    showAnchors: true,
    showBackToTop: false,
    faqItems: sampleFaqItems
  },
  render: (args) => {
    return FAQ(args);
  },
};

// Minimal FAQ without anchors or back-to-top links
export const Minimal = {
  args: {
    id: 'faq-minimal-example',
    showAnchors: false,
    showBackToTop: false,
    faqItems: sampleFaqItems
  },
  render: (args) => {
    return FAQ(args);
  },
};