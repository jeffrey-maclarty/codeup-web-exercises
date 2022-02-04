"use strict";
console.log("Link Test");
console.log("---------");
console.log();

// 1. Make a function named isOdd(number)
function isOdd(number) {
    return number % 2 !== 0;
}

// 2. Make a function named isEven(number)
function isEven(number) {
    return number % 2 === 0;
}

// 3. Make a function named identity(input) that returns the input exactly as provided
function identity(input) {
    return input;
}

// 4. Make a function named isFive(input)
function isFive(input) {
    return input === 5;
}

// 5. Make a function named addFive(input) that adds five to some input
function addFive(input) {
    return input + 5;
}

// 6. Make a function named isMultipleOfFive(input)
function isMultipleOfFive(input) {
    let multFive = input / 5;
    if (multFive % 1 === 0) {
        return `${input} is a multiple of 5`;
    } else {
        return `${input} is _NOT_ a multiple of 5`;
    }
}

// 7. Make a function named isThree(input)
function isThree(input) {
    return input === 3;
}

// 8. Make a function named isMultipleOfThree(input)
function isMultipleOfThree(input) {
    let multThree = input / 3;
    if (multThree % 1 === 0) {
        return `${input} is a multiple of 3`;
    } else {
        return `${input} is _NOT_ a multiple of 3`;
    }
}

// 9. Make a function named IsMultipleOfThreeAndFive(input)
function isMultipleOfThreeAndFive(input) {
    let multThree = input / 3;
    let multFive = input / 5;
    if (multThree % 1 === 0 && multFive % 1 === 0) {
        return `${input} is a multiple of 3 and 5`;
    } else {
        return `${input} is _NOT_ a multiple of 3 and 5`;
    }
}

// 10. Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n
function isMultipleOf(target, n) {
    let isMult = target / n;
    return isMult % 1 === 0;
}

