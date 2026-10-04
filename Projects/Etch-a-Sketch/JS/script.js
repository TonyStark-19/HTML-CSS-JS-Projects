const toy = document.getElementById("toy");
const grid = document.getElementById("grid");
const sizeInput = document.getElementById("size");
const sizeLabel = document.getElementById("size-label");
const linesToggle = document.getElementById("lines");
const clearBtn = document.getElementById("clear");
const modeButtons = document.querySelectorAll(".mode-btn");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const INK = "38, 38, 38";
const MAX_LEVEL = 10;

let mode = "classic";

function buildGrid(size) {
    grid.style.setProperty("--n", size);
    grid.replaceChildren();

    const fragment = document.createDocumentFragment();
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        fragment.appendChild(cell);
    }
    grid.appendChild(fragment);
}

function paint(cell) {
    switch (mode) {
        case "classic":
            cell.style.backgroundColor = `rgb(${INK})`;
            cell.dataset.level = MAX_LEVEL;
            break;

        case "rainbow": {
            const hue = Math.floor(Math.random() * 360);
            cell.style.backgroundColor = `hsl(${hue} 85% 55%)`;
            cell.dataset.level = MAX_LEVEL;
            break;
        }

        case "darken": {
            const level = Math.min(MAX_LEVEL, Number(cell.dataset.level || 0) + 1);
            cell.dataset.level = level;
            cell.style.backgroundColor = `rgba(${INK}, ${level / MAX_LEVEL})`;
            break;
        }

        case "eraser":
            cell.style.backgroundColor = "";
            delete cell.dataset.level;
            break;
    }
}

function drawAt(event) {
    const element = document.elementFromPoint(event.clientX, event.clientY);
    if (element && element.classList.contains("cell")) {
        paint(element);
    }
}

function clearGrid() {
    const size = Number(sizeInput.value);

    if (reduceMotion.matches) {
        buildGrid(size);
        return;
    }

    toy.classList.add("shake");
    toy.addEventListener(
        "animationend",
        () => toy.classList.remove("shake"),
        { once: true }
    );
    setTimeout(() => buildGrid(size), 220);
}

// Drawing: hover with a mouse, or drag with touch / pen
grid.addEventListener("pointermove", drawAt);
grid.addEventListener("pointerdown", drawAt);

// Grid size: update label while dragging, rebuild on release
sizeInput.addEventListener("input", () => {
    sizeLabel.textContent = `${sizeInput.value} × ${sizeInput.value}`;
});
sizeInput.addEventListener("change", () => buildGrid(Number(sizeInput.value)));

// Modes
modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        mode = button.dataset.mode;
        modeButtons.forEach((b) =>
            b.setAttribute("aria-pressed", String(b === button))
        );
    });
});

// Grid lines and clear
linesToggle.addEventListener("change", () => {
    grid.classList.toggle("show-lines", linesToggle.checked);
});
clearBtn.addEventListener("click", clearGrid);

buildGrid(Number(sizeInput.value));