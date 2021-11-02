class Conway {
  constructor() {
    this.gridA = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ];
    this.gridB = JSON.parse(JSON.stringify(this.gridA));
  }
  checkNeighbors(row, col) {
    return (
      this.gridA[row - 1][col - 1] +
      this.gridA[row - 1][col] +
      this.gridA[row - 1][col + 1] +
      this.gridA[row][col - 1] +
      this.gridA[row][col + 1] +
      this.gridA[row + 1][col - 1] +
      this.gridA[row + 1][col] +
      this.gridA[row + 1][col + 1]
    );
  }
  gameLoop() {
    for (let row = 1; row < this.gridA.length - 1; row++) {
      for (let col = 1; col < this.gridA[0].length - 1; col++) {
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

export { Conway };
