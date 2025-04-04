import ButtonsOverview from './index';

export default {
  title: 'Components/Buttons',
  tags: ['autodocs'],
  component: ButtonsOverview,
  argTypes: {
    title: { name: 'Button Title' },
    buttonTypes: {
      name: 'Button Types',
      description: 'Array of button types to display',
      control: 'object'
    },
    buttonStates: {
      name: 'Button States',
      description: 'Array of button states to display',
      control: 'object'
    },
    showIconButtons: {
      name: 'Show Icon Buttons',
      control: 'boolean'
    },
    buttonSize: {
      name: 'Button Size',
      description: 'Size of the button',
      control: 'select',
      options: ['small', 'medium', 'large']
    }
  }
};

/**
 * The overview story showcases all button components in a single view
 */
export const Buttons = {
  render: () => ButtonsOverview(),
};