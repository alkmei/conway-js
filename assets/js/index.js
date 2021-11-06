const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.height = canvas.width = 1000;

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
    this.gridB = JSON.parse(JSON.stringify(this.gridA));
  }
  randomizeGrid() {
    // Randomly populates grid
    for (let i = 0; i < this.gridWidth; i++) {
      this.gridA[i] = [];
      for (let j = 0; j < this.gridHeight; j++) {
        this.gridA[i][j] = Math.round(Math.random());
      }
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
  checkValidNeighbor(row, col) {
    // check whether neighbor is valid
    // TODO:
    // Fix sides staying
    try {
      return this.gridA[row][col];
    } catch {
      return 0;
    }
  }
  checkNeighbors(row, col) {
    // Returns number of living neighbors
    return (
      this.checkValidNeighbor(row - 1, col - 1) +
      this.checkValidNeighbor(row - 1, col) +
      this.checkValidNeighbor(row - 1, col + 1) +
      this.checkValidNeighbor(row, col - 1) +
      this.checkValidNeighbor(row, col + 1) +
      this.checkValidNeighbor(row + 1, col - 1) +
      this.checkValidNeighbor(row + 1, col) +
      this.checkValidNeighbor(row + 1, col + 1)
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
      }
    }
  }
  updateGrid() {
    for (let i = 0; i < this.gridHeight; i++) {
      for (let j = 0; j < this.gridWidth; j++) {
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
    }, 30);
  }
}

window.onload = () => {
  const e = new Conway();
  e.run();
};
