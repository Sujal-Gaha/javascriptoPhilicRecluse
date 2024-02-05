const myName = "SUJAL";
const newArray = myName.split("");

for (i = 1; i <= myName.length; i++) {
  for (j = 0; j < i; j++) {
    process.stdout.write(myName[j]);
  }
  console.log();
}
