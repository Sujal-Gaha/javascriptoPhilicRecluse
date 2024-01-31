const person = {
    name: "Sujal Gaha",
    age: 19,
    gender: "Male"
}

const jobObject = {
    job: "Developer",
    salary: 500000
}

//  get all object keys
const keys = Object.keys(person);    //  ["name", "age", "gender"]

//  get all object values
Object.values(person);  //  ["Sujal Gaha", 19, "Male"]

//  get all object entries
Object.entries(person); //  [name: "Sujal Gaha", age: 19, gender: "Male"]

//  assign object to another object
Object.assign(person, jobObject);
//  [name: "Sujal Gaha", age: 19, gender: "Male", job: "Developer", salary: 500000]