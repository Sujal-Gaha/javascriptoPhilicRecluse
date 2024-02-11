/** Square(n) Sum */

function squareSum(numbers) {
  let sum = 0;
  for (i = 0; i < numbers.length; i++) {
    sum += Math.pow(numbers[i], 2);
  }
  return sum;
}
