/**
 *  Write a function that checks whether a passed string is a palindrome or not? 
 */


function palindromeChecker(str) {
    
    const reverseString = str.split("").reverse().join("");

    if (str === reverseString) {
        console.log(str + " is a palindrome.");
    } else {
        console.log(str + " is not a palindrome.");
    }
}

palindromeChecker("dad");
palindromeChecker("pillowtalk");
palindromeChecker("mom");