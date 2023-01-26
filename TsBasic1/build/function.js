"use strict";
//* Function dengan return String
function getName() {
    return "ASEDE";
}
console.log(getName());
//* Function dengan return Number
function getAge() {
    return 124;
}
console.log(getAge());
//* Function tanpa return
function getNoreturn() {
    console.log("No Return");
}
getNoreturn();
//!================
//* Function dengan tipe data argument
function multipy(a, e) {
    return a * e;
}
const result = multipy(3, 5);
console.log(result);
const Add = (val1, val2) => {
    return val1 + val2;
};
const hasil = Add(3, 5);
console.log(hasil);
//* Default Parameter
const fullName = (first, last = "polpol") => {
    return first + " " + last;
};
console.log(fullName("Aldo"));
//* Optional Parameter
// tidak disarankan untuk number
const fullAge = (first, last) => {
    return first + " " + last;
};
console.log(fullAge("aldodevv"));
