/**
 *  reduce() Array Method
 * 
 *  returns a single value: the function's accumulated result
 */

let nums = [1, 2, 3, 4, 5, 6, 7];

let sum = nums.reduce((result, item) => {
    return result + item;
});
console.log("The sum is ", sum);    //  The sum is  28


let str = ["Hello", " ", "World!"];
let concat = str.reduce((result, item) => {
    return result + item;
});
console.log("The message is ", concat); //  The message is  Hello World!


function maxNum(numbers) {
    return numbers.reduce((max, current) => {
        if (current > max) {
            return current;
        }
        return max;
    }, numbers[0]);
};

let num = [7, 4, 8, 3, 5];
let maxNumber = maxNum(num);
console.log("The maximum number is ", maxNumber);   //  The maximum number is  8