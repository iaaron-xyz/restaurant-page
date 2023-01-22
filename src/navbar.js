import { createNItems } from './utils';

function createNav(container) {
  // create navbar container
  const navContainer = document.createElement('nav');
  // set attributes to navbar
  navContainer.setAttribute('id', 'navbar');
  navContainer.setAttribute('class', 'w-full flex flex-row items-center h-24');
  // append navbar to container
  container.appendChild(navContainer);

  return navContainer;
}

function createNavItems() {
  const navbar = document.getElementById('navbar');
  // Create navbar items
  const navItems = createNItems(3, 'text-center grow', 'navItem', true);
  // Navbar items content
  const navItemsContent = ['Menu', 'Home', 'Contact'];
  // append navbar to container
  for (let i = 0; i < navItems.length; i += 1) {
    // eslint-disable-next-line no-param-reassign
    navbar.appendChild(navItems[i]).innerHTML = navItemsContent[i];
  }
  console.log(navItems);
  return navItems;
}

export { createNav, createNavItems };
