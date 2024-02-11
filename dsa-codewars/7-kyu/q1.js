/** Descending Order */

function descendingOrder(n) {
  return parseInt(String(n).split("").sort().reverse().join(""));
}

function descendingOrder(n) {
  let digits = String(n).split("");
  let sortedDigits = digits.sort((a, b) => {
    return b - a;
  });
  let result = parseInt(sortedDigits.join(""));
  return result;
}
