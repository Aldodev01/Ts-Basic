//* Function dengan return String
function getName(): string {
  return "ASEDE";
}
console.log(getName());

//* Function dengan return Number
function getAge(): number {
  return 124;
}
console.log(getAge());

//* Function tanpa return
function getNoreturn(): void {
  console.log("No Return");
}
getNoreturn();

//!================
//* Function dengan tipe data argument
function multipy(a: number, e: number): number {
  return a * e;
}
const result = multipy(3, 5);
console.log(result);

//!================
//* Function as Type
//declare all var, func, return with number Type dan itu wajib untuk diisi dengan type yang sama
type Tambah = (val1: number, val2: number) => number;
const Add: Tambah = (val1: number, val2: number): number => {
  return val1 + val2;
};
const hasil = Add(3, 5);
console.log(hasil);

//* Default Parameter
const fullName = (first: string, last: string = "polpol"): string => {
  return first + " " + last;
};

console.log(fullName("Aldo"));

//* Optional Parameter
// tidak disarankan untuk number
const fullAge = (first: string, last?: string): string => {
  return first + " " + last;
};

console.log(fullAge("aldodevv"));
