/**
 *  map() Array Method
 * 
 *  creates a new array from calling a function for every array element.
*/

let number = [5, 8, 3, 1, -1];

let newNumbers = number.map((num) => num + 1);
console.log("The numbers are ", newNumbers);  //  New number is  [ 6, 9, 4, 2, 0 ]


let fruits = ["apple", "banana", "cherry", "dragonfruit", "emu"];

let capitalFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log("The fruits are ", capitalFruits);  //  The fruits are  [ 'APPLE', 'BANANA', 'CHERRY', 'DRAGONFRUIT', 'EMU' ]


let nums = [7, 6, 5];
let sqrArr = nums.map((num) => num ** 2);
console.log("The square numbers are ", sqrArr); //  The square numbers are  [ 49, 36, 25 ]