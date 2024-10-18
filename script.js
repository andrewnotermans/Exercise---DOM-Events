const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");

// Function to delete the parent list item (li) when delete button is clicked
function deleteListItem(event) {
    if (event.target.classList.contains("delete-button")) {
        const li = event.target.parentNode;
        li.remove();
    }
}

// Function to create a new list item with a delete button
function addNewItem() {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.appendChild(document.createTextNode("Delete"));
    li.appendChild(deleteButton);

    ul.appendChild(li);
    input.value = ""; // Clear input after adding
}

// Function to handle item addition after button click
function addListAfterClick() {
    if (input.value.trim()) { // Ensure non-empty input
        addNewItem();
    }
}

// Function to handle item addition after pressing 'Enter'
function addListAfterKeypress(event) {
    if (input.value.trim() && event.key === "Enter") { // Check for Enter key
        addNewItem();
    }
}

// Function to toggle 'done' class on list items
function toggleDone(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("done");
    }
}

// Use event delegation to handle delete button clicks and item toggling
ul.addEventListener("click", function (event) {
    deleteListItem(event); // Handle delete button click
    toggleDone(event); // Handle item toggling
});

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
