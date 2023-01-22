import { homeTest } from './home';
import { menuTest } from './menu';
import { contactTest } from './contact';
import './mean.css';

// get the body element
const html = document.getElementsByTagName('html')[0];
const body = document.getElementsByTagName('body')[0];
// Set attributes to body and html
body.setAttribute('class', 'h-full w-full');
html.setAttribute('class', 'h-full w-full box-border bg-black text-white border-solid border-2 border-sky-500');

// Generate the main continer
const container = document.createElement('div');
// Add it an id
container.setAttribute('id', 'container');
container.setAttribute('class', 'text-3xl font-bold underline');
// Render the container div
body.appendChild(container);

// Insert text inside the container
container.textContent = 'This is a generated text';

console.log('This restaurnat page is working');
console.log(homeTest());
console.log(menuTest());
console.log(contactTest());
