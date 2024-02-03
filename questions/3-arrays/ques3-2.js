/**
 *  Write a program to find the greatest and smallest number in [10, 2, 7, 77, 100]? 
 */


const num = [10, 20, 7, 77, 102];
let greatestNumber;
let smallestNumber;

for (i = 0; i < num.length; i++) {
  if (i == 0) {
    greatestNumber = num[i];
    smallestNumber = num[i];
  }
  if (num[i] > greatestNumber) {
    greatestNumber = num[i];
  }
  if (num[i] < smallestNumber) {
    smallestNumber = num[i];
  }
}

console.log("The greatest number is ", greatestNumber);
console.log("The smallest number is ", smallestNumber);