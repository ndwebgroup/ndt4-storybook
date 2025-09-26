/**
 * Button Components Overview
 *
 * This file provides an overview of the button components available in the system.
 */

import Button from './Button';
import ButtonGroup from './ButtonGroup';
import IconButton from './IconButton';
import VideoButton from './VideoButton';
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
  const buttonStates = ['default', 'more', 'cta'];

  const buttonExamples = buttonSection.querySelector('.button-examples');
  buttonTypes.forEach(type => {
    const buttonTypeHeader = document.createElement('h4');
    const buttonDivider = document.createElement('hr');
    buttonTypeHeader.textContent = `${type.charAt(0).toUpperCase() + type.slice(1)} Buttons`;
    
    buttonExamples.appendChild(buttonDivider).className = 'mb-4';
    buttonExamples.appendChild(buttonTypeHeader);
    
    buttonStates.forEach(state => {
      const buttonWrapper = document.createElement('li');
      buttonWrapper.className = 'button-example';
      buttonWrapper.style.display = 'inline-block';
      buttonWrapper.style.margin = '10px';

      const buttonLabel = document.createElement('p');
      buttonLabel.className = 'label';
      buttonLabel.textContent = `${type} (${state})`;
      buttonWrapper.appendChild(buttonLabel);

      const button = Button({
        label: `${type.charAt(0).toUpperCase() + type.slice(1)} Button`,
        type,
        ...(state === 'cta' ? { cta: true } : state === 'more' ? { more: true } : {}),
      });
      buttonWrapper.appendChild(button);
      buttonExamples.appendChild(buttonWrapper);
    });
  });

  container.appendChild(buttonSection);
  container.appendChild(document.createElement('hr')).className = 'mb-4';
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
  container.appendChild(document.createElement('hr')).className = 'mb-4';
  
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
  container.appendChild(document.createElement('hr')).className = 'mb-4';

  // Icon Button Section
  const iconButtonSection = document.createElement('section');
  iconButtonSection.className = 'button-section';
  iconButtonSection.innerHTML = `
    <h3>Icon Button</h3>
    <p>Buttons that primarily use icons to represent actions. Can be aligned left or right, with optional reveal text.</p>
    <ul class="icon-button-examples no-bullets">
      <li>${IconButton({ icon: 'plus', type: 'primary', label: '', cta: false, align: 'left' }).outerHTML}</li>
      <li>${IconButton({ icon: 'arrow-up', type: 'primary', label: 'Back to Top', cta: false, align: 'left' }).outerHTML}</li>
    </ul>
  `;

  container.appendChild(iconButtonSection);
  container.appendChild(document.createElement('hr')).className = 'mb-4';

  // Video Button Section
  const videoButtonSection = document.createElement('section');
  videoButtonSection.className = 'button-section';
  videoButtonSection.innerHTML = `
    <h3>Video Button</h3>
    <p>Specialized button for video playback actions, typically represented with a play icon.</p>
    <div class="video-button-example">
      ${VideoButton({ label: 'Watch Video', videoUrl: '#', type: 'primary' }).outerHTML}
    </div>
  `;

  container.appendChild(videoButtonSection);
  container.appendChild(document.createElement('hr')).className = 'mb-4';

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