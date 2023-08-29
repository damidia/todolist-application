const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// addTask() function will be executed when we click on the button (Add)
function addTask(){
    // If the input box is empty
    if(inputBox.value === ''){
        // An alert will be sent to the user
        alert("You must write something!");
    } 
    // If the input box is not empty
    else {
        // Creating HTML element with the tag name "li". Element stored in varable li.
        let li = document.createElement("li") 
        // Text added in the input field will be the innerHTML of the HTML element with tag name "li" created above.
        li.innerHTML = inputBox.value;
        // List item created above will be displayed inside the list-container.
        listContainer.appendChild(li);
        // Add a cross icon at the end of the list item that can be used to delete the particular task.
        let span = document.createElement("span")
        // Will add a cross(X) icon in the span tag.
        span.innerHTML = "\u00d7";
        // Display the span tag
        li.appendChild(span);
    }
    // Clear the input field after adding the text.
    inputBox.value = "";
    saveData();
}

// Listen for 'Enter' keydown
document.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') {
        addTask();
    }
})

// Whenver we click in the listContainer where we have stored all the tasks.
listContainer.addEventListener("click", function(event){
    // Check if the clicked target element inside listContainer is a list item(LI). Checks if a 
    // task/todo was clicked.
    if (event.target.tagName === "LI") {
        // Toggle "checked" class name to the LI Tag that we have clicked, when an LI Tag is 
        // clicked.
        event.target.classList.toggle("checked");
        saveData();
    }
    // Check if the clicked target element inside listContainer is a span(SPAN). Checks if Cross 
    // was clicked.
    else if (event.target.tagName === "SPAN") {
        // Will delete the parent element of the SPAN Tag. When cross is clicked, the associated
        // task/todo(parent LI) will be deleted
        event.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTasks() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTasks();