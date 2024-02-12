/** Calculate average  */

function findAverage(array) {
  if (array.length === 0) {
    return 0;
  } else {
    var result = 0;
    for (var i = 0; i < array.length; i++) {
      result += array[i];
    }
    return result / array.length;
  }
}

function findAverage(array) {
  if (array.length === 0) {
    return 0;
  } else {
    const sum = array.reduce((acc, curr) => acc + curr, 0);
    return sum / array.length;
  }
}
