// SPREAD OPERATOR
"use strict";

var _console;

var animals = ["dogs", "birds"];
var moreAnimals = ["elephants", "cats", "rabbits"];
// thanks to the spread operator we can concatenate arrays
var allAnimals = ["frogs"].concat(animals, ["snakes"], moreAnimals);

console.log(allAnimals);

function myFavDog(race, animal) {
    console.log("My favourite animal is a/an " + race + " " + animal);
}

var favAnimals = ["african", "elephant"];
(_console = console).log.apply(_console, favAnimals);
myFavDog.apply(undefined, favAnimals);