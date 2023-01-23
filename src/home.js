function createHomeContainer() {
  // Get DOM elements
  const container = document.getElementById('container');

  // manipulate element
  const homeContainer = document.createElement('div');
  homeContainer.setAttribute('class', 'flex grow items-center justify-center text-8xl');
  homeContainer.setAttribute('id', 'home-container');
  // Add content
  homeContainer.innerHTML = 'Home Container';

  // Add element to the DOM
  container.appendChild(homeContainer);

  console.log(container);
}

export { createHomeContainer };
