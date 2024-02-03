/**
 * 
 *  A promise is an object representing the eventual completion or failure of an 
 *  asynchronous operation, providing a clean and structured way to handle 
 *  asynchronous code by chaining callbacks.
 * 
 */


const getData = new Promise(function (resolve, reject) {
  // "Producing Code" (May take some time)
  // such as: fetching data from backend that may take some time.

  setTimeout(() => {
    let isError = false;
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
      isError = true;
    }

    if (isError) {
      reject("failed to get the data from the api");
    } else {
      resolve({ name: "Ram", profession: "software developer", age: 20 }); // when no error
    }
  }, 2000);
});

let loading = true;

console.log("loading", loading);

getData
  .then((data) => {
    console.log("data", data);
  })
  .catch((error) => {
    console.error("api failed: ", error);
  })
  .finally(() => {
    console.log("running finally");
    loading = false;
    console.log("loading", loading);
  });