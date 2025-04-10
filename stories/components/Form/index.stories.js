import { createStoryElement } from '../../utils';
import FormCombinations from './index';

export default {
  title: 'Components/Form',
  tags: ['autodocs'],
  argTypes: {
    title: { name: 'Form Title' },
    inputFields: {
      name: 'Input Fields',
      description: 'Array of input field configurations',
      control: 'object'
    },
    selects: {
      name: 'Selects',
      description: 'Array of select configurations',
      control: 'object'
    },
    textareas: {
      name: 'Textareas',
      description: 'Array of textarea configurations',
      control: 'object'
    },
    checkboxGroups: {
      name: 'Checkbox Groups',
      description: 'Array of checkbox group configurations',
      control: 'object'
    },
    radioGroups: {
      name: 'Radio Groups',
      description: 'Array of radio group configurations',
      control: 'object'
    },
    showSubmit: {
      name: 'Show Submit Button',
      control: 'boolean'
    },
    submitText: {
      name: 'Submit Button Text'
    }
  }
};

// Basic Search form
export const BasicSearch = (args) => {
  return FormCombinations(args);
};
BasicSearch.storyName = 'Basic Search Form';
BasicSearch.args = {
  title: 'Search',
  inputFields: [
    { label: 'Search', type: 'search', placeholder: 'Search Site Name' }
  ],
  showSubmit: true,
  submitText: 'Search'
};
BasicSearch.parameters = {
  docs: {
    description: {
      story: 'A basic search form with a text input.'
    }
  }
};

// Structure Data filter form
export const FilterSearch = (args) => {
  return FormCombinations(args);
};
FilterSearch.storyName = 'Filter Search Form';
FilterSearch.args = {
  title: 'Filter Search Form',
  inputFields: [
    { label: 'Search', type: 'search', placeholder: 'Search Name, Title, or Keywords' }
  ],
  selects: [
    {
      label: 'Research Areas',
      items: [
        { text: 'Biochemistry' },
        { text: 'Inorganic Chemistry' },
        { text: 'Organic Chemistry' },
        { text: 'Physical/Analytical Chemistry' }
      ]
    }
  ],
  checkboxGroups: [
    {
      label: 'Research Specialties',
      items: [
        { text: 'Energy' },
        { text: 'Life Processes' },
        { text: 'Materials' },
        { text: 'Measurement' },
        { text: 'Medicine' },
        { text: 'Synthesis' },
        { text: 'Theory' }
      ]
    }
  ],
  showSubmit: true,
  submitText: 'Search'
};
FilterSearch.parameters = {
  docs: {
    description: {
      story: 'A search form for structured data.'
    }
  }
};

// Sample form configurations for different use cases
export const ContactForm = (args) => {
  return FormCombinations(args);
};
ContactForm.storyName = 'Contact Form';
ContactForm.args = {
  title: 'Contact Information',
  inputFields: [
    { label: 'First Name', type: 'text', placeholder: 'Enter your first name' },
    { label: 'Last Name', type: 'text', placeholder: 'Enter your last name' },
    { label: 'Email', type: 'email', placeholder: 'email@nd.edu' },
    { label: 'Phone', type: 'text', placeholder: '(574) 631-5000' }
  ],
  selects: [
    {
      label: 'Department',
      items: [
        { text: 'Admissions' },
        { text: 'Registrar' },
        { text: 'Financial Aid' },
        { text: 'Student Affairs' }
      ]
    }
  ],
  checkboxGroups: [
    {
      label: 'Interests',
      items: [
        { text: 'Campus Tours' },
        { text: 'Information Sessions' },
        { text: 'Alumni Events' }
      ]
    }
  ],
  radioGroups: [
    {
      label: 'Preferred Contact Method',
      items: [
        { text: 'Email' },
        { text: 'Phone' }
      ]
    }
  ],
  textareas: [
    {
      label: 'Message',
      placeholder: 'Your message here...',
      rows: '4'
    }
  ],
  submitText: 'Send Message'
};

export const RegistrationForm = (args) => {
  return FormCombinations(args);
};
RegistrationForm.storyName = 'Registration Form';
RegistrationForm.args = {
  title: 'Create an Account',
  inputFields: [
    { label: 'Username', type: 'text', placeholder: 'Choose a username' },
    { label: 'Email', type: 'email', placeholder: 'email@nd.edu' },
    { label: 'Password', type: 'password', placeholder: 'Enter password' },
    { label: 'Confirm Password', type: 'password', placeholder: 'Confirm password' }
  ],
  selects: [
    {
      label: 'Role',
      items: [
        { text: 'Student' },
        { text: 'Faculty' },
        { text: 'Staff' },
        { text: 'Alumni' }
      ]
    }
  ],
  checkboxGroups: [
    {
      label: 'Terms',
      items: [
        { text: 'I agree to the terms and conditions' }
      ]
    }
  ],
  submitText: 'Register'
};

export const SurveyForm = (args) => {
  return FormCombinations(args);
};
SurveyForm.storyName = 'Survey Form';
SurveyForm.args = {
  title: 'Campus Experience Survey',
  inputFields: [
    { label: 'Name', type: 'text', placeholder: 'Your name (optional)' },
    { label: 'Email', type: 'email', placeholder: 'email@nd.edu (optional)' }
  ],
  selects: [
    {
      label: 'Year at Notre Dame',
      items: [
        { text: 'First Year' },
        { text: 'Second Year' },
        { text: 'Third Year' },
        { text: 'Fourth Year' },
        { text: 'Fifth Year or Beyond' },
        { text: 'Graduate Student' },
        { text: 'Not Applicable' }
      ]
    }
  ],
  radioGroups: [
    {
      label: 'Overall Satisfaction',
      items: [
        { text: 'Very Satisfied' },
        { text: 'Satisfied' },
        { text: 'Neutral' },
        { text: 'Dissatisfied' },
        { text: 'Very Dissatisfied' }
      ]
    },
    {
      label: 'Would you recommend Notre Dame to others?',
      items: [
        { text: 'Definitely' },
        { text: 'Probably' },
        { text: 'Unsure' },
        { text: 'Probably Not' },
        { text: 'Definitely Not' }
      ]
    }
  ],
  checkboxGroups: [
    {
      label: 'Which campus services have you used? (Select all that apply)',
      items: [
        { text: 'Library' },
        { text: 'Dining Halls' },
        { text: 'Recreation Center' },
        { text: 'Career Services' },
        { text: 'Counseling Services' }
      ]
    }
  ],
  textareas: [
    {
      label: 'Additional Feedback',
      placeholder: 'Please share any additional feedback or suggestions...',
      rows: '5'
    }
  ],
  submitText: 'Submit Survey'
};

export const ValidationStates = (args) => {
  return FormCombinations(args);
};
ValidationStates.storyName = 'Form with Validation States';
ValidationStates.args = {
  title: 'Form with Validation Examples',
  inputFields: [
    {
      label: 'Invalid Text Input',
      type: 'text',
      value: 'Correct Value',
      note: 'This field is valid',
      className: 'is-valid',
    },
    {
      label: 'Invalid Input',
      type: 'email',
      value: 'not-an-email',
      note: 'Please enter a valid email address',
      className: 'is-invalid'
    }
  ],
  textareas: [
    {
      label: 'Invalid Textarea',
      value: 'Too short',
      note: 'Please enter at least 20 characters',
      className: 'is-invalid',
      rows: '3'
    }
  ],
  submitText: 'Submit Form'
};