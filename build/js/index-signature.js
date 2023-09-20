"use strict";
/* Typescript index signatures, keyof assertions & the record utility */
const todaysTransactions = {
    Pizza: 5,
    Books: 10,
    Job: 10,
};
console.log(todaysTransactions.Books);
const todaysNet = (transactions) => {
    let transactionNumber = 0;
    for (const transaction in transactions) {
        transactionNumber += transactions[transaction];
    }
    return transactionNumber;
};
console.log("Today's net", todaysNet(todaysTransactions));
const students = {
    name: "Mariam",
    gpa: 3.57,
    classes: [200, 100],
};
// console.log(students["test"]);
for (const key in students) {
    console.log(`${key}: ${students[key]}`);
}
Object.keys(students).map((student) => {
    console.log(students[student]);
});
const logStudentKey = (student, key) => {
    console.log(student[key]);
};
logStudentKey(students, "name");
const authUser = {
    name: "Tanvir Hossain",
    age: 21,
    email: "developer.tanvirhossain@gmail.com",
    password: "tanvirhossain",
    phone: 1784070569,
    country: "BD",
    address: "Dhaka, Bangladesh",
    post: [],
};
const monthlyIncomes = {
    salary: "30k",
    bonus: "3k",
    sidehustle: 25000,
};
for (const income in monthlyIncomes) {
    console.log(monthlyIncomes[income]);
}
