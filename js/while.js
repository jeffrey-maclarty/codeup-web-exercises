"use strict";
console.log("Link Test");
console.log("---------");
console.log("         ");

// https://java.codeup.com/javascript-i/loops/

console.log("------------");
console.log("Exercise 2");
console.log("------------");
let i = 2;

// ascendNum();
function ascendNum() {
    while (i <= 65536) {
        console.log(i);
        i *= 2;
    }
}

console.log("------------");
console.log("Exercise 3");
console.log("------------");
// An ice cream seller can't go home until she sells all of her cones. First
// write enough code that generates a random number between 50 and 100
// representing the amount of cones to sell before you start your loop. Inside
// of the loop your code should generate another random number between 1 and 5,
// simulating the amount of cones being bought by her clients. Use a do-while
// loop to log to the console the amount of cones sold to each person. The below
// code shows how to get the random numbers for this exercise.
//
// This is how you get a random number between 50 and 100
// var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
// Math.floor(Math.random() * 5) + 1;
let allCones = Math.floor(Math.random() * 50) + 50;
let purchase = Math.floor(Math.random() * 5) + 1;

// iceCream();
function iceCream() {
    console.log(`You begin with ${allCones} cones to sell.`)

    do {
        console.log(`Client wants ${purchase} cones.  There are ${allCones} left.`);
        allCones -= purchase;
    } while (purchase < allCones);

    if (purchase > allCones) {
        console.log(`I cannot sell you ${purchase} cones, I only have ${allCones} left.`)
    } else if (purchase === allCones) {
        console.log('I sold them all!')
    }
}