'use strict';

// ES5

function greeting(timeOfDay, name) {
    timeOfDay = timeOfDay || "morning";
    name = name || "John";
    console.log("Good " + timeOfDay + ", " + name + "!");
}
greeting();

//ES6
function greetingDefault() {
    var timeOfDay = arguments.length <= 0 || arguments[0] === undefined ? "morning" : arguments[0];
    var name = arguments.length <= 1 || arguments[1] === undefined ? "John" : arguments[1];

    console.log("Good " + timeOfDay + ", " + name + "!");
}

greetingDefault(undefined, "Jane");