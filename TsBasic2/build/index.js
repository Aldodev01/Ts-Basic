"use strict";
let nama = "imam";
// const user = { name: "hitesh", age: 10 };
// console.log("Hitest", user.name);
// function getNama(): string {
//   return nama;
// }
// function getNoReturn(): void {
//   console.log("void function");
// }
// function getData(param1: string = "default"): void {
//   return console.log(param1);
// }
// //Anonymous function
// let anonym = function (): string {
//   return nama;
// };
// let anonymVoid = (function (): void {
//   return console.log("void");
// })();
// //Arrow Function
// let arrowFunc = (param: string) => {
//   return param;
// };
// console.log(getNama());
// getData();
// console.log(arrowFunc("bos"));
// function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
//   return arr1.concat(arr2);
// }
// const arr = combine<string | number>([1, 2, 3], ["hello"]);
// console.log(arr);
// function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
//   return arr.filter(func);
// }
// function filter2<Type, Func extends (arg: Type) => boolean>(
//   arr: Type[],
//   func: Func
// ): Type[] {
//   return arr.filter(func);
// }
// function greet<Str extends string | number | boolean>(s: Str): void {
//   console.log("Hello, " + s);
// }
// // greet(true || "aldodevv" || null || 12 || undefined);
// function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i], i);
//   }
// }
// myForEach([1, 2, 3], (a) => console.log(a));
// myForEach([1, 2, 3], (a, i) => console.log(a, i));
// function makeDate(timestamp: number): Date;
// function makeDate(m: number, d: number, y: number): Date;
// function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
//   if (d !== undefined && y !== undefined) {
//     return new Date(y, mOrTimestamp, d);
//   } else {
//     return new Date(mOrTimestamp);
//   }
// }
// const d1 = makeDate(12345678);
// const d2 = makeDate(5, 5, 5);
// const d3 = makeDate(1, 3, 8);
// console.log(d1, d2, d3);
