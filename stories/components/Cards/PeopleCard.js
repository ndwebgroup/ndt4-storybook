/**
 * People card component
 * @param {Object} props - Component properties
 * @param {string} props.name - The full name of the person
 * @param {string} props.title - The title of the person
 * @param {boolean} props.placeholder - Whether to show the person image
 * @param {('default'|'horizontal'|'stacked'|'compact')} [props.layout='default'] - The layout of the card
 * @param {boolean} props.useDialog - Whether to show a dialog for this person
 * @param {string} props.email - The email of the person
 * @param {string} props.website - The website of the person
 * @param {string} props.phone - The phone number of the person
 * @param {string} props.mobile - The mobile number of the person
 * @param {string} props.fax - The fax number of the person
 * @param {string} props.street - The street address of the person
 * @param {string} props.content - Biographical content for the person
 * @returns {HTMLElement} - The card element
 */
import Avatar from '../Avatar.js';

export default function PeopleCard(props) {
  const {
    name,
    title,
    placeholder = false,
    layout = 'default',
    summary,
    useDialog = false,
    email = '',
    website = '',
    phone = '',
    mobile = '',
    fax = '',
    street = '',
    content = ''
  } = props;

  const container = document.createElement('div');
  container.className = 'card-container';
  let classes = ['card', ' card--person', `${layout === 'default' ? '' : ` card--${layout}`}`];

  if (useDialog) {
    classes.push('dialog-item');
  }

  // Get the same image source that will be used in the Avatar component
  const imageSrc = placeholder ? '/images/placeholder-person.svg' : `/images/placeholder-profile-1-500x500.jpg`;
  const avatarImage = Avatar({ size: 'lg', type: 'image', helper_class: 'card-image' });
  const avatarPlaceholder = Avatar({ size: 'lg', type: 'placeholder', helper_class: 'card-image' });

  // Create the title element based on whether dialog is used
  const titleElement = useDialog
    ? `<h2 class="card-title person-name">${name}</h2>`
    : `<h2 class="card-title person-name"><a class="card-link" href="#">${name}</a></h2>`;

  // Create the dialog button if needed
  const dialogButton = useDialog
    ? `<button class="btn dialog-link">View Profile</button>`
    : '';

  // Create the dialog element if needed
  const dialogElement = useDialog
    ? `<dialog class="dialog dialog--person">
        <div class="dialog-header">
          <p class="dialog-heading"></p>
          <form method="dialog" class="dialog-close">
            <button type="submit" title="Close">×</button>
          </form>
        </div>
        <div class="dialog-content">
          <div class="dialog-image"><img class="image-circle" height="600" width="600" loading="lazy" src="${imageSrc}" alt="${name}"></div>
          <div class="dialog-body">
            <p class="person-name">${name}</p>
            <p class="person-title">${title}</p>
            <p>
              ${email ? `<a href="mailto:${email}">${email}</a><br>` : ''}
              ${website ? `<a href="${website}" aria-label="Visit the website for ${name}">Website</a><br>` : ''}
              ${phone ? `P: ${phone.replace('+1 ', '')}<br>` : ''}
              ${mobile ? `M: ${mobile.replace('+1 ', '')}<br>` : ''}
              ${fax ? `F: ${fax.replace('+1 ', '')}<br>` : ''}
              ${street ? `${street}<br>` : ''}
            </p>
            <div class="dialog-bio">${content}</div>
          </div>
        </div>
      </dialog>`
    : '';

  if (placeholder) {
    container.innerHTML = `
    <div class="${classes.join(' ')}">
      ${avatarPlaceholder}
      <div class="card-body">
        ${titleElement}
        <p class="person-title">${title}</p>
        <p class="card-summary">${summary}</p>
        ${dialogButton}
      </div>
      ${dialogElement}
    </div>
    `;
  } else {
    container.innerHTML = `
    <div class="${classes.join(' ')}">
      ${avatarImage}
      <div class="card-body">
        ${titleElement}
        <p class="person-title">${title}</p>
        <p class="card-summary">${summary}</p>
        ${dialogButton}
      </div>
      ${dialogElement}
    </div>
    `;
  }

  // Add dialog event listeners if using dialog
  if (useDialog) {
    setTimeout(() => {
      const dialogItems = container.querySelectorAll('.dialog-item');
      dialogItems.forEach(function(item) {
        const dialog = item.querySelector('dialog');
        const dialogLink = item.querySelector('.dialog-link');

        dialog.addEventListener('close', function(e){
          document.body.classList.remove('has-open-dialog');
          if(dialog.querySelector('iframe')) dialog.querySelector('iframe').contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        });

        if(dialogLink){
          dialogLink.addEventListener('click', function(e){
            e.preventDefault();
            dialog.showModal();
            document.body.classList.add('has-open-dialog');
            dialog.addEventListener('click', function (e) { if (e.target.tagName === 'DIALOG' ) e.target.close(); });
          });
        }
      });
    }, 0);
  }

  return container;
}