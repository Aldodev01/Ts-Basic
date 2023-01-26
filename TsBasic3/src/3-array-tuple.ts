/* eslint-disable @typescript-eslint/no-unused-vars, prefer-const */
export {}; // quick fix for global variable

/**
 * Array
 * 1. Array of Number
 * 2. Array of String
 * 3. Array with Union
 * 4. Tuple
 * 5. Array of Object
 * 6. Array multi dimension
 * 7. Destructuring
 */

/**
 * 1. Array of Number
 * [1,2,3,4]
 */
//* Type inference
let listN1 = [1, 2, 3, 4];

//* Square Bracket
let listN2: number[];
listN2 = [1, 2, 3, 4];

//* Generic Array
let listN3: Array<number>;
listN3 = [1, 2, 3, 4];

/**
 * 2. Array of String
 * ['a', 'b', 'c']
 */
//* Type inference
let listS1 = ['a', 'b', 'c'];

//* Square Bracket
let listS2: string[];
listS2 = ['a', 'b', 'c'];

//* Generic Array
let listS3: Array<string>;
listS3 = ['a', 'b', 'c'];

/**
 * 3. Array with Union
 * ["hello", 1, 2, 3 ]
 */

//* Type inference
let listU1 = ['hello', 1, 2, 3, 4];

//* Square Bracket
let listU2: (string | number)[];
listU2 = ['hello', 1, 2, 3, 4];

//* Generic Array
let listU3: Array<string | number>;
listU3 = ['hello', 1, 2, 3, 4];

/**
 * 4. Tuple
 * ['cordinat', 2, 4, 7]
 */

//! Dont use type inference for tuples

//* Square Bracket
let listT1: [string, number, number, number];
listT1 = ['cordinat', 2, 4, 7];

/**
 * 5. Array of Object
 * [
 *   { color: 'blue', index: 1 },
 *   { color: 'red', index: 2 },
 * ]
 */

//* Inline interface
let listA1: { color: string; index: number }[];
listA1 = [
    { color: 'blue', index: 1 },
    { color: 'red', index: 2 },
];

//* Generic Array
let listA2: Array<{ color: string; index: number }>;
listA2 = [
    { color: 'blue', index: 1 },
    { color: 'red', index: 2 },
];

/**
 * 6. Array multi dimension [[]]
 * matrix = [
 *  [1, 2],
 *  [3, 4],
 * ];
 */
//* Inline interface
let listM1: number[][];
listM1 = [
    [1, 2],
    [3, 4],
];

//* Generic Array
let listM2: Array<Array<number>>;
listM2 = [
    [1, 2],
    [3, 4],
];

/**
 * 7. Destructuring
 * let [a, b, c, d]: [number, number, number, string] = [1, 2, 3, 'four'];
 */
let [a, b, c, d]: [number, number, number, string] = [1, 2, 3, 'four'];
