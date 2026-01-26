// js logic

// user input date
let userInput = document.getElementById("date");

// making future dates disable
userInput.max = new Date().toISOString().split("T")[0];

let result = document.getElementById("result");

// function to calculate age
function calculateAge() {

    // bithdate of user
    let birthDate = new Date(userInput.value);

    // getting year, month and day of the birthdate
    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    // get today's date
    let today = new Date();

    // getting year, month and day of today's date
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;

    // year difference
    y3 = y2 - y1;

    // month difference
    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    // date difference
    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }

    if (m3 < 0) {
        m3 = 11;
        y3--;
    }

    // displaying result
    result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old!`;
}

// function to calculate actual days difference
function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}