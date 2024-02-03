/**
 *  Write a program to sort numbers in ascending order
 */


const arr = [76, 23, 34, 10, 85, 49];
const length = arr.length;

for (i = 0; i < length - 1; i++) {
    for(j = i + 1; j < length; j++) {
        
        if (arr[i] > arr[j]) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

console.log("The array in ascending order is ", arr);