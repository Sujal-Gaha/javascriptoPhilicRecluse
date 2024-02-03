/**
 *
 *  Callback hell is a term used to describe situations in which nested callback
 *  functions (also known as "callback pyramids") make code difficult to read and
 *  maintain.
 *
 */

let count = 10;

function launching(callback) {
  setTimeout(() => {
    console.log("Launching the rocket");
  }, 1000);
  setTimeout(() => {
    console.log("In T-Minus");
    callback();
  }, 2000);
}

function count6(callback) {
  setTimeout(() => {
    console.log(count);
    count--;
    callback(count);
  }, 1000);
}

function count10(callback) {
  setTimeout(() => {
    console.log(count);
    count--;
    callback(count);
  }, 1000);
}

function count9(callback) {
  setTimeout(() => {
    console.log(count);
    count--;
    callback(count);
  }, 1000);
}

function count7(callback) {
  setTimeout(() => {
    console.log(count);
    count--;
    callback(count);
  }, 1000);
}

function count8(callback) {
  setTimeout(() => {
    console.log(count);
    count--;
    callback(count);
  }, 1000);
}

function count5(callback) {
  setTimeout(() => {
    console.log(count);
    count--;
    callback(count);
  }, 1000);
}

function count2(callback) {
  setTimeout(() => {
    console.log(count);
    count--;
    callback(count);
  }, 1000);
}

function count3(callback) {
  setTimeout(() => {
    console.log(count);
    count--;
    callback(count);
  }, 1000);
}

function count0(callback) {
  setTimeout(() => {
    console.log(count);
    callback();
  }, 1000);
}

function count1(callback) {
  setTimeout(() => {
    console.log(count);
    count--;
    callback(count);
  }, 1000);
}

function count4(callback) {
  setTimeout(() => {
    console.log(count);
    count--;
    callback(count);
  }, 1000);
}

function launch(callback) {
  setTimeout(() => {
    console.log("Launched");
    callback();
  }, 1000);
}

launching(() => {
  count10(() => {
    count9(() => {
      count8(() => {
        count7(() => {
          count6(() => {
            count5(() => {
              count4(() => {
                count3(() => {
                  count2(() => {
                    count1(() => {
                      count0(() => {
                        launch(() => console.log("Have a safe journey!!!"));
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
