import { Conway } from "./logic.js";
const canvas = document.getElementById("canvas");
export const ctx = canvas.getContext("2d");
canvas.height = 600;
canvas.width = 1080;

window.onload = () => {
  const e = new Conway();
  e.run();
};
