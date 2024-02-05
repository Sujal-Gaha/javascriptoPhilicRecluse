const message = (number) => {
  return number % 2 == 0
    ? "The number " + number + " is even."
    : "The number " + number + " is odd.";
};

console.log(message(3));
console.log(message(8));