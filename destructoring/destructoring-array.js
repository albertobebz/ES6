"use-strict";

const widget = ["widget1", "widget2", "widget3", "widget4", "widget5"];
const [a, b, c, ...d] = widget;

console.log(a, b, c); // widget1 widget2 widget3
console.log(d); // widget4 widget5
