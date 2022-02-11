"use strict";

console.log();
console.log(`Exercise 1`)
console.log(`----------`);
/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

// sayHello("Jeffrey");

function sayHello(name) {
    return ("Hello, " + name + "!");
}

console.log();
console.log(`Exercise 2`)
console.log(`----------`);
/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

let helloMessage = sayHello("Jeffrey");

// console.log(helloMessage);

console.log();
console.log(`Exercise 3`)
console.log(`----------`);
/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

let myName = "Jeffrey";

// console.log(sayHello(myName));


// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

console.log();
console.log(`Exercise 4`)
console.log(`----------`);
/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
// function isTwo (random) {
//     return random === 2;
// }
// console.log(`${random} is isTwo(random)`);

console.log();
console.log(`Exercise 5`)
console.log(`----------`);
/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
// function calculateTip (percentage, billTotal) {
//     let tip = percentage * billTotal;
//     alert(tip);
//     // return (`Tip is $${tip}`);
// }

console.log();
console.log(`Exercise 6`)
console.log(`----------`);
/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
// let percentage = prompt(`What tip percentage?`);
// let billTotal = prompt(`What is the total bill?`);
// calculateTip(percentage, billTotal);
// alert(percentage * billTotal);

console.log();
console.log(`Exercise 7`)
console.log(`----------`);
/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
function applyDiscount (originalPrice, discountPercent) {
    let discountedPrice = originalPrice * discountPercent;
    return (`Discounted price is $${(originalPrice - discountedPrice).toFixed(2)}`);
}