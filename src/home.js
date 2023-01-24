import CoverImg from './platecover.png';
import AboutImg from './about.jpg';

function createHome() {
  // Get DOM elements
  const container = document.getElementById('container');

  // manipulate element
  const homeContainer = document.createElement('div');
  homeContainer.setAttribute('class', 'flex grow items-center justify-center text-8xl mt-24 hidden');
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

function createHomeAbout() {
  // Get DOM Elements
  const container = document.getElementById('container');

  // create and manipulate about div
  const homeAboutContainer = document.createElement('div');
  homeAboutContainer.setAttribute('class', 'grid grid-cols-2 mt-16 bg-amber-900 text-white hidden');
  homeAboutContainer.setAttribute('id', 'home-about-container');
  // Create image object
  const aboutImage = new Image();
  // Get and assign the image url
  aboutImage.src = AboutImg;
  homeAboutContainer.innerHTML = `<div class="place-self-center p-12">
                                    <h2>We have serving our dishes since 1975</h2>
                                    <p class="text-xl pt-8 content-font">
                                      Past and Salads elements of traditional Italian Cuisine come together with
                                      attention to detail and antique furniture, making it a pleasant and charming place to eat.
                                      Its dining room with a fireplace for cold winter evenings and a pergola for warm
                                      summer evenings is equally inviting.
                                    </p>
                                    <p class="text-xl pt-8 content-font">
                                      The Braidot family has been running this restaurant for 50 years, with Luca in the kitchen and his wife Barbara
                                      in the dining room.
                                    </p>
                                  </div>
                                  <div class="place-self-center">
                                    <img src="${aboutImage.src}" class="offset-position">
                                  </div>`;

  container.appendChild(homeAboutContainer);
}

function renderHome() {
  // get containers to hide and show
  const homeContainer = document.getElementById('home-container');
  const menuContainer = document.getElementById('menu-container');
  const contactContainer = document.getElementById('contact-container');
  const homeAboutContainer = document.getElementById('home-about-container');

  // hide menu and contact - using tailwind class
  // hide => display: none;
  if (menuContainer) {
    menuContainer.classList.add('hidden');
  }
  if (contactContainer) {
    contactContainer.classList.add('hidden');
  }

  // Display home
  if (homeContainer) {
    homeContainer.classList.remove('hidden');
  }
  if (homeAboutContainer) {
    homeAboutContainer.classList.remove('hidden');
  }
}

export { renderHome, createHome, createHomeAbout };
