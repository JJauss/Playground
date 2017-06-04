import { assert } from "chai";
import { CellExperiment, CellPopulation } from "../../src/2017-01/index";

suite("CellExperiment", () => {

  suite("initializes", () => {

    test("with count option produces a population with the given count of cells", () => {

      const experiment = new CellExperiment({ count: 20 });

      assert.equal(experiment.days.length, 1);
      assert.equal(experiment.days[0].cells.length, 20);

    });

    test("with population option, inits the first day population", () => {
      const initialPopulation = new CellPopulation();
      initialPopulation.push("alive");
      const experiment = new CellExperiment({ population: initialPopulation });

      assert.equal(experiment.days.length, 1);
      assert.equal(experiment.days[0].cells.length, 1);
    });
  });

  suite("newDay", () => {

    test("produces symetric experiment", () => {
      const firstDayPopulation = new CellPopulation();
      firstDayPopulation.push(["dead", "dead", "dead", "alive", "dead", "dead", "dead"]);
      const experiment = new CellExperiment({ population: firstDayPopulation });
      for (let index = 0; index < 19; index++) {
        experiment.newDay();
      }
      assert.equal(experiment.days.length, 20);
      assert.ok(experiment.validate(0, ["dead", "dead", "dead", "alive", "dead", "dead", "dead"]));
      assert.ok(experiment.validate(1, ["dead", "dead", "alive", "dead", "alive", "dead", "dead"]));
      assert.ok(experiment.validate(2, ["dead", "alive", "dead", "dead", "dead", "alive", "dead"]));
      assert.ok(experiment.validate(3, ["alive", "dead", "alive", "dead", "alive", "dead", "alive"]));
      assert.ok(experiment.validate(4, ["dead", "dead", "dead", "dead", "dead", "dead", "dead"]));
      assert.ok(experiment.validate(10, ["dead", "dead", "dead", "dead", "dead", "dead", "dead"]));
      assert.ok(experiment.validate(19, ["dead", "dead", "dead", "dead", "dead", "dead", "dead"]));
    });
  });
});
