// get elements
let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

// hide/show password
eyeicon.onclick = function () {
    if (password.type === "password") {
        password.type = "text";
        eyeicon.classList.remove("fa-eye-slash");
        eyeicon.classList.add("fa-eye");
    } else {
        password.type = "password";
        eyeicon.classList.remove("fa-eye");
        eyeicon.classList.add("fa-eye-slash");
    }
};