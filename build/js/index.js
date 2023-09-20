"use strict";
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
const sum = (a, b) => {
    return a + b;
};
// console.log(sum(2, 3));
const text = "hello world";
const re = /\w+g/;
let stringArr = ["one", "two", "three"];
let car = [
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
let myTuple = ["Tanvir", 20, true];
let mixed = [true, "string it is", false, 21];
let evh = {
    name: "Eddie",
    active: false,
    albums: [554, "UA1I4"],
};
let jp = {
    name: "Eddie",
    albums: [554, "UA1I4"],
};
/* ENUM DATA TYPE */
var Grade;
(function (Grade) {
    Grade[Grade["A"] = 0] = "A";
    Grade[Grade["B"] = 1] = "B";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["D"] = 1] = "D";
})(Grade || (Grade = {}));
console.log(Grade.B);
/*FUNCTION TYPE */
let logMessage = function (message) {
    console.log(message);
};
// Type declaration by arrow function
const sumTwoNumber = (a, b) => a + b;
// Type declaration by normal function
function multiply(a, b) {
    return a * b;
}
let func = function multiply(a, b) {
    return a * b;
};
// Function with rest parameter
const restFunction = (a = 1, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
// Function with never type. we will use this when a endless loop or throwing error
const neverType = (message) => {
    throw new Error(message);
};
// Function with never type. we will use this when a endless loop or throwing error
const neverTypeWithEndlessLoop = () => {
    let index = 1;
    while (true) {
        index++;
        if (index <= 100)
            console.log(index);
    }
};
logMessage(sumTwoNumber(4, 4));
logMessage(multiply(2, 3));
logMessage(restFunction(undefined, 2, 4, 5, 3, 45));
let b = "hello";
let a = b;
console.log("b", typeof b === "string", b); // b true hello
// Another way to write this
let t = "world";
let literalType = "none of this ";
console.log(literalType);
// Another way to write assertion for function
// make a function which will concat two number
const addNumbers = (paramOne, paramTwo, paramThree) => {
    // return two params value by sum
    if (paramThree === "add") {
        return paramOne + paramTwo;
    }
    return "" + paramOne + paramTwo;
};
let myAddNumbersFunc = addNumbers(2, 3, "concat");
console.log(myAddNumbersFunc);
// Assertion for DOM
const div = document.querySelector("div"); // Every query selector is defined by HTML<queryselctor>Element
// ! this syntax is used for mean [not null]
const myImage = document.getElementById("#img");
console.log(div);
