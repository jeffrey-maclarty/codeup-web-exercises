"use strict";
console.log(`Link Test`);
console.log(`---------`);
console.log();

function isANumber (input) {
    if (typeof input === 'number') {
        console.log(`${input} is a number.`);
        true;
    } else {
        console.log(`${input} is _NOT_ a number.`);
        return false;
    }
}

isANumber(10);
isANumber("test");
isANumber(false);
isANumber([34343, 434343])
