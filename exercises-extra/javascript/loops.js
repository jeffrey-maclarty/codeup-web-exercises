"use strict";
console.log("Link Test");
console.log("---------");
console.log("         ");

// URL


// var i = 0;
//
// while (i < 10) {
//     i++;
//     console.log("while loop iteration #" + i);
// i++;
// }

// let i = -3;
//
// do {
//     console.log("while loop iteration #" + i);
//     i++;
// } while (i < 10);

// let a = 1;
//
// while (a <= 5) {
//     a++;
//     console.log("a = " + a);
//
// }
//
// let b = 1;
//
// do {
//     b++;
//     console.log("b = " + b);
// } while (a <= 5);


// let isAwesome = true;
// let incrementor = 1;
// let decrementor = 24

// if (true) {
//     console.log("I am awesome!");
// }

// while (incrementor > 0) {
//     console.log(decrementor--);
// }

// TODO: Use a while loop to output the numbers from 8-50
// TODO: Using the same example, output the ODD numbers from 8-50
// let i = 8
// while (i <= 50) {
//     if (i % 2 !== 1) {
//         console.log(i);
//     }
//     i++;
// }

let fullNameEntered = false;
let names = "";
// WE DON'T KNOW HOW MANY NAMES THEY HAVE
while (!fullNameEntered) {

    names = names + " " + prompt("Please enter or add to your name")

    fullNameEntered = confirm("Is this your full name?");
}

alert(names.trim());