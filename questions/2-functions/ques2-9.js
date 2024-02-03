/**
 *  Write a function that returns a string that has letters in alphabetical order. 
 */


function alphabeticalOrder(string) {
    return string.split("").sort().join("");
}

let str1 = "eudaimonia";
console.log(alphabeticalOrder(str1));

let str2 = "meritocracy"
console.log(alphabeticalOrder(str2));