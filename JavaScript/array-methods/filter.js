/**
 *  filter() Array Method
 * 
 *  creates a new array filled with elements that pass a test provided by function
 */

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let evenNums = numbers.filter((number) => {
    return (number % 2) === 0;
});
console.log("The even numbers are ", evenNums); //  The even numbers are  [ 2, 4, 6, 8 ]


let names = ["Ram", "Shyam", "Sita", "Hari", "Gita"];

let nameLength = names.filter((name) => {
    return name.length == 4;
});
console.log("The names are ", nameLength);  //  The names are  [ 'Sita', 'Hari', 'Gita' ]