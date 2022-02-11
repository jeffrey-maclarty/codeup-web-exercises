"use strict";
console.log("Link Test");
console.log("---------");
console.log();

console.log();
console.log("Exercise Break and Continue")
console.log("----------");

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