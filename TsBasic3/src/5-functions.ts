/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */

export {}; // quick fix for global variable

/**
 * 1. function declaration, expression, arrow
 * 2. optional & default parameters
 * 3. rest parameter
 * 4. conditional type with union, generic, overlods
 */

/********** 1. Basic Function  ***********/
/* Function Declaration, Expession, Arrow
 */

// function declaration
function add(x: number, y: number, z?: number): number {
    return x + y;
}
console.log(add(2, 3));

// function expression
const addEx = function (x: number, y: number): number {
    return x + y;
};
console.log(addEx(2, 3));

// arrow function
const addArrow = (x: number, y: number): number => x + y;
console.log(addArrow(2, 3));

// function with no return value
const hello = (name: string): any => console.log('hallo ' + name);
console.log(hello('aldodevv'));

// function with callback
type Greeter = (message: string) => void;
function request(url: string, cb: Greeter) {
    cb(url);
}
let fn = (str: string) => console.log(str);
request('https://aldodevv.com', fn);

/********** 2. optional & default parameters  ***********/
/*
| parameters | required | default value |
| ---------- | -------- | ------------- |
| firstName  | Yes      |               |
| lastName   | Yes      |               |
| gender     | No       |               |
| languange  | No       | english       |
*/
type Contact = {
    firstName: string;
    lastName: string;
    gender?: string;
    language: string;
};

function submitContact(firstName: string, lastName: string, language = 'english', gender?: string): Contact {
    return {
        firstName: firstName,
        lastName: lastName,
        language,
        ...(gender && { gender }),
    };
}

const result = submitContact('aldo', 'devv', 'english');
console.log(result);

/********** 3. Rest Parameter  ***********/

function fruitsCollection(item: string, ...restItems: (string | number)[]) {
    return item + ' ' + restItems.join(' ');
}
let fruits = fruitsCollection('Apple', 'Mango', 'Avocado', 123);
console.log(fruits);

/********* 4. conditional type with union ***********/
/*
  - accept parameter either string or number
  - return either string or number
  - don't use `any`
*/
//* Union
function CT(param: string | number): string | number {
    return param;
}

//* Generic
function GT<T>(param: T): T {
    return param;
}
console.log(GT<string>('hello'));

//* Overloading
function FT(param: string): string;
function FT(param: number): number;
function FT(param: any): any {
    return param;
}
console.log(FT('hello'), FT(123));
