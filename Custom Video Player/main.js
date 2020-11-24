const video = document.querySelector(".viewer");
const btnToggle = document.querySelector(".toggle");
const range = document.querySelectorAll(".player-slider");
const btnSkip = document.querySelectorAll("[data-skip]");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress-field");
const size = document.querySelector(".over-size");
const player = document.querySelector(".player");

function playVideo() {
  video[video.paused ? "play" : "pause"]();
}
function changeIcon() {
  btnToggle.textContent = video.paused ? "►" : "❚ ❚";
}
function currentTime() {
  video.currentTime += parseFloat(this.dataset.skip);
}
function changeRange() {
  video[this.name] = this.value;
}
function changeProgress(e) {
  let scrub = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrub;
}
function changBar() {
  let persent = (this.currentTime / this.duration) * 100;
  progressBar.style.width = `${persent}%`;
}
function fullScreen() {
  player.classList.toggle("full-screen");
}

video.addEventListener("click", playVideo);
video.addEventListener("play", changeIcon);
video.addEventListener("pause", changeIcon);
video.addEventListener("timeupdate", changBar);

btnToggle.addEventListener("click", playVideo);
btnSkip.forEach((skip) => skip.addEventListener("click", currentTime));
range.forEach((slider) => slider.addEventListener("change", changeRange));
range.forEach((slider) => slider.addEventListener("mousemove", changeRange));

size.addEventListener("click", fullScreen);

let mouseUse = false;
progress.addEventListener("mousemove", (e) => mouseUse && changeProgress(e));
progress.addEventListener("mousedown", () => (mouseUse = true));
progress.addEventListener("mouseup", () => (mouseUse = false));
progress.addEventListener("click", changeProgress);
