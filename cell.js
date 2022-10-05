function isAlive(cell) {
  if (cell.alive) {
    if (cell.neighbor < 2) {
      return false; // Overpopulation
    } else if (cell.neighbor > 3) {
      return false; // Overpopulation
    }
    return true;
  } else {
    if (cell.neighbor == 3) {
      // test 4
      return true;
    }

    return false;
  }
}

export { isAlive };
