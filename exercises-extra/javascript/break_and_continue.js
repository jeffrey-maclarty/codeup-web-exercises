"use strict";
console.log("Link Test");
console.log("---------");
console.log();

console.log("Break:")
for (let i = 1; i <= 15; i++) {
    if (i === 7) {
        break; // stops loop
    }

    console.log(i)
}

console.log();
console.log("Continue:")
for (let i = 1; i <= 15; i++) {

    if (i === 5 || i === 7 || i === 11) {
        continue; // do not execute code below (if and .log), do continue the loop
    }

    if (i === 7) {
        break; // stops loop
    }

    console.log(i);
}