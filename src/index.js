import { createNav, createNavItems } from './navbar';
// import { homeTest } from './home';
// import { menuTest } from './menu';
// import { contactTest } from './contact';
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
  body.setAttribute('class', 'h-full w-full');
  html.setAttribute('class', 'h-full w-full box-border bg-black text-white');
  // Generate the main continer
  const container = document.createElement('div');
  // Add id and classes
  container.setAttribute('id', 'container');
  container.setAttribute('class', 'text-3xl font-bold');

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

// Insert text inside the container
// container.textContent = 'This is a generated text';
