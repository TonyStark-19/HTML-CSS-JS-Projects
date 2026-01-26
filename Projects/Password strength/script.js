// js logic

var pass = document.getElementById("password");
var msg = document.getElementById("message");
var str = document.getElementById("strength");

// add event listener
pass.addEventListener('input', () => {

    // if password is empty
    if (pass.value.length > 0) {
        msg.style.display = "block";
    }

    // if password has some character
    else {
        msg.style.display = "none";
    }

    // if password is less than 4 chars
    if (pass.value.length < 4) {
        str.innerHTML = "weak";
        pass.style.borderColor = "#ff5925";
        msg.style.color = "#ff5925";
    }

    // if password is greater and equal to 4 chars && less than 8 chars
    else if (pass.value.length >= 4 && pass.value.length < 8) {
        str.innerHTML = "medium";
        pass.style.borderColor = "yellow";
        msg.style.color = "yellow";
    }

    // if password is greater and equal to 8 chars
    else if (pass.value.length >= 8) {
        str.innerHTML = "strong";
        pass.style.borderColor = "#26d730";
        msg.style.color = "#26d730";
    }
});