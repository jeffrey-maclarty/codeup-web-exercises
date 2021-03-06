"use strict";
console.log(`Link Test`);
console.log(`---------`);
console.log();

/* ########################################################################## */

console.log(`Exercise 1`)
console.log(`----------`);
/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
function analyzeColor(color) {
    if (color === "blue") {
        return (`Blue is the color of the sky.`)
    } else if (color === "red") {
        return (`Strawberries are red.`)
    } else if (color === "cyan") {
        return (`I don't know anything about cyan.`)
    } else {
        return (`I don't know anything that is ${color}.`)
    }
}

// console.log(analyzeColor("blue"));
// console.log(analyzeColor("red"));
// console.log(analyzeColor("cyan"));
// console.log(analyzeColor("green"));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

console.log(`Exercise 2`)
console.log(`----------`);
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// console.log(analyzeColor(randomColor));

console.log(`Exercise 3`)
console.log(`----------`);
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
function analyzeColor(color) {
    switch (color) {
        case "blue":
            console.log(`Blue is the color of the sky.`);
            alert(`Blue is the color of the sky.`);
            break;
        case "red":
            console.log(`Strawberries are red.`);
            alert(`Strawberries are red.`);
            break;
        case "cyan":
            console.log(`I don't know anything about cyan.`);
            alert(`I don't know anything about cyan.`);
            break;
        default:
            console.log(`I don't know anything that is ${color}.`);
            alert(`I don't know anything that is ${color}.`);
            break;
    }
}

// analyzeColor(randomColor);

console.log(`Exercise 4`)
console.log(`----------`);
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// let color = prompt(`Type a color:`)
// analyzeColor(color);

/* ########################################################################## */

console.log(`Exercise 5`)
console.log(`----------`);
/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(luckyNum, total) {
    switch (luckyNum) {
        case 0:
            // alert(`Your lucky number is ${luc, you do not receive a discount and your cost is $" + total);
            alert(`Your lucky number is ${luckyNum}, you do not receive a discount and your cost is $${total}`);
            return (`Your final price is $${total}`);
        case 1:
            alert(`Your lucky number is ${luckyNum}, your cost before discount was $${total} and your cost after discount is $${(total - (total * .10))}`);
            return (`Your final price is $${(total - (total * .10))}`);
        case 2:
            alert(`Your lucky number is ${luckyNum}, your cost before discount was $${total} and your cost after discount is $${(total - (total * .25))}`);
            return (`Your final price is $${(total - (total * .25))}`);
        case 3:
            alert(`Your lucky number is ${luckyNum}, your cost before discount was $${total} and your cost after discount is $${(total - (total * .35))}`);
            return (`Your final price is $${(total - (total * .35))}`);
        case 4:
            alert(`Your lucky number is ${luckyNum}, your cost before discount was $${total} and your cost after discount is $${(total - (total * .50))}`);
            return (`Your final price is $${(total - (total * .50))}`);
        case 5:
            alert(`Your lucky number is ${luckyNum}, your cost before discount was $${total} and your purchase is free!`);
            return (`Your purchase is free!`);
    }
}

console.log(`Exercise 6`)
console.log(`----------`);
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your "calculateTotal" function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

// let total = prompt("What is your total price?");
//
// calculateTotal(luckyNumber, total);

console.log(`Exercise 7`)
console.log(`----------`);
/**
 * TODO:
 * Write some JavaScript that uses a confirm dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
userNumRequest();

function userNumRequest() {
    let userYes = confirm(`Would you like to enter a number?`);

    if (userYes) { // truthy/falsy
        let userNum = (parseInt(prompt(`Enter your number`)));

        if (userNum == 0) {
            alert(`The number ${userNum} is neither even or odd.`);
        } else if (userNum % 2 === 0) {
            alert(`The number ${userNum} is even.`);
        } else {
            alert(`the number ${userNum} is odd.`)
        }

        alert(`The number ${userNum} plus 100 is " + (userNum + 100) + ".`);

        if (userNum > 0) {
            alert(`The number ${userNum} is positive.`);
        } else if (userNum < 0) {
            alert(`The number ${userNum} is negative.`)
        } else {
            alert(`The number ${userNum} is neither positive or negative.`)
        }
    } else {
        alert(`Goodbye.`);
    }
}