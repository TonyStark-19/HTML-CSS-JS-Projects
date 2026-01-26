// js logic

let toastBox = document.getElementById('toastBox');

// adding icons and message for each notification
let successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully submitted';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error!';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again';

// function to show toast notification
function showToast(msg) {

    // creates div with classname toast
    let toast = document.createElement('div');
    toast.classList.add('toast');

    // adds msg to the div
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    // added error classlist
    if (msg.includes('error')) {
        toast.classList.add('error');
    }

    // added invalid classlist
    if (msg.includes('Invalid')) {
        toast.classList.add('Invalid');
    }

    // time duration for toast notification
    setTimeout(() => {
        toast.remove();
    }, 5000);
}