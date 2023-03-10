import { createNav, createNavItems } from './navbar';
import { renderHome, createHome, createHomeAbout } from './home';
import { createMenu, renderMenu } from './menu';
import { createContact, renderContact } from './contact';
import './mean.css';

/**
 * Initial functions
 */
function initializeHtml() {
  // Setup basic html container
  // get the body element
  const html = document.getElementsByTagName('html')[0];
  const body = document.getElementsByTagName('body')[0];
  // Set attributes to body and html
  // html.setAttribute('class', 'h-full w-full box-border bg-black text-white');
  // Generate the main continer
  const container = document.createElement('div');
  // Add id and classes
  container.setAttribute('id', 'container');
  container.setAttribute('class', 'text-4xl h-full w-full flex flex-col');

  // Render the container div
  body.appendChild(container);

  return { html, body, container };
}

/**
 * Render General Setup
 */
// Initilize basic html content components
const baseElements = initializeHtml();
createNav(baseElements.container);
createNavItems();

/**
 * Add Home content
 */
createHome();
createHomeAbout();
createMenu();
createContact();
renderHome();

/**
 * Event Listeners
 */
document.getElementById('navItem1').addEventListener('click', renderHome);
document.getElementById('navItem0').addEventListener('click', renderMenu);
document.getElementById('navItem2').addEventListener('click', renderContact);
