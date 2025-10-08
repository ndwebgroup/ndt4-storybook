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
      description: 'Array of image objects with thumbnail, fullsize, alt, and caption properties',
      control: 'object'
    }
  },
  args: {
    id: '2',
    classes: '',
    images: [] // Images will be provided in individual stories
  }
};

// Helper function to create gallery images with the requested format
const createGalleryImages = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    thumbnail: `/images/placeholder-campus-3-600x600.jpg`,
    fullsize: `/images/placeholder-campus-3-1200x675.jpg`,
    alt: `Gallery image ${i + 1}`,
    caption: i % 2 === 0 ? `Caption for image ${i + 1}` : '',
  }));
};

export const TwoImages = (args) => {
  return Gallery({
    ...args,
    images: createGalleryImages(2)
  });
};

export const ThreeImages = (args) => {
  return Gallery({
    ...args,
    id: "3",
    images: createGalleryImages(3)
  });
};

export const FiveImages = (args) => {
  return Gallery({
    ...args,
    id: "5",
    images: createGalleryImages(5)
  });
};

export const TwelveImages = (args) => {
  return Gallery({
    ...args,
    id: "12",
    images: createGalleryImages(12)
  });
};

export const GalleryTiled = (args) => {
  return Gallery({
    ...args,
    id: "15",
    classes: 'gallery--tiled',
    images: createGalleryImages(15)
  });
};

export const GallerySlider = (args) => {
  return Gallery({
    ...args,
    id: "15",
    classes: 'gallery--slider',
    images: createGalleryImages(21)
  });
};