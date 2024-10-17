// Function to dynamically load Sortable.js from the CDN
function loadSortable(callback) {
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/sortablejs@latest/Sortable.min.js'; // CDN link
  script.onload = callback; // Once the script is loaded, run the callback
  document.head.appendChild(script);
}

// Callback function to run the drag-and-drop functionality after Sortable.js is loaded
loadSortable(() => {
  enableDragAndDrop();
});

// Drag-and-drop function using Sortable.js
function enableDragAndDrop() {
  // Get the specific container for all module cards
  const moduleContainer = document.getElementById('moduleCardsContainer');

  // Initialize Sortable.js on the container holding the module cards
  if (moduleContainer) {
    // Initialize Sortable for the entire container, affecting all child module cards
    new Sortable(moduleContainer, {
      animation: 300, // Smooth animation
      ghostClass: 'ghost', // Class for the ghost element
      dragClass: 'dragging', // Class for the dragged item
      handle: '.module_card', // Ensure the entire module card can be dragged
      onEnd: function (evt) {
        console.log('Drag-and-drop operation completed');
        updateLocalStorage(); // Save the new order after dragging
      }
    });
    console.log('Sortable initialized for all module cards');
  } else {
    console.error('moduleCardsContainer not found!');
  }
}

// Optional: Function to update the module order in localStorage after drag-and-drop
function updateLocalStorage() {
  const moduleContainer = document.getElementById('moduleCardsContainer');
  const modules = moduleContainer.querySelectorAll('.module_card');

  const newOrder = Array.from(modules).map((module, index) => ({
    title: module.querySelector('#ModuleTitle').innerText,
    order: index
  }));

  console.log('Saving new order to localStorage:', newOrder);

  // Save the new order to localStorage (or update your backend)
  localStorage.setItem('moduleOrder', JSON.stringify(newOrder));
}
