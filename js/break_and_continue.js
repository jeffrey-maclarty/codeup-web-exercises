"use strict";
console.log("Link Test");
console.log("---------");
console.log();

console.log();
console.log("Exercise Break and Continue")
console.log("----------");
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