function createMenu() {
  // Get the main container
  const container = document.getElementById('container');

  // Create menu container div
  const menuContainer = document.createElement('div');
  // Set attributes to the menu container
  menuContainer.setAttribute('id', 'menu-container');
  menuContainer.setAttribute('class', 'bg-slate-200 flex flex-col items-center justify-center mt-24 pb-24 text-6xl hidden');
  // create menu elements
  menuContainer.innerHTML = '<h1 class="mt-12">Menu Section</h1>';
  menuContainer.innerHTML += '<div class="mt-12 text-base content-font w-1/3">'
                              + '<h2 class="text-3xl">Plate 1</h2>'
                              + '<div class="grid grid-cols-3 gap-4">'
                                + '<p class="col-span-2">Description lorem ipsun athem gotta found</p>'
                                + '<p class="number-font place-self-center">$100.00</p>'
                              + '</div>'
                            + '</div>';
  menuContainer.innerHTML += '<div class="mt-12 text-base content-font w-1/3">'
                              + '<h2 class="text-3xl">Plate 1</h2>'
                                + '<div class="grid grid-cols-3 gap-4">'
                                  + '<p class="col-span-2">Description lorem ipsun athem gotta found</p>'
                                  + '<p class="number-font place-self-center">$100.00</p>'
                                + '</div>'
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
