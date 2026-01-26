// js logic

var selectField = document.getElementById("selectField");
var selectText = document.getElementById("selectText");
var options = document.getElementsByClassName("options");
var list = document.getElementById("list");
var arrow = document.getElementById("arrow");

// hide the list function
selectField.onclick = function () {
    list.classList.toggle("hide");
    // rotates the down arrow
    arrow.classList.toggle("rotate");
}

// select list items
for (option of options) {
    option.onclick = function () {
        selectText.innerHTML = this.textContent;
        list.classList.toggle("hide");
        // rotates the down arrow
        arrow.classList.toggle("rotate");
    }
}