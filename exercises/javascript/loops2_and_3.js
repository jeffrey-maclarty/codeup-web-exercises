"use strict";
console.log("Link Test");
console.log("---------");
console.log("         ");

console.log();
console.log("Exercise 1");
console.log("----------");
// Write a loop that outputs the first 50 fibonacci numbers.
// https://en.wikipedia.org/wiki/Fibonacci_number
// Recommend starting your loop at 1 and ending your loop
// once you've calculated 50 fibonacci numbers.
let a = 0;
let b = 1;
let c = 0;
let d = 0;
// let newNum = 0;

// 0 + 1 = 1
// a + b = c
// 1 + 1 = 2
// c + c = d
// 2 + 1 = 3
// d + c = d
// 3 + 2 = 5
// d + c = d
// 5 + 3 = 8
// 8 + 5 = 13
// num1 + num2 = num3

// fibonacci();

function fibonacci() {
    for (let i = 1; i <= 10; i++) {
    }
}
// returnreturn


console.log();
console.log("Exercise 2");
console.log("----------");
// Write the code necessary to output the first 50 prime numbers
// Recommend starting your loop at 1 and ending your loop once you've
// calcualted 50 primes.
// https://en.wikipedia.org/wiki/Prime_number




// ## WHILE LOOPS EXTRAS

console.log();
console.log("Exercise 3");
console.log("----------");
// #### A) Maths!
// 1. Write a function called `add(num1, num2)` which returns the sum
// of a and b

console.log();
console.log("Exercise 4");
console.log("----------");
// 2. Write a function named `square(numToSqr)` which takes in a number
// (`numToSqr`) and returns the number multiplied by itself

console.log();
console.log("Exercise 5");
console.log("----------");
// 3. Write a function called `sumOfSquares(a, b)`.
//     1. You should find the square of `a`, then the square of `b`.
//     2. Invoke `add(num1, num2)` and pass the new squared values in
//     as arguments.


console.log();
console.log("Exercise 6");
console.log("----------");
// 1. Write a function named `getFizzBuzz(startingNum)` which performs
// the following actions:
//     1. If `startingNum` is divisible by 3
//         1. console log `"fizz"`
//     2. Else, if `startingNum` is divisible by 5
//         1. console log `"buzz"`
//     3. If `startingNum` is divisible by 3 ***AND*** divisible by 5
//         1. *return* a string which says `"FIZZ BUZZ"`



console.log();
console.log("Exercise 7");
console.log("----------");
// 2. Thinking about `getFizzBuzz(startingNum)`, let's console log
// the *return* value of this function
//     1. What if `getFizzBuzz` doesn't return a value (VOID)?
//         1. How do you want to handle that?



// ### WHILE LOOPS WITH FUNCTIONS
console.log();
console.log("Exercise 8");
console.log("----------");
// #### A) `getPaswordInput`
//
// 1. Define a function named `getPassword()` which performs the following
// actions:
//     1. Using `prompt()`, `alert()`, variables, and a while-loop, ask
//     the user to input their password until their entry matches your hard-coded password value.

// ***HINT: start by defining the correct password and don't forget to
// link your html file***


console.log();
console.log("Exercise 9");
console.log("----------");
// #### B) `getMeaningOfLife`

// 1. Write a function named `getMeaningOfLife` which accepts one parameter,
// `meaningfulNum`.
//     1. This function will use a ***while loop*** to compare its current
//     number (a variable named `counter`)
//        against the `meaningfulNum`.
//     2. *While* the `counter` is not equivalent to the `meaningfulNum`,
//     continue the loop.
//         1. Once that condition is broken, console log a string telling
//         the user `"The meaning of life, the universe, and everything is
//         [your meaningful number]"`
//
//
// 2. Thinking about the above function, `getMeaningOfLife`, let's ask a
// question: **What happens if the value of `meaningfulNum` is a
// non-numeric?**
//     1. Write some code to account for this case. ***How the function
//     handles the situation is up to you!***
//
//
// 3. Let's continue with `getMeaningOfLife`: If the value of `meaningfulNum`
// happens to be `42`, console log a separate message *at the end* of the
// function to say:
//    `"Did you bring your towel?"`