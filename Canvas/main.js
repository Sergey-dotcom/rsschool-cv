const canvas = document.querySelector("#draw");
const context = canvas.getContext("2d");
const rainbowButton = document.getElementById("rainbow");
const waveButton = document.getElementById("wave");
const clearButton = document.getElementById("clear");
const colorInput = document.getElementById("color");
const widthInput = document.getElementById("width");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context.lineJoin = "round";
context.lineCap = "round";
context.lineWidth = 10;

let isDrawing = false;
let isAccrual = true;
let isRainbow = false;
let isWave = false;
let lastX = 0;
let lastY = 0;
let colorTone = 0;

function setLineColor() {
  if (isRainbow) {
    context.strokeStyle = `hsl(${colorTone}, 100%, 50%)`;
    colorTone++;
  } else {
    context.strokeStyle = colorInput.value;
  }
  if (colorTone >= 360) {
    colorTone = 0;
  }
}

function setLineWidth() {
  if (isWave) {
    if (context.lineWidth > 0 && context.lineWidth <= 10) {
      isAccrual = true;
    }
    if (context.lineWidth >= 100) {
      isAccrual = false;
    }
    if (isAccrual) {
      context.lineWidth++;
    } else {
      context.lineWidth--;
    }
  } else {
    context.lineWidth = widthInput.value;
  }
  document.getElementById("px").innerHTML = `${widthInput.value}px`;
}

function draw(e) {
  if (!isDrawing) return;
  setLineColor();
  setLineWidth();
  context.beginPath();
  context.moveTo(lastX, lastY);
  context.lineTo(e.offsetX, e.offsetY);
  context.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));

rainbowButton.addEventListener("click", () => {
  isRainbow = !isRainbow;
  rainbowButton.classList.toggle("active");
});

waveButton.addEventListener("click", () => {
  isWave = !isWave;
  wave.classList.toggle("active");
});

clearButton.addEventListener("click", () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
});

colorInput.addEventListener("input", setLineColor);
colorInput.addEventListener("click", () => {
  isRainbow = false;
  rainbowButton.classList.remove("active");
});

widthInput.addEventListener("input", setLineWidth);
widthInput.addEventListener("change", () => {
  isWave = false;
  waveButton.classList.remove("active");
});
