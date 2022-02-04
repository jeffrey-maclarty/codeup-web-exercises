"use strict";
console.log("Link Test");
console.log("---------");
console.log();

// Make a function named isOdd(number)
function isOdd(number) {
    return number % 2 !== 0;
}

// Make a function named isEven(number)
function isEven(number) {
    return number % 2 === 0;
}

// Make a function named identity(input) that returns the input exactly as provided
function identity(input) {
    return input;
}

// Make a function named isFive(input)
function isFive(input) {
    return input === 5;
}

// Make a function named addFive(input) that adds five to some input
function addFive(input) {
    return input + 5;
}

// Make a function named isMultipleOfFive(input)
function isMultipleOfFive(input) {
    let multFive = input / 5;
    if (multFive % 1 === 0) {
        return `${input} is a multiple of 5`;
    } else {
        return `${input} is _NOT_ a multiple of 5`;
    }
}

