function createMenu() {
  // Get the main container
  const container = document.getElementById('container');

  // Create menu container div
  const menuContainer = document.createElement('div');
  // Set attributes to the menu container
  menuContainer.setAttribute('id', 'menu-container');
  menuContainer.setAttribute('class', 'bg-slate-200 flex flex-col items-center justify-center mt-28 text-6xl hidden');
  // create menu elements
  menuContainer.innerHTML = '<h1>Menu Section</h1>'
    + '<div class="text-2xl">'
    + '<p>Plate 1</p>'
    + '</div>';
  // Append the menu element to the DOM
  container.appendChild(menuContainer);
}

function renderMenu() {
  // get containers to hide and show
  const homeContainer = document.getElementById('home-container');
  const menuContainer = document.getElementById('menu-container');
  const contactContainer = document.getElementById('contact-container');

  // hide menu and contact - using tailwind class
  // hide => display: none;
  if (homeContainer) {
    homeContainer.classList.add('hidden');
  }
  if (contactContainer) {
    contactContainer.classList.add('hidden');
  }

  // Display home
  if (menuContainer) {
    menuContainer.classList.remove('hidden');
  }
}

export { createMenu, renderMenu };
