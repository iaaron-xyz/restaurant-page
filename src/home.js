import CoverImg from './platecover.png';

function createHome() {
  // Get DOM elements
  const container = document.getElementById('container');

  // manipulate element
  const homeContainer = document.createElement('div');
  homeContainer.setAttribute('class', 'flex grow items-center justify-center text-8xl hidden');
  homeContainer.setAttribute('id', 'home-container');
  // Add image
  // Create image object
  const myImg = new Image();
  // Get and assign the image url
  myImg.src = CoverImg;
  // insert the image html code
  homeContainer.innerHTML = `<img src="${myImg.src}" class="h-4/5">`;
  // Add element to the DOM
  container.appendChild(homeContainer);
}

function renderHome() {
  // get containers to hide and show
  const homeContainer = document.getElementById('home-container');
  const menuContainer = document.getElementById('menu-container');
  // const contactContainer = document.getElementById('contact-container');

  // hide menu and contact - using tailwind class
  // hide => display: none;
  if (menuContainer) {
    menuContainer.classList.add('hidden');
  }
  // if (contactContainer) {
  // contactContainer.classList.add('hide');
  // }

  // Display home
  if (homeContainer) {
    homeContainer.classList.remove('hidden');
  }
}

export { renderHome, createHome };
