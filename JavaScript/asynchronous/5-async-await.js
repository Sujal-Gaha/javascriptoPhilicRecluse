console.log("testing...");
function insertDisc(discName) {
  console.log("${discName}is inserted");
}

function readDisc() {
  console.log("Reading disc...");
}

function discPlayer(disc) {
  return new Promise((resolve, reject) => {
    if (disc) {
      setTimeout(() => {
        resolve("Disc is playing");
      }, 2000);
    } else {
      setTimeout(() => {
        reject("Disc is not inserted");
      }, 2000);
    }
  });
}

// async await
async function startDiscPlayer() {
  const result = await discPlayer("disc");
  console.log("result:", result);
}

startDiscPlayer();