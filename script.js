// Function to load items from localStorage
function loadItemsFromLocalStorage() {
  let storedItems = JSON.parse(localStorage.getItem('listItems')) || [];
  // Populate the list with the stored items
  storedItems.forEach(item => {
    let li = createListItem(item);
    document.getElementById("myUL").appendChild(li);
  });
}

// Function to create a new list item
function createListItem(text) {
  let li = document.createElement("li");
  li.textContent = text;

  let closeButton = document.createElement("button");
  closeButton.className = "close";
  closeButton.textContent = "\u00D7"; // Set the text content directly

  closeButton.onclick = function() {
    li.style.display = "none";
    removeItemFromLocalStorage(text);
  };

  li.appendChild(closeButton);
  return li;
}

// Function to remove an item from localStorage
function removeItemFromLocalStorage(text) {
  let storedItems = JSON.parse(localStorage.getItem('listItems')) || [];
  storedItems = storedItems.filter(item => item !== text);
  localStorage.setItem('listItems', JSON.stringify(storedItems));
}

// Load items from localStorage when the DOM is ready
document.addEventListener('DOMContentLoaded', loadItemsFromLocalStorage);

// Create a new list item when clicking on the "Add" button
function newElement() {
  let inputValue = document.getElementById("myInput").value.trim();
  if (inputValue === '') {
    alert("You must write something!");
    return;
  }

let li = createListItem(inputValue);
document.getElementById("myUL").appendChild(li);
let storedItems = JSON.parse(localStorage.getItem('listItems')) || [];
storedItems.push(inputValue);
localStorage.setItem('listItems', JSON.stringify(storedItems));
document.getElementById("myInput").value = "";
}

// Get the HTML button and add a click event listener
document.getElementById('addBtn').addEventListener('click', newElement);

// document.getElementById("myAnchor").addEventListener("click", function(event){
//   event.preventDefault()
// });
