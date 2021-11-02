const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
class Conway {
  constructor(pixelSize, cellNum) {
    this.pixelSize = pixelSize;
    this.cellNum = cellNum;
    canvas.width = pixelSize * cellNum;
  }
  createGrid() {
    // Create grid thats cellNum*cellNum dimension
    let gridA = [];
    for (let i = 0; i < this.cellNum; i++) {
      let gridInner = [];
    }
  }
  populateGrid() {
    // Randomly populates grid w/ cells
  }
  checkNeighbors() {
    // Returns number of living neighbors
  }
  gameLoop() {
    // One game loop to append to new list
  }
  run() {}
}
