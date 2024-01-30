const fruits = ["Apple", "Banana", "Cherry", "Peach", "Strawberry", "Orange"];


//  converts the array to string
fruits.toString();  //  Apple, Banana, Cherry, Peach, Strawberry, Orange

//  adds element at the end of the array
fruits.push("Pineapple");   //  ["Apple", "Banana", "Cherry", "Peach", "Strawberry", "Orange", "Pineapple"];

//  removes the last element of the array
fruits.pop();   //  ["Apple", "Banana", "Cherry", "Peach", "Strawberry", "Orange"]

//  checks if the array contains an element
fruits.includes("Banana");  //  true

//  returns the index of the element
fruits.indexOf("Peach");    //  3

//  join the elements of the array with the given separator
fruits.join("+");   //  Apple+Banana+Cherry+Peach+Strawberry+Orange

//  return a portion of the array
fruits.slice(1, 3); //  ["Banana", "Cherry"]

//  adds elements to the array
fruits.splice(1, 0, "Avocado"); //  ["Apple","Avocado", "Banana", "Cherry", "Peach", "Strawberry", "Orange"]
/**
 * first argument take the index no. where you want to add the new element
 * second argument take the number of element to remove starting from the index no. given in the first argument
 * third argument take the element to be added in the array
 **/