window.addEventListener("load", () => {
  const buttonClear = document.getElementById("clearArea");
  const buttonApply = document.getElementById("checkClientRequest");

  const canv = document.getElementById("canvasPaint");
  const ctx = canv.getContext("2d");

  canv.height = window.innerHeight;
  canv.width = window.innerWidth;

  buttonClear.addEventListener("click", function () {
    ctx.clearRect(0, 0, canv.width, canv.height);
  });

  let br = document.getElementById("clientBrushSize").value, // Brush radius
    bc = "white"; // Brush color

  let isMouseDown = false;

  buttonApply.addEventListener("click", function () {
    br = document.getElementById("clientBrushSize").value;
    bc = document.getElementById("clientColor").value;
  });

  document.addEventListener("mousedown", function () {
    isMouseDown = true;
  });

  document.addEventListener("mouseup", function () {
    isMouseDown = false;
    ctx.beginPath();
  });

  canv.addEventListener("mousemove", function (e) {
    if (isMouseDown) {
      ctx.lineTo(e.clientX, e.clientY);
      ctx.lineWidth = br * 2;
      ctx.stroke();
      ctx.strokeStyle = bc;

      ctx.beginPath();
      ctx.fillStyle = bc;
      ctx.arc(e.clientX, e.clientY, br, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(e.clientX, e.clientY);
    }
  });
});
