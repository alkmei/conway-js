const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.height = 500;
canvas.width = 1400;

class Conway {
  constructor() {
    this.pixelSize = 5;
    this.gridHeight = Math.floor(canvas.height / this.pixelSize);
    this.gridWidth = Math.floor(canvas.width / this.pixelSize);
    this.deadCell = "#f7dedc";
    this.aliveCell = "#383030";
    this.gridA = [];
    this.gridB = [];
  }
  createGrid() {
    // Create grid thats gridHeight*gridWidth dimension
    for (let i = 0; i < this.gridWidth; i++) {
      this.gridA[i] = [];
      for (let j = 0; j < this.gridHeight; j++) {
        this.gridA[i][j] = 0;
      }
    }
    this.gridB = 
  }
  randomizeGrid() {
    // Randomly populates grid
  }
  populateGrid() {
    // Randomly populates grid w/ cells
  }
  drawGrid() {
    // Fill canvas with grid
  }
  checkNeighbors() {
    // Returns number of living neighbors
  }
  gameLoop() {
    // One game loop to append to new list
  }
  run() {}
}
