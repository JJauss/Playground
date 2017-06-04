import { Cell, CellState } from "./cell";
import { CellPopulation } from "./cellPopulation";

interface IGeneratorOptions { count: number; }
export type CellExperimentOptions = IGeneratorOptions | { population: CellPopulation };

export class CellExperiment {

  public days: CellPopulation[];

  constructor(options: CellExperimentOptions) {

    this.days = new Array<CellPopulation>();

    if (this.isGeneratorOption(options)) {
      this.init(this.createRandomPopulation(options.count));
    } else {
      this.init(options.population);
    }
  }

  public newDay() {
    const currentday = this.days[this.days.length - 1];
    const nextday = currentday.nextDay();
    this.days.push(nextday);
  }


  public validate(day: number, states: CellState[]): boolean {
    if (day < 0 || day > this.days.length - 1) {
      throw new Error(`Unable to validate experiment on day ${day}. Day must be between 0 and ${this.days.length - 1}.`);
    }

    const population = this.days[day];

    for (let index = 0; index < population.cells.length; index++) {
      if (!(population.cells[index].state === states[index])) {
        return false;
      }
    }
    return true;
  }

  private init(population: CellPopulation): void {
    this.days.push(population);
  }

  private createRandomPopulation(count: number): CellPopulation {
    const cellPopulation = new CellPopulation();
    for (let index = 0; index < count; index++) {
      const state: CellState = Math.random() >= 0.5 ? "alive" : "dead";
      cellPopulation.push(state);
    }
    return cellPopulation;
  }


  private isGeneratorOption(option: CellExperimentOptions): option is IGeneratorOptions {
    return (option as { count: number }).count !== undefined;
  }
}
