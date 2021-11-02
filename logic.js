class Conway {
  constructor() {
    this.gridA = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ];
    this.gridB = JSON.parse(JSON.stringify(this.gridA));
  }
  checkNeighbors(row, col) {
    let livingNeighbors = 0;
    if (this.gridA[row - 1][col - 1] == 1) {
      livingNeighbors++;
    }
    if (this.gridA[row - 1][col] == 1) {
      livingNeighbors++;
    }
    if (this.gridA[row - 1][col + 1] == 1) {
      livingNeighbors++;
    }
    if (this.gridA[row][col - 1] == 1) {
      livingNeighbors++;
    }
    if (this.gridA[row][col + 1] == 1) {
      livingNeighbors++;
    }
    if (this.gridA[row + 1][col - 1] == 1) {
      livingNeighbors++;
    }
    if (this.gridA[row + 1][col] == 1) {
      livingNeighbors++;
    }
    if (this.gridA[row + 1][col + 1] == 1) {
      livingNeighbors++;
    }
    return livingNeighbors;
  }
  gameLoop() {
    for (let row = 1; row < 4; row++) {
      for (let col = 1; col < 6; col++) {
        const neighborCount = this.checkNeighbors(row, col);
        if (this.gridA[row][col] == 1) {
          if (neighborCount < 2 || neighborCount > 3) {
            this.gridB[row][col] = 0;
          } else {
            this.gridB[row][col] = 1;
          }
        } else {
          if (neighborCount == 3) {
            this.gridB[row][col] = 1;
          }
        }
      }
    }
  }

  updateGrids() {
    this.gridA = JSON.parse(JSON.stringify(this.gridB));
  }
  run() {
    this.gameLoop();
    this.gridB.forEach((i) => {
      console.log(i);
    });
    this.updateGrids();
  }
}

const e = new Conway();
e.run();
