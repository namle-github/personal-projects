const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');


var isPressed = false;
var size = 30;
var x = undefined;
var y = undefined;
var color = '#000';

canvas.addEventListener("mousedown", (e) => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
})

canvas.addEventListener("mouseup", () => {
    isPressed = false;
    x = undefined;
    y = undefined;
})

canvas.addEventListener("mouseleave", () => {
    isPressed = false;
})

canvas.addEventListener("mousemove", (e) => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        drawLine(x, y, x2, y2);
        drawCircle(x2, y2);
        x = x2;
        y = y2;
        console.log(x, y, x2, y2);

    }
})

function drawCircle(a, b) {
    ctx.beginPath();
    ctx.arc(a, b, size, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

function updateSizeOnScreen() {
    sizeEl.innerText = size;
}

decrease.addEventListener('click', () => {
    size -= 5;

    if (size < 5) {
        size = 5;
    }
    console.log(size);

    updateSizeOnScreen();
});

increase.addEventListener('click', () => {
    size += 5;

    if (size > 50) {
        size = 50;
    }

    updateSizeOnScreen();
});

colorEl.addEventListener('change', (e) => {
    color = e.target.value;
});

clearEl.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})