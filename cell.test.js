// 1. Any live cell with fewer than two live neighbours dies as if by under population.
// 2. Any live cell with more than three live neighbours dies, as if by overcrowding.
// 3. Any live cell with two or three live neighbours lives on to the next generation.
// 4. Any dead cell with exactly three live neighbours becomes a live cell.

let cell1 = {
  // Lives to next generation
  alive: true,
  neighbor: 3,
};
let cell2 = {
  // Dies to underpopulation
  alive: true,
  neighbor: 1,
};
let cell3 = {
  // Dies to overpopulation
  alive: true,
  neighbor: 4,
};
let cell4 = {
  // Lives to next generation
  alive: true,
  neighbor: 2,
};
let cell5 = {
  // Becomes alive
  alive: false,
  neighbor: 3,
};
let cell6 = {
  // Stays dead
  alive: false,
  neighbor: 2,
};

const { isAlive } = require("./cell");

describe("cellLiving", () => {
  //Done
  it("is alive and has 2/3 neighbours, should stay living.", () => {
    const result = isAlive(cell1);
    expect(result).toBe(true); // Stays alive (true)
  });

  // Done
  it("is alive and has less than two neighbours, should die.", () => {
    const result = isAlive(cell2);
    expect(result).toBe(false); // Should die (false)
  });

  // Done
  it("is alive and has >3 neighbours, should change to dead.", () => {
    const result = isAlive(cell3);
    expect(result).toBe(false); // Should die (false)
  });

  it("is alive and has 2/3 neighbours, should stay living.", () => {
    const result = isAlive(cell4);
    expect(result).toBe(true); // Stays alive (true)
  });

  //Done
  it("is dead and has 3 neighbours, should change to living.", () => {
    const result = isAlive(cell5);
    expect(result).toBe(true); // Should change to living (true)
  });

  it("Is dead and has 2 neighbours, should stay dead", () => {
    const result = isAlive(cell6);
    expect(result).toBe(false); // Should stay dead (false)
  });
});
