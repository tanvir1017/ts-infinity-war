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
const getUser = (users) => {
    return users;
};
console.log(getUser({
    id: 17,
    name: "Tanvir Hossain",
    age: 20,
    phone: 1784070569,
    address: "hello",
}));
// Complex example
const getUserProperty = (users, key) => {
    return users.map((user) => user[key]);
};
const userData = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
                lat: "-37.3159",
                lng: "81.1496",
            },
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets",
        },
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        address: {
            street: "Victor Plains",
            suite: "Suite 879",
            city: "Wisokyburgh",
            zipcode: "90566-7771",
            geo: {
                lat: "-43.9509",
                lng: "-34.4618",
            },
        },
        phone: "010-692-6593 x09125",
        website: "anastasia.net",
        company: {
            name: "Deckow-Crist",
            catchPhrase: "Proactive didactic contingency",
            bs: "synergize scalable supply-chains",
        },
    },
];
console.log(getUserProperty(userData, "email"));
