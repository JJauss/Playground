export type CellState = "alive" | "dead";
export class Cell {
  constructor(
    public state: CellState,
    public left?: Cell,
    public right?: Cell) {

  }

  public isAlive(): boolean {
    return this.state === "alive";
  }

  public nextDayState(): CellState {
    let state: CellState = "dead";
    if (this.countOfLivingNeigbours() === 1) {
      state = "alive";
    }
    return state;
  }

  private countOfLivingNeigbours() {
    let count: number = 0;
    count += (this.left && this.left.isAlive()) ? 1 : 0;
    count += (this.right && this.right.isAlive()) ? 1 : 0;
    return count;
  }
}


