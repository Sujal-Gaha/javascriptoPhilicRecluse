/** Opposite number */

function opposite(number) {
  return -number;
}

function opposite(number) {
  return number < 0 ? Math.abs(number) : -Math.abs(number);
}
