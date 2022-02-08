"use strict";
console.log("Link Test");
console.log("---------");
console.log();

console.log();
console.log("Exercise 2")
console.log("----------");

// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.

function userOdd() {
    let userNum;
    do {
        userNum = prompt("Enter an odd number between 1 and 50")
    } while (userNum % 2 === 0 && (userNum >= 1 && userNum <= 50));
}

userOdd();

// returnreturn - ???

