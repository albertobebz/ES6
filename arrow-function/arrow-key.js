// one of the advantages of the `arrow function` is to bind the constructors' methods
// to the instances of the class no matter where they gonna be called

'use strict';

const House = function(dataObject){
  for(let key in dataObject) {
    this[key] = dataObject[key];
  }
  this.getKeys = () => Object.keys(this)
  this.getDoorNumber = () => this.doors
  this.getWindowNumber = () => this.windows
}

const villa1 = new House({doors: 10, windows: 15, mSquare: 200});
console.log(villa1.getKeys() + " " + villa1.getDoorNumber()); // 'this' binds 'villa1'

const newVilla = villa1.getDoorNumber;
console.log(newVilla()); // 'this' binds 'villa1' too
