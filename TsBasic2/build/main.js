"use strict";
let a;
console.log(typeof a, "a");
let b = true || false;
console.log(typeof b, "b");
let c = 1;
console.log(typeof c, "c");
let d = "hello";
console.log(typeof d, "d");
let e = 100n;
console.log(typeof e, "e");
let f = Symbol("Sym");
console.log(typeof f, "f");
let g = function () {
    return null;
};
console.log(typeof g, "g");
let h = null;
console.log(typeof h, "h");
let i = {};
console.log(typeof i, "i");
let j = [];
console.log(typeof j, "j");
class test {
}
let k = new test();
console.log(typeof k, "k");
//! Karna mereturn number
let x = function (a, b) {
    return a + b;
};
console.log(x(1, 2), "x");
//! Karna tidak merturn apa-apa
let y = function () {
    a = "hallo";
};
console.log(y(), "y");
//! union
let multi;
console.log((multi = 4445));
console.log((multi = "string"));
console.log((multi = true));
