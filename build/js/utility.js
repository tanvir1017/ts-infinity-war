"use strict";
// type Partial<T> = { [P in keyof T]?: T[P] | undefined };    **/How Partial work/ **
const updateAssignment = (assignment, propsToUpdate) => {
    return Object.assign(Object.assign({}, assignment), propsToUpdate);
};
const assignment1 = {
    name: "Tanvir Hossain",
    title: "UY Lab WDD",
    grade: 95,
};
console.log(updateAssignment(assignment1, { name: "Tanvir Ibne Mahbub" }));
const assignment2 = {
    name: "Tawhid Ibne Mahbub",
    title: "UY Lab WDD",
    grade: 80,
    verified: true,
};
const getAllValueProps = (assignment) => {
    return assignment;
};
console.log(getAllValueProps(assignment2));
const studentsOfResult = {
    Tanvir: "A",
    Hossain: "B",
    Munna: "C",
};
const uyLabStudent = {
    Tanvir: {
        assignment1: {
            point: 4,
            title: "WDD ASSIGNMENT 01",
        },
        assignment2: {
            title: "WDD ASSIGNMENT 02",
            point: 5,
        },
    },
    Hossain: {
        assignment1: {
            point: 4,
            title: "WDD ASSIGNMENT 01",
        },
        assignment2: {
            title: "WDD ASSIGNMENT 02",
            point: 5,
        },
    },
    Munna: {
        assignment1: {
            point: 4,
            title: "WDD ASSIGNMENT 01",
        },
        assignment2: {
            title: "WDD ASSIGNMENT 02",
            point: 5,
        },
    },
};
