import PastaImg from './pasta.png';
import SaladImg from './salad.png';

// Manu plate class
class MenuPlate {
  constructor(name, description, price, sectionMenu) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.sectionMenu = sectionMenu;
  }
}

// Restaurant plates
const plates = [
  new MenuPlate(
    'Tuscany',
    'Baby spinach, dried cranberries, almonds & blue cheese crumbs in a citrus vinegar dressing.',
    '9.45',
    'Salads',
  ),
  new MenuPlate(
    'Caprese',
    'Sliced fresh mozarella, fresh tomatoes with basil and balsamic vinaigrette.',
    '10.50',
    'Salads',
  ),
  new MenuPlate(
    'Bolognese',
    'Homemade meat sauce.',
    '14.25',
    'Pasta',
  ),
  new MenuPlate(
    'Carbonara',
    'Creamy sauce with onions, pancetta and egg yolk.',
    '14.50',
    'Pasta',
  ),
  new MenuPlate(
    'Fra Diavolo',
    'Choice of pasta with garlic spicy plum tomato sauce.',
    '12.25',
    'Pasta',
  ),
];

function createMenu() {
  // Get the main container
  const container = document.getElementById('container');

  // Create menu container div
  const menuContainer = document.createElement('div');
  // Set attributes to the menu container
  menuContainer.setAttribute('id', 'menu-container');
  menuContainer.setAttribute('class', 'bg-slate-200 flex flex-col items-center justify-center mt-24 pb-24 text-6xl hidden');
  menuContainer.innerHTML = '';

  // create Salads section
  let counter = 0;
  plates.forEach((plate) => {
    if (plate.sectionMenu.toLowerCase() === 'salads' && counter === 0) {
      // Create image object
      const pastaImage = new Image();
      // Get and assign the image url
      pastaImage.src = SaladImg;
      menuContainer.innerHTML += '<h1 class="mt-12">Salads</h1>';
      // insert the image html code
      menuContainer.innerHTML += `<img src="${pastaImage.src}">`;
      menuContainer.innerHTML += `<div class="mt-12 text-base content-font w-1/3">
                                    <h2 class="text-3xl mb-2">${plate.name}</h2>
                                    <div class="grid grid-cols-3 gap-6">
                                      <p class="col-span-2">${plate.description}</p>
                                      <p class="number-font self-start justify-self-center text-2xl">$${plate.price}</p>
                                    </div>
                                  </div>`;
      counter += 1;
    } else if (plate.sectionMenu.toLowerCase() === 'salads') {
      menuContainer.innerHTML += `<div class="mt-12 text-base content-font w-1/3">
                                    <h2 class="text-3xl mb-2">${plate.name}</h2>
                                    <div class="grid grid-cols-3 gap-6">
                                      <p class="col-span-2">${plate.description}</p>
                                      <p class="number-font self-start justify-self-center text-2xl">$${plate.price}</p>
                                    </div>
                                  </div>`;
      counter += 1;
    }
  });

  // create Pasta section
  counter = 0;
  plates.forEach((plate) => {
    if (plate.sectionMenu.toLowerCase() === 'pasta' && counter === 0) {
      // Create image object
      const pastaImage = new Image();
      // Get and assign the image url
      pastaImage.src = PastaImg;
      menuContainer.innerHTML += '<h1 class="mt-12">Pasta</h1>';
      // insert the image html code
      menuContainer.innerHTML += `<img src="${pastaImage.src}">`;
      menuContainer.innerHTML += `<div class="mt-12 text-base content-font w-1/3">
                                    <h2 class="text-3xl mb-2">${plate.name}</h2>
                                    <div class="grid grid-cols-3 gap-6">
                                      <p class="col-span-2">${plate.description}</p>
                                      <p class="number-font self-start justify-self-center text-2xl">$${plate.price}</p>
                                    </div>
                                  </div>`;
      counter += 1;
    } else if (plate.sectionMenu.toLowerCase() === 'pasta') {
      menuContainer.innerHTML += `<div class="mt-12 text-base content-font w-1/3">
                                    <h2 class="text-3xl mb-2">${plate.name}</h2>
                                    <div class="grid grid-cols-3 gap-6">
                                      <p class="col-span-2">${plate.description}</p>
                                      <p class="number-font self-start justify-self-center text-2xl">$${plate.price}</p>
                                    </div>
                                  </div>`;
      counter += 1;
    }
  });
  // Append the menu element to the DOM
  container.appendChild(menuContainer);
}

function renderMenu() {
  // get containers to hide and show
  const homeContainer = document.getElementById('home-container');
  const menuContainer = document.getElementById('menu-container');
  const contactContainer = document.getElementById('contact-container');
  const homeAboutContainer = document.getElementById('home-about-container');

  // hide home and contact - using tailwind class
  // hide => display: none;
  if (homeContainer) {
    homeContainer.classList.add('hidden');
  }
  if (contactContainer) {
    contactContainer.classList.add('hidden');
  }
  if (homeAboutContainer) {
    homeAboutContainer.classList.add('hidden');
  }

  // Display home
  if (menuContainer) {
    menuContainer.classList.remove('hidden');
  }
}

export { createMenu, renderMenu };
