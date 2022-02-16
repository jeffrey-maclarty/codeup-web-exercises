"use strict";
console.log(`Link Test`);
console.log(`---------`);
console.log();

// https://java.codeup.com/javascript-i/objects/math/

let randomNum = Math.random();

console.log("Before multiplying: " + randomNum);
console.log("After: " + (randomNum * (100 - 20)));
console.log("Exclusive 1: " + (randomNum * (100 - 20) + 1));

let rangedNum = Math.floor((randomNum * (100 - 20) + 1) + 20);
console.log(rangedNum);


console.log(Math.sqrt(16))
console.log(Math.pow(4, 2))
// Math.ceiling = round up
// Math.pow = exponents
// Math.sqrt = square root
