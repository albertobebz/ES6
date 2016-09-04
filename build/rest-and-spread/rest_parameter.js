// REST PARAMETERS
"use strict";

// rest parameters is identified with '...' in front of the argument

function paramFunction(name) {
    for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
    }

    console.log(name, params);
}
paramFunction("Jane", 1, 2, 3, true); // Jane [ 1, 2, 3 ]

// the arguments we pass with the REST PARAMETERS will be transformed in an Array
function paramFunction2() {
    for (var _len2 = arguments.length, params = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        params[_key2] = arguments[_key2];
    }

    console.log(params);
}
paramFunction2(1, 2, 4, true, "Jane"); // [1, 2, 4, true, "Jane"]