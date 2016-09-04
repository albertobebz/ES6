// A Set is not an Array but it can behave like one. It’s a collection of unique values.
"use-strict";

let classroom = new Set();

let janeD = { name: "Jane", age: 22},
    john = { name: "John", age: 34},
    janeS = { name: "Jane", age: 22};

classroom.add(janeD);
classroom.add(john);
classroom.add(janeS);

if(classroom.has(janeD)) console.log("JaneD is in the classroom");
if(classroom.has(john)) console.log("John is in the classroom");
if(classroom.has(janeS)) console.log("JohnS is in the classroom");

console.log("classroom size: ", classroom.size); // 3

classroom.delete(janeS);

console.log("classroom size: ", classroom.size); // 2

// Create an array of students object from the classroom Set
let arrayOfStudents = Array.from(classroom);
console.log(arrayOfStudents);

// Create a set from an existing Array
let alumni = new Set(arrayOfStudents);
console.log("alumni size: ", alumni.size);
