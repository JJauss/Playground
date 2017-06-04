import { assert } from "chai";
import { Cell, CellState } from "../../src/2017-01/index";

suite("Cell", () => {

  test("state initialized with constructor value", () => {
    const cell = new Cell("alive");
    assert.equal(cell.state, "alive");
  });

  suite("living", () => {
    test("without neigbours will die", () => {
      const cell = new Cell("alive");
      assert.equal(cell.nextDayState(), "dead");
    });

    test("with dead neigbours will die", () => {
      const cell = new Cell("alive");
      cell.left = new Cell("dead");
      cell.right = new Cell("dead");
      assert.equal(cell.nextDayState(), "dead");
    });

    test("with left neigbour alive will live", () => {
      const cell = new Cell("alive");
      cell.left = new Cell("alive");
      cell.right = new Cell("dead");
      assert.equal(cell.nextDayState(), "alive");
    });

    test("with right neigbour alive will live", () => {
      const cell = new Cell("alive");
      cell.left = new Cell("dead");
      cell.right = new Cell("alive");
      assert.equal(cell.nextDayState(), "alive");
    });
  });
});
