import Gallery from './Gallery.js';

// Gallery CSS and JavaScript resources
const galleryResources = `
<link rel="stylesheet" href="https://conductor.nd.edu/stylesheets/lb.css">
<script src="https://conductor.nd.edu/javascripts/lb.js"></script>
`;

// Decorator to add gallery resources to stories
const withGalleryResources = (Story) => {
  return galleryResources + Story();
};

export default {
  title: 'Components/Gallery',
  tags: ['stable'],
  parameters: {
    design: {
      name: "Figma Assets",
      allowFullscreen: true,
      type: "figma",
      url: "https://www.figma.com/design/oMHFAa6HK6xMGMtxPhOkLV/University-of-Notre-Dame---Web-Theme-4.0-Digital-Design-Guide?node-id=994-6646",
    },
    docs: {
      description: {
        component: 'The Gallery component displays a collection of images that can be viewed in a lightbox.'
      }
    },
    layout: 'padded'
  },
  decorators: [withGalleryResources],
  argTypes: {
    id: {
      name: 'Gallery ID',
      description: 'Unique identifier for the gallery',
      control: 'text'
    },
    classes: {
      name: 'Modifier Classes',
      description: 'Modifier CSS classes to apply to the gallery container',
      control: 'text'
    },
    images: {
      name: 'Gallery Images',
      description: 'Number of images to display in the gallery',
      control: { type: 'range', min:1, max:40, step: 1 },
    }
  },
  args: {
    id: '15',
    classes: '',
    images: 15,
    imageSrc: '/images/placeholder-campus-3-1200x675.jpg',
  }
};

export const Default = (args) => {
  return Gallery(args);
  
};

export const TwoImages = (args) => {
  return Gallery({
    ...args,
    images: 2
  });
};

export const ThreeImages = (args) => {
  return Gallery({
    ...args,
    id: "3",
    images: 3
  });
};

export const FiveImages = (args) => {
  return Gallery({
    ...args,
    id: "5",
    images: 5
  });
};

export const TwelveImages = (args) => {
  return Gallery({
    ...args,
    id: "12",
    images: 12
  });
};

export const GalleryTiled = (args) => {
  return Gallery({
    ...args,
    id: "15",
    classes: 'gallery--tiled',
    images: args.images
  });
};

export const GallerySlider = (args) => {
  return Gallery({
    ...args,
    id: "21",
    classes: 'gallery--slider',
    images: args.images
  });
};