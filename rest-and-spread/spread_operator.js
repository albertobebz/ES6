// SPREAD OPERATOR
"use strict";

const animals = ["dogs", "birds"];
const moreAnimals = ["elephants", "cats", "rabbits"];
// thanks to the spread operator we can concatenate arrays
const allAnimals = ["frogs", ...animals, "snakes", ...moreAnimals];

console.log(allAnimals);

// we can use the SPREAD OPERATOR for passing arguments inside a function
function myFavDog(race, animal){
    console.log(`My favourite animal is a/an ${race} ${animal}`);
}

const favAnimals = ["african", "elephant"];

myFavDog(...favAnimals);
