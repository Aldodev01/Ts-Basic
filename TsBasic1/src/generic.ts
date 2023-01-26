function getData(value: any) {
    return value
}

console.log(getData("asu").length);
console.log(getData(123).length);

function myData<T>(value: T) {
    return value
}

console.log(myData("asu").length);
console.log(myData(123));

// untuk tsx arrow function
// const arrowFunc = <T extends {}>(value: T)
// const arrowFunc = <T, >(value: T)

const arrowFunc = <T extends unknown>(value: T) => {
    return value
}