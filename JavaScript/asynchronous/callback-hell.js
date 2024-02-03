var count = 5;

function launching(callback) {
    setTimeout(() => {
        console.log("Launching the rocket");
    }, 1000);
    setTimeout(() => {
        console.log("In T-Minus");
        callback();
    }, 2000);
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

function count1(callback) {
  setTimeout(() => {
    console.log(count);
    callback();
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
    count5(() => {
        count4(() => {
            count3(() => {
                count2(() => {
                    count1(() => {
                        launch(() => console.log("Have a safe journey!!!"));
                    });
                });
            });
        });
    });
});
