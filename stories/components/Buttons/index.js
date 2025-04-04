/**
 * Button Components Overview
 *
 * This file provides an overview of the button components available in the system.
 */

import Button from './Button';
import ButtonGroup from './ButtonGroup';
import ButtonIcon from './ButtonIcon';
import ButtonList from './ButtonList';

/**
 * Creates a demonstration of all button types and variants
 * @returns {HTMLElement} - A container with all button demos
 */
export default function ButtonsOverview() {
  const container = document.createElement('div');
  container.className = 'button-overview';

  // Add introduction
  const intro = document.createElement('div');
  intro.innerHTML = `
    <h2>Button Components</h2>
    <p>The design system provides various button components to meet different UI needs.</p>
  `;
  container.appendChild(intro);

  // Standard Button Section
  const buttonSection = document.createElement('section');
  buttonSection.className = 'button-section';
  buttonSection.innerHTML = `
    <h3>Standard Button</h3>
    <p>Used for primary actions. Available in primary, secondary, tertiary, and neutral types, with default or CTA states.</p>
    <div class="button-examples"></div>
  `;

  // Add button examples
  const buttonTypes = ['primary', 'secondary', 'tertiary', 'neutral'];
  const buttonStates = ['default', 'cta'];

  const buttonExamples = buttonSection.querySelector('.button-examples');
  buttonTypes.forEach(type => {
    buttonStates.forEach(state => {
      const buttonWrapper = document.createElement('div');
      buttonWrapper.className = 'button-example';
      buttonWrapper.style.display = 'inline-block';
      buttonWrapper.style.margin = '10px';

      const buttonLabel = document.createElement('p');
      buttonLabel.textContent = `${type} (${state})`;
      buttonWrapper.appendChild(buttonLabel);

      const button = Button({
        label: `${type.charAt(0).toUpperCase() + type.slice(1)} Button`,
        type,
        state
      });
      buttonWrapper.appendChild(button);

      buttonExamples.appendChild(buttonWrapper);
    });
  });

  container.appendChild(buttonSection);

  // Button Group Section
  const buttonGroupSection = document.createElement('section');
  buttonGroupSection.className = 'button-section';
  buttonGroupSection.innerHTML = `
    <h3>Button Group</h3>
    <p>Used to group related actions together in a horizontal layout.</p>
    <div class="button-group-example">
      ${ButtonGroup({
        items: [
          { text: 'Button 1', href: '#' },
          { text: 'Button 2', href: '#' },
          { text: 'Button 3', href: '#' }
        ]
      })}
    </div>
  `;

  container.appendChild(buttonGroupSection);

  // Button List Section
  const buttonListSection = document.createElement('section');
  buttonListSection.className = 'button-section';
  buttonListSection.innerHTML = `
    <h3>Button List</h3>
    <p>Displays buttons in a vertical list format.</p>
    <div class="button-list-example">
      ${ButtonList({
        items: [
          { text: 'List Button 1', href: '#' },
          { text: 'List Button 2', href: '#' },
          { text: 'List Button 3', href: '#' }
        ]
      })}
    </div>
  `;

  container.appendChild(buttonListSection);

  // Usage guidelines
  const guidelines = document.createElement('section');
  guidelines.className = 'button-guidelines';
  guidelines.innerHTML = `
    <h3>Usage Guidelines</h3>
    <ul>
      <li><strong>Primary Buttons</strong>: Use for the main action on a page or in a component.</li>
      <li><strong>Secondary Buttons</strong>: Use for alternative actions that are less emphasized.</li>
      <li><strong>Tertiary Buttons</strong>: Use for supplementary actions.</li>
      <li><strong>Neutral Buttons</strong>: Use for actions that should appear more subtle.</li>
      <li><strong>Button Groups</strong>: Use when multiple related actions need to be presented together.</li>
      <li><strong>Button Lists</strong>: Use when presenting a vertical list of actions.</li>
      <li><strong>Icon Buttons</strong>: Use when space is limited or to enhance visual recognition.</li>
    </ul>
  `;

  container.appendChild(guidelines);

  return container;
}