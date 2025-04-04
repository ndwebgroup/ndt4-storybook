import Dialog from './Dialog.js';

export default {
  title: 'Components/Dialog',
  tags: ['autodocs'],
  parameters: {
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
    closeButtonText: {
      name: 'Close Button Text',
      description: 'Text for the close button title attribute',
      control: 'text'
    }
  }
};

// Custom decorator to add dialog polyfill and make dialogs show immediately
const dialogDecorator = (story) => {
  const dialogHTML = story();

  // Add dialog initialization script
  const initScript = `
    document.addEventListener('DOMContentLoaded', function() {
      // Find all dialog preview wrappers on the page
      const allDialogWrappers = document.querySelectorAll('.dialog-preview-wrapper');

      // For each wrapper, setup its own button-dialog connection
      allDialogWrappers.forEach(wrapper => {
        const toggleButton = wrapper.querySelector('.dialog-toggle-button');
        const dialog = wrapper.querySelector('.dialog-container-preview dialog');

        if (toggleButton && dialog) {
          toggleButton.addEventListener('click', () => {
            dialog.showModal();
          });

          // Ensure the close button works
          const closeButton = dialog.querySelector('.dialog-close button');
          if (closeButton) {
            closeButton.addEventListener('click', () => {
              dialog.close();
            });
          }
        }
      });
    });
  `;

  return `
    <div class="dialog-preview-wrapper">
      <button class="btn dialog-toggle-button">Open Dialog</button>
      <div class="dialog-container-preview">
        ${dialogHTML}
      </div>
    </div>

    <script>${initScript}</script>
  `;
};

export const Default = (args) => {
  return Dialog(args);
};

Default.args = {
  title: 'Dialog Title',
  content: 'This is the default dialog content. Dialogs can contain any type of information that requires user attention.',
  closeButtonText: 'Close'
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
  closeButtonText: 'Dismiss'
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
  content: `<p class="text-danger">Are you sure you want to delete this item? This action cannot be undone.</p>
    <div class="">
      <button class="btn btn--cta">Delete</button>
      <button class="btn btn--neutral">Cancel</button>
    </div>`,
  closeButtonText: 'Close'
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
  content: `<p>This is an example of a dialog with longer content. Scroll should be enabled when content exceeds the available space.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.</p>
  <div class="">
    <button class="btn btn--cta">Accept</button>
    <button class="btn btn--neutral">Decline</button>
  </div>`,
  closeButtonText: 'Close'
};

LongContent.parameters = {
  docs: {
    description: {
      story: 'Dialog with longer scrollable content and action buttons.'
    }
  }
};

LongContent.decorators = [dialogDecorator];