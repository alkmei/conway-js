import { Conway } from "./logic.js";
const canvas = document.getElementById("canvas");
export const ctx = canvas.getContext("2d");
canvas.height = 800;
canvas.width = 1200;

window.onload = () => {
  const e = new Conway();
  e.run();
};
