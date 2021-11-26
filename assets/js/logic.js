import { ctx } from "./index.js";
export class Conway {
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
    for (let i = 0; i < this.gridHeight; i++) {
      this.gridA[i] = [];
      for (let j = 0; j < this.gridWidth; j++) {
        this.gridA[i][j] = 0;
      }
    }
    this.gridB = JSON.parse(JSON.stringify(this.gridA));
  }
  randomizeGrid() {
    // Randomly populates grid
    for (let i = 0; i < this.gridHeight; i++) {
      for (let j = 0; j < this.gridWidth; j++) {
        this.gridA[i][j] = this.randomValue();
      }
    }
  }
  randomValue() {
    if (Math.random() > 0.6) {
      return 1;
    } else {
      return 0;
    }
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
  checkNeighbors(row, col) {
    return (
      this.gridA[(row - 1) % this.gridHeight][(col - 1) % this.gridWidth] +
      this.gridA[(row - 1) % this.gridHeight][col] +
      this.gridA[(row - 1) % this.gridHeight][(col + 1) % this.gridWidth] +
      this.gridA[row][(col - 1) % this.gridWidth] +
      this.gridA[row][(col + 1) % this.gridWidth] +
      this.gridA[(row + 1) % this.gridHeight][(col - 1) % this.gridWidth] +
      this.gridA[(row + 1) % this.gridHeight][col] +
      this.gridA[(row + 1) % this.gridHeight][(col + 1) % this.gridWidth]
    );
  }
  updateCells(row, col) {
    const neighbors = this.checkNeighbors(row, col);
    if (this.gridA[row][col] == 1) {
      if (neighbors < 2 || neighbors > 3) {
        return 0;
      } else {
        return 1;
      }
    } else {
      if (neighbors == 3) {
        return 1;
      } else {
        return 0;
      }
    }
  }
  updateGrid() {
    for (let i = 1; i < this.gridHeight; i++) {
      for (let j = 1; j < this.gridWidth; j++) {
        this.gridB[i][j] = this.updateCells(i, j);
      }
    }
    this.gridA = JSON.parse(JSON.stringify(this.gridB));
  }
  gameLoop() {
    this.updateGrid();
    this.populateGrid();
  }
  run() {
    this.createGrid();
    this.randomizeGrid();
    this.populateGrid();
    window.setInterval(() => {
      this.gameLoop();
    }, 41);
  }
}
