import FeaturedCard from './FeaturedCard.js';

// Add styles to document head
const addCardStyles = () => {
  if (!document.getElementById('card-styles')) {
    const style = document.createElement('style');
    style.id = 'card-styles';
    style.textContent = `
      .card-container:has(.card--featured) { max-width:30rem; }
    `;
    document.head.appendChild(style);
  }
};

export default {
  title: 'Components/Cards/Card (Featured)',
  tags: ['autodocs'],
  argTypes: {
    link: { name:'Card Link',},
    label: { name:'Card Label',},
    title: { name:'Card Title',},
  },
  args: {
    label: 'Card Label',
    title: 'Card Title',
    link: '#',
  },
  decorators: [
    (Story) => {
      // Add styles to document head
      addCardStyles();
      // This will only affect the preview
      const result = Story();
      return result;
    }
  ]
  }

export const Default = (args) => {
  return FeaturedCard(args);
};
Default.args = {
};

export const VerticalCard = (args) => {
  return FeaturedCard(args);
};
VerticalCard.args = {
  image: '/images/placeholder-people-1-800x1400.jpg',
};