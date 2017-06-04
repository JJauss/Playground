import { assert } from "chai";
import { Cell, CellPopulation } from "../../src/2017-01/index";

suite("CellPopulation", () => {
  let population: CellPopulation;
  setup(() => {
    population = new CellPopulation();
  });


  suite("with single cell", () => {

    test("dead cell will not alive", () => {

      population.cells.push(new Cell("dead"));

      const nextDay = population.nextDay();
      assert.isFalse(nextDay.cells[0].isAlive());
    });

    test("living cell will die", () => {

      population.cells.push(new Cell("alive"));

      const nextDay = population.nextDay();
      assert.isFalse(nextDay.cells[0].isAlive());
    });
  });

  suite("with two cells", () => {

    test("dead, dead => dead, dead", () => {

      population.push("dead");
      population.push("dead");

      const nextDay = population.nextDay();
      assert.isFalse(nextDay.cells[0].isAlive());
      assert.isFalse(nextDay.cells[1].isAlive());
    });

    test("alive, dead => dead, alive", () => {

      population.push("alive");
      population.push("dead");

      const nextDay = population.nextDay();
      assert.isFalse(nextDay.cells[0].isAlive());
      assert.isTrue(nextDay.cells[1].isAlive());
    });

    test("dead, alive => alive, dead", () => {

      population.push("dead");
      population.push("alive");

      const nextDay = population.nextDay();
      assert.isTrue(nextDay.cells[0].isAlive());
      assert.isFalse(nextDay.cells[1].isAlive());
    });
    test("alive, alive => alive,alive", () => {

      population.push("alive");
      population.push("alive");

      const nextDay = population.nextDay();
      assert.isTrue(nextDay.cells[0].isAlive());
      assert.isTrue(nextDay.cells[1].isAlive());
    });
  });

});
