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
    this.gridB = this.gridA;
  }
  randomizeGrid() {
    // Randomly populates grid
    this.gridA = this.gridA.map((x) => x);
  }
  populateGrid() {
    // Populates grid w/ cells
    for (let i = 0; i < this.gridHeight; i++) {
      for (let j = 0; j < this.gridWidth; j++) {
        let color;
        if (this.gridA[i][j] == 1) {
          color = this.aliveCell;
        } else {
          color = this.deadCell;
        }
        ctx.fillStyle = color;
        ctx.fillRect(
          j * this.pixelSize,
          i * this.pixelSize,
          this.pixelSize,
          this.pixelSize
        );
      }
    }
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
  run() {
    this.createGrid();
    this.populateGrid();
  }
}

const e = new Conway();
e.run();
