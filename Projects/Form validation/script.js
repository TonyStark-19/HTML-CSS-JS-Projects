// js logic

var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

// name validation
function validateName() {
    var name = document.getElementById("contact-name").value;

    // if it is empty
    if (name.length == 0) {
        nameError.innerHTML = "Name is required";
        return false;
    }
    // word space word ( to check full name )
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "Write full name";
        return false;
    }

    // if valid then show icon and return true
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

// phone number validation
function validatePhone() {
    var phone = document.getElementById("contact-phone").value;

    // if it is empty
    if (phone.length == 0) {
        phoneError.innerHTML = "Phone no is required";
        return false;
    }
    // if phone number is less than 10 digits
    if (phone.length !== 10) {
        phoneError.innerHTML = "Phone no should be 10 digits";
        return false;
    }
    // if number container character other than 0 to 9
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "Only digits please..";
        return false;
    }

    // if valid then show icon and return true
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

// email validation
function validateEmail() {
    var email = document.getElementById("contact-email").value;

    // if it is empty
    if (email.length == 0) {
        emailError.innerHTML = "Email is required";
        return false;
    }
    // to check if email is valid
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = "Email Invalid";
        return false;
    }

    // if valid then show icon and return true
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

// message validation
function validateMessage() {
    var message = document.getElementById("contact-message").value;
    var required = 30;
    var left = required - message.length;

    // if required character condition is not met
    if (left > 0) {
        messageError.innerHTML = left + ' more characters required';
        return false;
    }

    // if valid then show icon and return true
    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

// form validation
function validateForm() {
    // if any of the validation is not true
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        // show error message for limited time
        submitError.style.display = "block";
        submitError.innerHTML = "Please fix error to submit!";
        setTimeout(function () { submitError.style.display = "none"; }, 3000);
        return false;
    }
}