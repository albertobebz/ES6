// REST PARAMETERS
"use strict";

// rest parameters is identified with '...' in front of the argument
function paramFunction(name, ...params){
    console.log(name, params);
}
paramFunction("Jane", 1, 2, 3, true);  // Jane [ 1, 2, 3 ]

// the arguments we pass with the REST PARAMETERS will be transformed in an Array
function paramFunction2(...params){
    console.log(params);
}
paramFunction2(1, 2, 4, true, "Jane");// [1, 2, 4, true, "Jane"]
