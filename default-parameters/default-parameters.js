'use strict';

// ES5
function greeting(timeOfDay, name) {
    timeOfDay = timeOfDay || "morning";
    name = name || "John";
    console.log(`Good ${timeOfDay}, ${name}!`);
}
greeting();

//ES6
function greetingDefault(timeOfDay = "morning", name = "John") {
    console.log(`Good ${timeOfDay}, ${name}!`);
}

greetingDefault(undefined, "Jane");
