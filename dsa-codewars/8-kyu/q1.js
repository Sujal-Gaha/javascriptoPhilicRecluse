/**Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
Examples:

Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
 */

function descendingOrder(n) {
  let digits = String(n).split("");

  let sortedDigits = digits.sort((a, b) => {
    return b - a;
  });

  let result = parseInt(sortedDigits.join(""));
  return result;
}

descendingOrder(4215);
descendingOrder(145263);
descendingOrder(123456789);
