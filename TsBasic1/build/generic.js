"use strict";
function getData(value) {
    return value;
}
console.log(getData("asu").length);
console.log(getData(123).length);
function myData(value) {
    return value;
}
console.log(myData("asu").length);
console.log(myData(123));
// untuk tsx arrow function
// const arrowFunc = <T extends {}>(value: T)
// const arrowFunc = <T, >(value: T)
const arrowFunc = (value) => {
    return value;
};
