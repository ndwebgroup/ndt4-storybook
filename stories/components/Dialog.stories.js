import Dialog from './Dialog.js';

export default {
  title: 'Components/Dialog',
  tags: ['stable'],
  parameters: {
    design: {
      name: "Figma Assets",
      allowFullscreen: true,
      type: "figma",
      url: "https://www.figma.com/design/oMHFAa6HK6xMGMtxPhOkLV/University-of-Notre-Dame---Web-Theme-4.0-Digital-Design-Guide?node-id=3268-4066",
    },
    docs: {
      description: {
        component: 'Dialog components provide modal interfaces for sharing information, notifications, and alerts. They overlay the main content and require user interaction to dismiss.'
      }
    }
  },
  argTypes: {
    title: {
      name: 'Title',
      description: 'The heading text of the dialog',
      control: 'text'
    },
    content: {
      name: 'Content',
      description: 'The content text of the dialog',
      control: 'text'
    },
  }
};

// Custom decorator to add dialog polyfill and make dialogs show immediately
const dialogDecorator = (story) => {
  const dialogHTML = story();

  return `
    <div class="dialog-item">
      <button class="btn dialog-link">Open Dialog</button>
      ${dialogHTML}
    </div>
  `;
};

export const Default = (args) => {
  return Dialog(args);
};

Default.args = {
  title: 'Dialog Title',
  content: '<p>This is the default dialog content. Dialogs can contain any type of information that requires user attention.</p>',
  footer: 'This is a default dialog footer. Use this space for supporting text or action buttons'
};

Default.parameters = {
  docs: {
    description: {
      story: 'Default dialog with a title and content.'
    }
  }
};

Default.decorators = [dialogDecorator];

export const Notification = (args) => {
  return Dialog(args);
};

Notification.args = {
  title: 'Notification',
  content: '<p>Your changes have been saved successfully.</p><p>You can continue editing or return to the dashboard.</p>',
  closeButtonText: 'Dismiss',
  dialogModifier: 'dialog--narrow'
};

Notification.parameters = {
  docs: {
    description: {
      story: 'Dialog used for notifications with custom close button text.'
    }
  }
};

Notification.decorators = [dialogDecorator];

export const Alert = (args) => {
  return Dialog(args);
};

Alert.args = {
  title: 'Attention Required',
  content: `<p class="text-danger">Are you sure you want to delete this item? This action cannot be undone.</p>`,
  footer: `
  <button class="btn btn--cta">Delete</button>
  <button class="btn btn--neutral">Cancel</button>
  `,
  dialogModifier: 'dialog--narrow'
};

Alert.parameters = {
  docs: {
    description: {
      story: 'Dialog used for alerts with action buttons.'
    }
  }
};

Alert.decorators = [dialogDecorator];

export const LongContent = (args) => {
  return Dialog(args);
};

LongContent.storyName = 'With Long Content';
LongContent.args = {
  title: 'Terms and Conditions',
  contentModifier: 'grid grid-ml-2',
  media:'<figure class="dialog-image"><img src="/images/placeholder-campus-1-600x400.jpg" width="600" height="400" alt=""></figure>',
  content: `<p>This is an example of a dialog with longer content. Scroll should be enabled when content exceeds the available space.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.</p>
  `,
  footer: ``,
};

LongContent.parameters = {
  docs: {
    description: {
      story: 'Dialog with longer scrollable content and action buttons.'
    }
  }
};

LongContent.decorators = [dialogDecorator];

export const withImage = (args) => {
  return Dialog(args);
};

withImage.storyName = 'With Image';
withImage.args = {
  title: '',
  content: '<p>This is a caption for the image.</p>',
  dialogModifier: 'dialog--image',
  media:'<figure class="dialog-image"><img src="/images/placeholder-campus-1-2000x1333.jpg" width="2000" height="1333" alt=""></figure>',
};

withImage.parameters = {
  docs: {
    description: {
      story: 'Dialog with image.'
    }
  }
};

withImage.decorators = [dialogDecorator];

export const withVideo = (args) => {
  return Dialog(args);
};

withVideo.storyName = 'With Large Video';
withVideo.args = {
  title: '',
  content: '<p>This is a caption for the video.</p>',
  dialogModifier: 'dialog--video',
  media:'<iframe width="1280" height="720" style="aspect-ratio: 16/9;" src="https://www.youtube.com/embed/p_vC10eq474" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>',
};

withVideo.parameters = {
  docs: {
    description: {
      story: 'Dialog with video.'
    }
  }
};

withVideo.decorators = [dialogDecorator];

export const withPerson = (args) => {
  return Dialog(args);
};

withPerson.storyName = 'With Person';
withPerson.args = {
  title: '',
  dialogModifier: 'dialog--person',
  media:'<figure class="dialog-image"><img class="image-circle" src="/images/placeholder-profile-1-500x500.jpg" width="600" height="400" alt=""></figure>',
  content: `<h2>John Doe</h2>
        <p class="person-title">Person title</p>
        <p>
          <a href="mailto:johndoe@example.com">johndoe@example.com</a><br>
          <a href="https://example.com" aria-label="Visit the website for John Doe">Website</a><br>
          P: 555-123-4567<br>
          M: 555-987-6543<br>
        </p>
        <p class="dialog-bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu erat quis urna fringilla ultrices. Duis eleifend leo id purus commodo, vitae aliquet nisi tincidunt. In tincidunt purus vel aliquet lobortis. Morbi feugiat tortor nec justo varius, non congue ante congue.</p>
  `,
  footer: ``,
};

withPerson.parameters = {
  docs: {
    description: {
      story: 'Dialog with person data.'
    }
  }
};

withPerson.decorators = [dialogDecorator];