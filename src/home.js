import CoverImg from './platecover.png';

function renderHome() {
  // Get DOM elements
  const container = document.getElementById('container');

  // manipulate element
  const homeContainer = document.createElement('div');
  homeContainer.setAttribute('class', 'flex grow items-center justify-center text-8xl');
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

export { renderHome };
