"use strict";
// Generics
// syntax of GENERICS
const arg = (arg) => arg; // This is the sign of generics
// This is the function which will true if the arg value type is object
const isObj = (arg) => {
    return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};
console.log(isObj("hello"));
console.log(isObj({ name: "Tanvir Hossain" }));
console.log(isObj({}));
console.log(isObj([{ name: "Tanvir Hossain" }]));
console.log(isObj(false));
console.log(isObj(5878));
// Check bool value function
console.log("Checking Bool Value ⤵");
const isTrue = (arg) => {
    // check is arg type array or not. if  arg type is array then checking is array is empty or not
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    // check is arg type is object or not. if  arg type is object then checking is object is empty or not
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
console.log(isTrue("hello"));
console.log(isTrue({ greeting: "hello" }));
console.log(isTrue({}));
console.log(isTrue([{ greeting: "hello" }]));
console.log(isTrue([]));
console.log(isTrue(undefined));
console.log(isTrue(null));
console.log(isTrue(NaN));
console.log(isTrue(-1));
console.log(isTrue(true));
console.log(isTrue(false));
console.log(isTrue(456));
console.log("Do the same thing with interface ⤵");
const checkBoolean = (arg) => {
    // check is arg type array or not. if  arg type is array then checking is array is empty or not
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    // check is arg type is object or not. if  arg type is object then checking is object is empty or not
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
console.log(isTrue("hello"));
console.log(isTrue({ greeting: "hello" }));
console.log(isTrue({}));
console.log(isTrue([{ greeting: "hello" }]));
console.log(isTrue([]));
console.log(isTrue(undefined));
console.log(isTrue(null));
console.log(isTrue(NaN));
console.log(isTrue(-1));
console.log(isTrue(true));
console.log(isTrue(false));
console.log(isTrue(456));