/* global scope */
const PI = 3.14;

function functionName() {
    console.log(PI);    //  3.14

    /*  function scope */
    const age = 19;
    console.log(age);   //  19
}
functionName();

/* block scope */
if (true) {
    const fullName = "Sujal Gaha Magar";
    console.log(fullName);  //  Sujal Gaha Magar
}

console.log(PI);    //  3.14
console.log(age);   //  ReferenceError: age is not defined
console.log(fullName);  //  ReferenceError: fullName is not defined