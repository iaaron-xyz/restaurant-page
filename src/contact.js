function createContact() {
  // Get the main container
  const container = document.getElementById('container');

  // Create menu container div
  const contactContainer = document.createElement('div');
  // Set attributes to the menu container
  contactContainer.setAttribute('id', 'contact-container');
  contactContainer.setAttribute('class', 'flex flex-col items-center justify-center hidden');
  // create menu elements
  contactContainer.innerHTML = `<div class="flex flex-col items-center justify-center text-3xl border-solid border-2 border-amber-500 p-14 mt-20">
                                  <h2 class="pb-24 text-4xl">Contact Section</h2>
                                  <div class="grid grid-cols-2 content-font gap-24 pb-8">
                                    <input type="text" id="name" placeholder="Your Name" class="border-b-2 border-solid border-amber-800">
                                    <input type="text" id"phone" placeholder="Your Phone" class="border-b-2 border-solid border-amber-800">
                                  </div>
                                  <div class="grid grid-cols-3 number-font gap-12 mt-16">
                                    <select id="persons" placeholder="2 Persons" class="border-b-2 border-solid border-amber-800">
                                      <option value="1-person">1 Person</option>
                                      <option value="2-person">2 Persons</option>
                                      <option value="3-person">3 Persons</option>
                                      <option value="4-person">4 Persons</option>
                                    </select>
                                    </select>
                                    <input type="date" id"date" value="date" class="border-b-2 border-solid border-amber-800">
                                    <input type="time" id"time" value="time" class="border-b-2 border-solid border-amber-800">
                                  </div>
                                  <button type="button" class="p-3 content-font text-white bg-amber-800 border-2 border-solid border-amber-200 mt-24">Book a Table!</button>
                                </div>`;
  contactContainer.innerHTML += `<div class="pt-20 text-center content-font">
                                  <p>Or call us and Book for tonight!</p>
                                  <p>+39 0345 3234</p>
                                </div>`;
  // Append the menu element to the DOM
  container.appendChild(contactContainer);
}

function renderContact() {
  console.log('Render menu ready!');
  // get containers to hide and show
  const homeContainer = document.getElementById('home-container');
  const menuContainer = document.getElementById('menu-container');
  const contactContainer = document.getElementById('contact-container');

  // hide menu and contact - using tailwind class
  // hidden => display: none;
  if (homeContainer) {
    homeContainer.classList.add('hidden');
  }
  if (menuContainer) {
    menuContainer.classList.add('hidden');
  }

  // Display home
  if (contactContainer) {
    contactContainer.classList.remove('hidden');
  }
}

export { createContact, renderContact };
