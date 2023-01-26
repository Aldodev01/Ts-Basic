"use strict";
class Vehicle {
    start() {
        console.log("brumm");
    }
}
class Car extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 4;
    }
}
class Motor extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 2;
    }
}
let car = new Car();
console.log(car.wheels);
car.start();
let motor = new Motor();
console.log(motor.wheels);
motor.start();
