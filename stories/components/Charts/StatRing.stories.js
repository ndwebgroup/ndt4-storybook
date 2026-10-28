import StatRing from './StatRing.js';

export default {
  title: 'Components/Charts/Stat Ring',
  tags: ['coming'],
  argTypes: {
    label: { name: 'Label', control: 'text' },
    value: { name: 'Value', control: 'number' },
    max: { name: 'Max', control: 'number' },
    displayValue: { name: 'Display Value', control: 'text', description: 'Overrides the auto-generated center text' },
    colorIndex: { name: 'Color', control: 'select', options: [0, 1, 2, 3, 4, 5, 6, 7], description: 'Index into the brand palette' },
  },
  parameters: {
    docs: {
      description: {
        component: 'The Stat Ring component shows a single value as radial progress — pairs well with the Stat component for goal-style metrics ("72% of fundraising goal", "3 of 4 credits complete"). Built on Chart.js and themed automatically from NDT4 brand colors, including dark mode.'
      }
    },
  },
  args: {
    label: 'Comprehensive Campaign Progress',
    value: 72,
    max: 100,
    displayValue: '',
    colorIndex: 0,
  }
};

export const Default = (args) => {
  return StatRing({ ...args, displayValue: args.displayValue || undefined });
};
Default.args = {
};

export const FractionDisplay = (args) => {
  return StatRing({ ...args, displayValue: args.displayValue || undefined });
};
FractionDisplay.args = {
  label: 'Degree Requirements Complete',
  value: 3,
  max: 4,
  colorIndex: 2,
};

export const CustomLabel = (args) => {
  return StatRing({ ...args, displayValue: args.displayValue || undefined });
};
CustomLabel.args = {
  label: 'Days Until Commencement',
  value: 18,
  max: 90,
  displayValue: '18 days',
  colorIndex: 1,
};
