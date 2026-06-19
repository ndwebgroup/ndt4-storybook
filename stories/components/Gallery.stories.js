import Gallery from './Gallery.js';

// Add styles to document head
const addHeaderStyles = () => {
  if (!document.getElementById('header-styles')) {
    const style = document.createElement('style');
    style.id = 'header-styles';
    style.textContent = `
      .show-number {
        position:relative;
        counter-increment:list-counter;
      }
      .show-number::after {
        content:counter(list-counter);
        display:flex;
        align-items:center;
        justify-content:center;
        text-align:center;
        position:absolute;
        inset:0;
        background:rgba(12,35,64,0.75);
        color:#fff;
        font-size:2rem;
        font-weight:bold;
        border-radius:4px;
      }
      .gallery--tiled .show-number::after {
        inset:0.5rem;
      }
    `;
    document.head.appendChild(style);
  }
};

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
  decorators: [
    withGalleryResources,
    (Story) => {
      // Add styles to document head
      addHeaderStyles();
      // This will only affect the preview
      return Story();
    }
  ],
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
      control: { type: 'number', min:1, max:40, step: 1 },
    },
    showNumber: {
      name: 'Show Image Number',
      description: 'Whether to show the image number as overlay on the images',
      control: 'boolean'
    }
  },
  args: {
    // Default args for all stories
    id: '15',
    classes: '',
    images: 15,
    showNumber: false,
    imageSrc: '/images/placeholder-campus-3-1200x675.jpg',
  }
};

export const Default = (args) => {
  return Gallery(args);
};
Default.args = {
};

export const TwoImages = (args) => {
  return Gallery(args);
};
TwoImages.args = {
  id: "2",
  images:2
};

export const ThreeImages = (args) => {
  return Gallery(args);
};
ThreeImages.args = {
  id: "3",
  images:3
}; 

export const FiveImages = (args) => {
  return Gallery(args);
};
FiveImages.args = {
  id: "5",
  images:5
}; 

export const TwelveImages = (args) => {
  return Gallery(args);
};
TwelveImages.args = {
  id: "12",
  images:12
};


export const GalleryTiled = (args) => {
  return Gallery(args);
};
GalleryTiled.args = {
  id: "15",
  classes: 'gallery--tiled',
  images: 15
};

export const GallerySlider = (args) => {
  return Gallery(args);
};
GallerySlider.args = {
  id: "21",
  classes: 'gallery--slider',
  images: 21 
};