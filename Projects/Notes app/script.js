// js logic

const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

// show notes if any stored in local storage
function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}

// function call
showNotes();

// update storage function
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

// create notes
createBtn.addEventListener("click", () => {
    // create note div
    let noteDiv = document.createElement("div");
    noteDiv.className = "note";

    // create p tag
    let inputBox = document.createElement("p");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");

    // create icon
    let icon = document.createElement("i");
    icon.className = 'fa-solid fa-trash-can';

    // add p and i in note div
    noteDiv.appendChild(inputBox);
    noteDiv.appendChild(icon);
    // add note div in notes container
    notesContainer.appendChild(noteDiv);

    // update storage
    updateStorage();
});

// delete notes
notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "I") {
        e.target.parentElement.remove();
        updateStorage();
    }
});

// update storage for added notes
notesContainer.addEventListener("keyup", function (e) {
    if (e.target.classList.contains("input-box")) {
        updateStorage();
    }
});

// add new line if enter key is pressed
document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})