// DESTRUCTORING DEFAULT FUNCTION
"use strict";

function getData({url = "www.google.com", method = "post"} = {}, callback){
    callback(url, method);
}

getData({}, function(url, method){
  console.log(url, method);
})

getData({ url: 'myposturl.com' }, function (url, method) {
  console.log(url, method);
});

getData({ url: 'myputurl.com', method: 'put' }, function (url, method) {
 console.log(url, method);
});
