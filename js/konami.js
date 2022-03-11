"use strict";
console.log(`Link Test`);
console.log(`---------`);
console.log();

// up       = 38
// down     = 40
// left     = 37
// right    = 39
// a A      = 65
// b B      = 66
// enter    = 13
let konamiCode = "3838404037393739666513";
let enteredCode = "";


$(document).keyup(function (event) {
    toString(enteredCode);
    // console.log(event.keyCode);
    enteredCode += event.keyCode;
    // console.log(enteredCode);
    if (enteredCode === konamiCode) {
        alert("You have added 30 lives!");
    } else {

    }
});


