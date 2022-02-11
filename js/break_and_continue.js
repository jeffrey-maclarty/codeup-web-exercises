"use strict";
console.log(`Link Test`);
console.log(`---------`);
console.log();

// Prompt the user for an odd number between 1 and 50. Use a loop
// and a break statement to continue prompting the user if they enter
// invalid input.
// Use a loop and the continue statement to output all the odd numbers
// between 1 and 50, except for the number the user entered.

let userNum;

userOdd();

function userOdd() {

    while (true) {
        // parseInt to use strict equality below (if i === userNum)
        userNum = parseInt(prompt(`Enter an odd number between 1 and 50.`));
        if (userNum % 2 !== 0 && userNum >= 1 && userNum <= 50) {
            break;
        }
    }

    console.log(`Number to skip is: ${userNum}`);
    console.log();

    for (var i = 1; i < 50; i += 2) {
        if (i === userNum) {
            console.log(`\nYikes! Skipping number: ${i}`);
            console.log()
            continue;
        }
        console.log(`Here is an odd number: ${i}`);
    }
}

// review:
// var oddNumber = promptforOddNumberInRange(1, 50);
// oddNumber = parseInt(oddNumber);

// printOddNumbersInRangeWithSkip(1, 50, oddNumber);

function printOddNumbersInRangeWithSkip(low, high, skipNumber) {
    // inclusive
    for (let i = low; i <= high; i++) {
        if (i === skipNumber || i % 2 === 0) {
            // if i is the skip number then output something special
            if (i === skipNumber) {
                console.log("Yikes! Skipping number: " + i);
            }
            continue;
        }
        // if you get here then should be an odd number that is with range and not skipNumber
        console.log("Here is an odd number: " + i);
    }
}

function promptforOddNumberInRange(low, high) {
    var result;
    // loop until user gives an odd number in the range INCLUSIVE of range boundaries
    while (true) {
        result = prompt("Enter an odd number from " + low + " to " + high);
        // console.log(result);
        if(result % 2 === 1 && result >= low && result <= high) {
            break;
        }
    }
    console.log(result);
}