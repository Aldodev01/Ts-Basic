/* eslint-disable prefer-const */
let a: undefined;
console.log(typeof a, 'a');
let b: boolean;
b = false;
console.log(typeof b, 'b');
let c = 1;
console.log(typeof c, 'c');
let d = 'hello';
console.log(typeof d, 'd');
let e = 100n;
console.log(typeof e, 'e');
let f = Symbol('Sym');
console.log(typeof f, 'f');
let g = function () {
    return null;
};
console.log(typeof g, 'g');
let h = null;
console.log(typeof h, 'h');
let i: Record<string, unknown>;
i = {};
console.log(typeof i, 'i');
let j: [];
j = [];
console.log(typeof j, 'j');
class test {}
let k = new test();
console.log(typeof k, 'k');

// type inference(Implicit)
const ti = 'hello';

// type annotation(Explicit)
let ta: string;
ta = 'hello ts';

//* Karna mereturn number
const x = function (a: number, b: number): number {
    return a + b;
};
console.log(x(1, 2), 'x');

//* Karna tidak merturn apa-apa
const y = function (): void {
    const a = 'hallo';
};
console.log(y(), 'y');

//* union atau multi type
let multi: number | string;
console.log((multi = 4445));
console.log((multi = 'string'));
//! console.log((multi = true));

//* Type Aliases
type CostumeType = string | number;
let myType: CostumeType;
myType = 'hallo';
myType = 123;

//! myType = true
