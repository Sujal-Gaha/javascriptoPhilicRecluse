/**
 *  A callback function is a function passed into another function as an argument, 
 *  which is then invoked inside the outer function to complete some kind of routine 
 *  or action.
 */


console.log("callback disc player");

function insertDisc(discName) {
  console.log("$${discName} disc is inserted");
}

function readDisc() {
  console.log("Reading disc...");
}

function discPlayer(inserter, reader, discName) {
  console.log("starting...");
  inserter(discName);
  reader();
  setTimeout(() => {
    console.log("Playing disc...");
  }, 2000);
}

discPlayer(insertDisc, readDisc, "oppenheimer");