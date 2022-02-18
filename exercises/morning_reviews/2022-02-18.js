"use strict";
console.log(`Link Test`);
console.log(`---------`);
console.log();

function isANumber (input) {
    if (typeof input === 'number') {
        console.log(`${input} is a number.`);
        return true;
    } else {
        console.log(`${input} is _NOT_ a number.`);
        return false;
    }
}

let testObject = {test1: "test2", test3: "test4"}
let testArray = [1334, "yes", "no"];

isANumber(10);
isANumber("test");
isANumber(false);
isANumber("10");
isANumber(testObject);
isANumber(testArray)