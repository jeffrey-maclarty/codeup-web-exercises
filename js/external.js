"use strict";
console.log("Link Test");
console.log("---------");
console.log();

// https://java.codeup.com/javascript-i/javascript-with-html/

console.log("Hello from external JavaScript");
console.log();

// EXERCISE 1
// Use the alert function to show a message that says 'Welcome to my Website!'.
alert("Welcome to my Website!");

// EXERCISE 2
// Use a prompt to ask for the user's favorite color. Use the user's response to alert
// a message that says that the color entered is your favorite color too.
// For example, if the user enters "blue", your code should alert a message that says:
// "Great, blue is my favorite color too!"
let userColor = prompt("What is your favorite color?");

alert("Great, " + userColor + " is my favorite color too!");

// EXERCISE 3
// Complete exercise 3 from the previous lesson, but write your code in the external.js file
// instead of in the console.
// When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
// Use an alert to show the results of each problem.

// Write some JavaScript code, that is, variables and operators, to describe the following scenarios.
// Do not worry about the real operations to get the values, the goal of these exercises is to
// understand how real world conditions can be represented with code.

// 3a
// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days,
// they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a
// movie per day is $3, how much will you have to pay?
let littleMermaid = parseInt(prompt("How many days did you rent The Little Mermaid?"));
let brotherBear = parseInt(prompt("How many days did you rent Brother Bear?"));
let hercules = parseInt(prompt("How many days did you rent The Hercules?"));
let dailyCost = parseInt(prompt("How much does a movie cost for one day?"));
let totalPrice = (littleMermaid + brotherBear + hercules) * dailyCost;

alert("Total cost of movies is $" + totalPrice + ".");

// 3b
// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you
// a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you
// receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours
// for Amazon.
let googleHourly = prompt("How much does Google pay per hour?");
let amazonHourly = prompt("How much does Amazon pay her hour?");
let facebookHourly = prompt("How much does Facebook pay her hour?");
let googleHours = prompt("How many hours did you work for Google?");
let amazonHours = prompt("How many hours did you work for Amazon?");
let facebookHours = prompt("How many hours did you work for Facebook?");
let totalPay = (googleHourly * googleHours) + (amazonHourly + amazonHours) + (facebookHourly + facebookHours);

alert("Total contracting pay is $" + totalPay + ".");

// 3c
// A student can be enrolled in a class only if the class is not full and the class schedule does not
// conflict with her current schedule.
let classFull = confirm("Is the class full? ok = yes / cancel = no");
let classConflict = confirm("Is there a scheduling conflict? ok = yes / cancel = no");
let canEnroll = !classFull && !classConflict;

alert("Student may enroll in class: " + canEnroll);

// 3d
// A product offer can be applied only if a person buys more than 2 items,
// and the offer has not expired. Premium members do not need to buy a specific
// amount of products.
let numberOfItems = prompt("Number of items bought?");
let offerValid = confirm("Offer is still valid? ok = yes / cancel = no");
let premiumMember = confirm("Premium member? ok = yes / cancel = no");
// let mayPurchase = (numberOfItems > 2 && offerValid === true) || (offerValid === true && premiumMember === true);
// using truthy / falsy:
let mayPurchase = (numberOfItems > 2 && offerValid) || (offerValid && premiumMember);

alert("Customer may purchase items: " + mayPurchase);

