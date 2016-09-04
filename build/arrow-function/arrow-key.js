// one of the advantages of the `arrow function` is to bind the constructors' methods
// to the instances of the class no matter where they gonna be called

'use strict';

var House = function House(dataObject) {
  var _this = this;

  for (var key in dataObject) {
    this[key] = dataObject[key];
  }
  this.getKeys = function () {
    return Object.keys(_this);
  };
  this.getDoorNumber = function () {
    return _this.doors;
  };
  this.getWindowNumber = function () {
    return _this.windows;
  };
};

var villa1 = new House({ doors: 10, windows: 15, mSquare: 200 });
console.log(villa1.getKeys() + " " + villa1.getDoorNumber()); // 'this' binds 'villa1'

var newVilla = villa1.getDoorNumber;
console.log(newVilla()); // 'this' binds 'villa1' too