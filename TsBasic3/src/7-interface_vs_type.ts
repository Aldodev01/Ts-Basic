/* eslint-disable */

export {}; // quick fix for global variable

/**
 * Object
 */

interface user {
    name: string;
    age: number;
}
type Tuser = {
    name: string;
    age: number;
};

/**
 * Merge
 */

interface dont {
    firstName: string;
}
interface dont {
    lastname: string;
}

const myDont: dont = {
    firstName: 'test',
    lastname: 'hehe',
};

/**
 * Intersection & Union
 */

type a = {
    id: string;
    no: number;
};
type b = {
    id?: string;
    name: string;
};

//* Interception
type Intersection = a & b;

//* Union
type union = a | b;

let myDataInterception: Intersection = {
    id: 'der',
    no: 1,
    name: 'aldo',
};
let mydataUnion: union = {
    id: '12',
    no: 3,
};
console.log(myDataInterception);
console.log(mydataUnion);

/**
 * Implements
 */

interface Person {
    name: string;
    age: number;
}

class People implements Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        (this.age = age), (this.name = name);
    }
}

/**
 * Extend
 */

interface Address {
    street: string;
}

interface myAddress extends Address {
    name: string;
}
