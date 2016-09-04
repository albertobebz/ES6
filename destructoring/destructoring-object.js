// DESTRUCTORING
"use strict";

let toyBox = {
    item1: "fresbee",
    item2: "ball",
    item3: "car",
    item4: "truck"
}

let {item1, item2} = toyBox;
console.log(item1, item2); // "fresbee", "ball"

let {item3: disc} = toyBox;
console.log(disc); // "car"
