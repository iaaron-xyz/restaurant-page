import { homeTest } from './home';
import { menuTest } from './menu';
import { contactTest } from './contact';
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
