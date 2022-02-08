"use strict";
console.log("Link Test");
console.log("---------");
console.log();


console.log("Exercise 2")
console.log("----------");

// Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
function showMultiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
        // console.log(num + " + " + i + " = " + (num * i))
    }
}

showMultiplicationTable(8)
showMultiplicationTable(11)

console.log("Exercise 3")
console.log("----------");

// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even.
function randomOddEven() {
    for (let i = 1; i <= 10; i++) {
        let randNum = Math.floor(Math.random() * 200) + 1;
        if (randNum % 2 === 0) {
            console.log(`${randNum} is even`)
        } else if (randNum % 2 !== 0) {
            console.log(`${randNum} is odd`);
        }
    }
}

randomOddEven();