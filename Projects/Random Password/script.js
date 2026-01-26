// js logic

const passwordBox = document.getElementById("password");
const length = 12; // password length

// allowed characters
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "@#$%^&*()_+~|}{[]></-=";

const allChars = upperCase + lowerCase + number + symbols;

// function for generating password
function createPassword() {
    let password = "";

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // display password
    passwordBox.value = password;
}

// copy password logic
function copyPassword() {
    if (passwordBox.value) {
        navigator.clipboard.writeText(passwordBox.value).then(() => {
            // alert message
            alert("Password copied to clipboard!");
        }).catch((error) => {
            console.error("Copy failed:", error);
        });
    } else {
        // edge case
        alert("Generate a password first!");
    }
}