/*************************** Lesion - 01 ***************************/

// BASIC TYPES 👶
/*
    There some basic data type in typescript:
        1.  String
        2.  Number
        3.  Boolean
        4.  Union
        5.  RegExp
        6.  any
        7.  Function type
*/

const sum: (a: number, b: number) => void = (a, b) => {
  return a + b;
};

// console.log(sum(2, 3));
const text: string = "hello world";

const re: RegExp = /\w+g/;

/*************************** Lesion - 02 ***************************/
/* ARRAY DATA TYPE */

type Car = string | number | { name: string; age: number }[];

let stringArr = ["one", "two", "three"];
let car: Car[] = [
  "tesla",
  "M",
  "vm9",
  232,
  [
    {
      name: "tanvir",
      age: 20,
    },
  ],
];

/* TUPLE */ // Tuple is nothing but to set data type to variable in strick way
let myTuple: [string, number, boolean] = ["Tanvir", 20, true];

let mixed: (string | number | boolean)[] = [true, "string it is", false, 21];

/* OBJECT DATA TYPE */
type Guitarist = {
  name: string;
  active?: boolean;
  albums: (string | number)[];
};

let evh: Guitarist = {
  name: "Eddie",
  active: false,
  albums: [554, "UA1I4"],
};
let jp: Guitarist = {
  name: "Eddie",
  albums: [554, "UA1I4"],
};

/* ENUM DATA TYPE */
enum Grade {
  A,
  B,
  C,
  D = 1,
}
console.log(Grade.B);

/*FUNCTION TYPE */

let logMessage = function (message: any): void {
  console.log(message);
};

// Type declaration by arrow function
const sumTwoNumber = (a: number, b: number): number => a + b;

// Type declaration by normal function
function multiply(a: number, b: number): number {
  return a * b;
}

// Type declaration by normal function with type alias
interface MultiplyFunc {
  (a: number, b: number): void;
}
let func: MultiplyFunc = function multiply(a, b) {
  return a * b;
};

// Function with rest parameter
const restFunction = (a: number = 1, ...nums: number[]) => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

// Function with never type. we will use this when a endless loop or throwing error
const neverType = (message: string): never => {
  throw new Error(message);
};

// Function with never type. we will use this when a endless loop or throwing error
const neverTypeWithEndlessLoop = (): number => {
  let index = 1;
  while (true) {
    index++;
    if (index <= 100) console.log(index);
  }
};

logMessage(sumTwoNumber(4, 4));
logMessage(multiply(2, 3));
logMessage(restFunction(undefined, 2, 4, 5, 3, 45));
// logMessage(neverTypeWithEndlessLoop());

/*************************** Lesion - 05 ***************************/
/* TYPE ASSERTION */

// sum func return two params sum

type A = string;
type B = string | number;

let b: A = "hello";
let a = b as A;
console.log("b", typeof b === "string", b); // b true hello

// Another way to write this
let t = <string>"world";
let literalType = <"hello" | "none of this">"none of this ";
console.log(literalType);

// Another way to write assertion for function

// make a function which will concat two number
const addNumbers = (
  paramOne: number,
  paramTwo: number,
  paramThree: "concat" | "add"
): number | string => {
  // return two params value by sum
  if (paramThree === "add") {
    return paramOne + paramTwo;
  }
  return "" + paramOne + paramTwo;
};

let myAddNumbersFunc: string = addNumbers(2, 3, "concat") as string;
console.log(myAddNumbersFunc);

// Assertion for DOM
const div = document.querySelector("div") as HTMLDivElement; // Every query selector is defined by HTML<queryselctor>Element
// ! this syntax is used for mean [not null]
const myImage = document.getElementById("#img");
console.log(div);
