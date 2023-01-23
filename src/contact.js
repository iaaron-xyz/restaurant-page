function createContact() {
  // Get the main container
  const container = document.getElementById('container');

  // Create menu container div
  const contactContainer = document.createElement('div');
  // Set attributes to the menu container
  contactContainer.setAttribute('id', 'contact-container');
  contactContainer.setAttribute('class', 'flex items-center justify-center hidden');
  // create menu elements
  contactContainer.innerHTML = '<p>Contact Section</p>';
  // Append the menu element to the DOM
  container.appendChild(contactContainer);
}

function renderContact() {
  console.log('Render menu ready!');
  // get containers to hide and show
  const homeContainer = document.getElementById('home-container');
  const menuContainer = document.getElementById('menu-container');
  const contactContainer = document.getElementById('contact-container');

  // hide menu and contact - using tailwind class
  // hidden => display: none;
  if (homeContainer) {
    homeContainer.classList.add('hidden');
  }
  if (menuContainer) {
    menuContainer.classList.add('hidden');
  }

  // Display home
  if (contactContainer) {
    contactContainer.classList.remove('hidden');
  }
}

export { createContact, renderContact };
