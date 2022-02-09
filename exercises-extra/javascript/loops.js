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

// let fullNameEntered = false;
// let names = "";
// // WE DON'T KNOW HOW MANY NAMES THEY HAVE
// while (!fullNameEntered) {
//
//     names = names + " " + prompt("Please enter or add to your name")
//
//     fullNameEntered = confirm("Is this your full name?");
// }
//
// alert(names.trim());


// // TODO: A parking lot with 30 parking spaces wants to display the amount of spaces available as it gets filled.
//  Let's assume that there are allowing two cars into the parking lot at a time. As those cars take up spaces,
//  write a do-while loop that prints the spaces available. If the parking lot gets filled, print "this parking lot
//  is now full" to the console.

// let totalAvailableSpaces = 30;
// let currentAvailableSpaces = 30;
// do {
//     console.log(currentAvailableSpaces);
//     console.log("Current available spaces: " + currentAvailableSpaces);
//     currentAvailableSpaces;
// } while (currentAvailableSpaces >= 30)
// console.log(currentAvailableSpaces)

// let numberOfSpaces = 30;
//
// do {
//
//     console.log("spaces remaining: " + numberOfSpaces);
//
//     numberOfSpaces = numSpaces - 2;
//
// } while (numberOfSpaces)
//
// console.log("Full");



// TODO: using prompt() and alert(), write a while loop that will continue to ask for the correct password until the
//  correct password is given.
let pass = "hapless87";
let isCorrect = false;
let attempt = "";


while (!isCorrect) {
    attempt = prompt("Enter your password");
    isCorrect = (attempt === pass);
    if (!isCorrect) {
        alert("That is not the correct password");
    }
}