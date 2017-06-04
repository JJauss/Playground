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
    count += this.countOfLiving(this.left);
    count += this.countOfLiving(this.right);
    return count;
  }

  private countOfLiving(cell?: Cell): number {
    if (cell) {
      return cell.isAlive() ? 1 : 0;
    }
    return 0;
  }
}


