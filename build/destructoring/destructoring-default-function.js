// DESTRUCTORING DEFAULT FUNCTION
"use strict";

function getData() {
  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var _ref$url = _ref.url;
  var url = _ref$url === undefined ? "www.google.com" : _ref$url;
  var _ref$method = _ref.method;
  var method = _ref$method === undefined ? "post" : _ref$method;
  var callback = arguments[1];

  callback(url, method);
}

getData({}, function (url, method) {
  console.log(url, method);
});

getData({ url: 'myposturl.com' }, function (url, method) {
  console.log(url, method);
});

getData({ url: 'myputurl.com', method: 'put' }, function (url, method) {
  console.log(url, method);
});