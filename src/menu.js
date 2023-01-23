function createMenu() {
  // Get the main container
  const container = document.getElementById('container');

  // Create menu container div
  const menuContainer = document.createElement('div');
  // Set attributes to the menu container
  menuContainer.setAttribute('id', 'menu-container');
  menuContainer.setAttribute('class', 'flex items-center justify-center hidden');
  // create menu elements
  menuContainer.innerHTML = '<p>Menu Section</p>';
  // Append the menu element to the DOM
  container.appendChild(menuContainer);
}

function renderMenu() {
  console.log('Render menu ready!');
  // get containers to hide and show
  const homeContainer = document.getElementById('home-container');
  const menuContainer = document.getElementById('menu-container');
  // const contactContainer = document.getElementById('contact-container');

  // hide menu and contact - using tailwind class
  // hide => display: none;
  if (homeContainer) {
    homeContainer.classList.add('hidden');
  }
  // if (contactContainer) {
  //   contactContainer.classList.add('hide');
  // }

  // Display home
  if (menuContainer) {
    menuContainer.classList.remove('hidden');
  }
}

export { createMenu, renderMenu };
