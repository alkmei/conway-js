const domSel = {
  canvas: document.getElementById("canvas"),
};
const ctx = domSel.canvas.getContext("2d");

ctx.fillStyle = "green";
ctx.fillRect(10, 10, 150, 100);
