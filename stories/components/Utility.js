/**
 * Utility component
 * @param {string} props.padding
 * @param {string} props.margin
 * @param {string} props.backgroundColor
 * @param {string} props.headingText
 * @param {string} props.headingLevel
 * @param {string} props.textAlign
 * @param {string} props.content
 * @param {string} props.visibility
 */

import Heading from '../components/Heading';

export default function Utility(args) {
  const { padding, margin, textAlign, backgroundColor, headingText, headingLevel, content, visibility } = args;
  const container = document.createElement('div')
  const classes = [padding, margin, textAlign, visibility];

  if (backgroundColor && backgroundColor !== 'none') {
    classes.push(`bg--${backgroundColor}`, 'border-radius');
  }

  const classList = classes.filter(Boolean);
  if (classList.length > 0) {
    container.className = classList.join(' ');
  }

  container.innerHTML = `
    ${headingText ? `${Heading({ useClass:false, useAttribute:false, link:false, level:`${headingLevel}`, text:`${headingText}` })}` : '' }
    <p>${content}</p>
  `;

  return container;
}