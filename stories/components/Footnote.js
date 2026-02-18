/**
 * Footnote component
 * Supports multiple list types: unordered, ordered, unstyled, stepped, inline, and description lists
 */
export default function Footnote(args) {
  const { items } = args;

  const container = document.createElement('ol');
  container.className = 'list--footnote';

  items.forEach(item => {
    const listItem = document.createElement('li');
    listItem.innerHTML = item;
    container.appendChild(listItem);
  });

  return container;
}