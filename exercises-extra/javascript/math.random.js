"use strict";
console.log("Link Test");
console.log("---------");
console.log();
    
console.log(Math.random());

let randomNum = Math.random();
console.log(`Math.random(); : ${randomNum}`);

// random whole number 1 -10
let randomWholeNum = Math.floor(Math.random() * 10) + 1;
console.log(`( 1 - 10 ) Math.floor(Math.random() * 10) + 1; : ${randomWholeNum}`);

let randomWholeNum2 = Math.floor(Math.random() * 10) + 10;
console.log(`( 10 - 19 ) Math.floor(Math.random() * 10) + 10; : ${randomWholeNum2}`);

let randomWholeNum3 = Math.floor(Math.random() * 10) + 11;
console.log(`( 11 - 20 ) Math.floor(Math.random() * 10) + 11; : ${randomWholeNum3}`);