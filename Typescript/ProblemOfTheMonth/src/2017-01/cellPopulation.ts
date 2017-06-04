import { Cell, CellState } from "./cell";

export class CellPopulation {
  public cells: Cell[] = new Array<Cell>();


  public push(state: CellState) {
    this.cells.push(new Cell(state));
  }
  public nextDay(): CellPopulation {
    this.initPopulation();

    const nextDayPopulation = new CellPopulation();
    for (const cell of this.cells) {
      const newState: CellState = cell.nextDayState();
      nextDayPopulation.cells.push(new Cell(newState));
    }
    return nextDayPopulation;
  }

  private initPopulation(): void {
    for (let index = 0; index < this.cells.length; index++) {
      this.cells[index].left = this.cells[index - 1];
      this.cells[index].right = this.cells[index + 1];
    }
  }
}
