// js logic

// intialising timer
let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById("displayTime");
let timer = null;

// stopwatch function
function stopwatch() {

    // timer logic
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;

        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    // display timer
    displayTime.innerHTML = h + ":" + m + ":" + s;
}

// function to start the watch
function watchStart() {
    if (timer != null) {
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 1000);
}

// function to stop the watch
function watchStop() {
    clearInterval(timer);
}

// function to reset the watch
function watchReset() {
    clearInterval(timer);
    timer = null;
    [seconds, minutes, hours] = [0, 0, 0];
    displayTime.innerHTML = "00:00:00";
}