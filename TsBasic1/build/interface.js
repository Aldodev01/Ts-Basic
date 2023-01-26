"use strict";
class Asus {
    constructor(nama, isGaming) {
        this.nama = nama;
        this.isGaming = isGaming;
    }
    on() {
        console.log(this.nama, "nyala");
    }
    off() {
        console.log("mati");
    }
}
class MacBook {
    constructor() {
        this.nama = "Macbook";
        this.isGaming = false;
    }
    on() {
        console.log("nyala");
    }
    off() {
        console.log("mati");
    }
}
let asus = new Asus("asus", true);
asus.on();
