/**
 *  Write a program to sort numbers in an array in descending order
 */


const arr = [76, 23, 34, 10, 85, 49];
const length = arr.length;

for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {

        if (arr[j] > arr[i]) {
            temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
    }
}

console.log("The array in descending order is ", arr);