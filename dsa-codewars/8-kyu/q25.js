/** I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
 */

function arrayPlusArray1(arr1, arr2) {
  var sum = 0;
  for (i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (j = 0; j < arr2.length; j++) {
    sum += arr2[j];
  }
  return sum;
}

function arrayPlusArray2(arr1, arr2) {
  const combineArray = [...arr1, ...arr2];
  var sum = 0;
  for (i = 0; i < combineArray.length; i++) {
    sum += combineArray[i];
  }
  return sum;
}
