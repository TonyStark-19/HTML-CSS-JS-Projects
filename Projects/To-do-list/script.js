// js logic

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// add task function
function addTask() {
    if (inputBox.value == '') {
        // if empty
        alert("You must write something!");
    }
    else {
        // create new tast with input value
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // cross icon
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    // clear input field
    inputBox.value = "";
    // save data in local memeory
    saveData();
}

// function for tast item
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        // toggle checked class
        e.target.classList.toggle("checked");
        // save data in local memeory
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        // remove task when cross icon is clicked
        e.target.parentElement.remove();
        // save data in local memeory
        saveData();
    }
}, false);

// function to save data in local storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// function to get data
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

// function call for get data
showTask();