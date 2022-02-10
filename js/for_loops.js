"use strict";
console.log("Link Test");
console.log("---------");
console.log();

console.log();
console.log("Exercise 2")
console.log("----------");

// Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

// showMultiplicationTable(8)
// showMultiplicationTable(7)
function showMultiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

console.log();
console.log("Exercise 3")
console.log("----------");

// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even.

// randomOddEven();
function randomOddEven() {
    for (let i = 1; i <= 10; i++) {
        let randNum = Math.floor(Math.random() * 180) + 20;
        if (randNum % 2 === 0) {
            console.log(`${randNum} is even`)
        } else if (randNum % 2 !== 0) {
            console.log(`${randNum} is odd`);
        }
    }
}

console.log();
console.log("Exercise 4")
console.log("----------");

numTriangle();
function numTriangle() {
    let a;
    let b;
    let nums;

    for (let a = 1; a <= 9; a++) {          // number of lines to log

        for (let b = 0; b < a; b++) {       // number of numbers to log per line (1 1, 2 2s, 3 3s)

            // for (let b = 1; b <= a; b++) {       // number of numbers to log per line (1 1, 2 2s, 3 3s)

        }

        console.log(nums);                      // log here

    }
}

// returnreturn - not working
// concat lines?

// from tristan:
// numTriangle2();
function numTriangle2() {
    for (let c = 1; c <= 9; c++) {
        console.log(c.toString().repeat(c));
    }
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat

console.log();
console.log("Exercise 5")
console.log("----------");

// decreaseByFive();
function decreaseByFive() {
    for (let i = 100; i >= 5; i = i - 5) {
        console.log(i);
    }
}

// returnreturn - why doesn't (i - 5) work?