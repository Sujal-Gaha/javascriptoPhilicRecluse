/**
 *  Write a function that reverses a number.
 */


function numberReverser(number) {
    console.log("Before reversing, the number is ", number);

    const stringNumber = number.toString();
    reverseNumber = stringNumber.split("").reverse().join("");

    console.log("After reversing, the number is ", reverseNumber);
}

numberReverser(12496);
numberReverser(36955);