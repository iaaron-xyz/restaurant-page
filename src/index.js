import {homeTest} from './home.js';
import {menuTest} from './menu.js';
import {contactTest} from './contact.js';
import './styles.css';

// get the body element
const body = document.getElementsByTagName('body')[0];

// Generate the main continer
const container = document.createElement('div');
// Add it an id
container.setAttribute('id', 'container');
// Render the container div
body.appendChild(container);

// Insert text inside the container
container.textContent = 'This is a generated text';

console.log('This restaurnat page is working');
console.log(homeTest());
console.log(menuTest());
console.log(contactTest());