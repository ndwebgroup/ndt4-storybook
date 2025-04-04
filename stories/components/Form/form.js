// filepath: /Users/erunyon/Sites/ndt4-storybook/stories/components/Forms/FormCombinations.js
import { createStoryElement } from '../utils';
import Input from './Input.js';
import Checkbox from './Checkbox.js';
import Radio from './Radio.js';
import Select from './Select.js';
import Textarea from './Textarea.js';

/**
 * Component to demonstrate various combinations of form elements
 */
const FormCombinations = (args) => {
  const {
    title,
    inputFields = [],
    selects = [],
    textareas = [],
    checkboxGroups = [],
    radioGroups = [],
    showSubmit = true,
    submitText = 'Submit'
  } = args;

  // Create container
  const container = document.createElement('div');
  container.className = 'form-combinations';

  // Add form title if provided
  if (title) {
    const titleElement = document.createElement('h2');
    titleElement.className = 'form-title';
    titleElement.textContent = title;
    container.appendChild(titleElement);
  }

  // Add input fields
  if (inputFields && inputFields.length > 0) {
    inputFields.forEach(inputProps => {
      const input = Input(inputProps);
      container.appendChild(input);
    });
  }

  // Add select fields
  if (selects && selects.length > 0) {
    selects.forEach(selectProps => {
      const select = Select(selectProps);
      container.appendChild(select);
    });
  }

  // Add textareas
  if (textareas && textareas.length > 0) {
    textareas.forEach(textareaProps => {
      const textarea = Textarea(textareaProps);
      container.appendChild(textarea);
    });
  }

  // Add checkbox groups
  if (checkboxGroups && checkboxGroups.length > 0) {
    checkboxGroups.forEach(checkboxProps => {
      const checkbox = Checkbox(checkboxProps);
      container.appendChild(checkbox);
    });
  }

  // Add radio groups
  if (radioGroups && radioGroups.length > 0) {
    radioGroups.forEach(radioProps => {
      const radio = Radio(radioProps);
      container.appendChild(radio);
    });
  }

  // Add submit button if needed
  if (showSubmit) {
    const submitButton = document.createElement('button');
    submitButton.className = 'btn btn-primary mt-4';
    submitButton.textContent = submitText;
    submitButton.type = 'submit';
    container.appendChild(submitButton);
  }

  return container;
};

export default FormCombinations;