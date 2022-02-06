"use strict";
console.log("Link Test");
console.log("---------");
console.log();

// a b c d e f g h i j k l m n o p q r s t u v w x y z
// a e o i u
// b c d f g h j k l m n p q r s t v w x y z
// ("a" || "b" || "c" || "d" || "e" || "f" || "g" || "h" || "i" || "j" || "k" || "l" || "m" || "n" || "o" || "p" || "q" || "r" || "s" || "t" || "u" || "v" || "w" || "x" || "y" || "z")

// FUNCTION DRILLS
//
// 1. Make a function named isOdd(number)
function isOdd(number) {
    return number % 2 !== 0;
}

// 2. Make a function named isEven(number)
function isEven(number) {
    return number % 2 === 0;
}

// 3. Make a function named identity(input) that returns the input exactly as provided
function identity(input) {
    return input;
}

// 4. Make a function named isFive(input)
function isFive(input) {
    return input === 5;
}

// 5. Make a function named addFive(input) that adds five to some input
function addFive(input) {
    return input + 5;
}

// 6. Make a function named isMultipleOfFive(input)
function isMultipleOfFive(input) {
    let multFive = input / 5;
    if (multFive % 1 === 0) {
        return `${input} is a multiple of 5`;
    } else {
        return `${input} is _NOT_ a multiple of 5`;
    }
}

// 7. Make a function named isThree(input)
function isThree(input) {
    return input === 3;
}

// 8. Make a function named isMultipleOfThree(input)
function isMultipleOfThree(input) {
    let multThree = input / 3;
    if (multThree % 1 === 0) {
        return `${input} is a multiple of 3`;
    } else {
        return `${input} is _NOT_ a multiple of 3`;
    }
}

// 9. Make a function named IsMultipleOfThreeAndFive(input)
function isMultipleOfThreeAndFive(input) {
    let multThree = input / 3;
    let multFive = input / 5;
    if (multThree % 1 === 0 && multFive % 1 === 0) {
        return `${input} is a multiple of 3 and 5`;
    } else {
        return `${input} is _NOT_ a multiple of 3 and 5`;
    }
}

// 10. Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n
function isMultipleOf(target, n) {
    let isMult = target / n;
    return isMult % 1 === 0;
}

// 11. Make a function name isTrue(boolean)
function isTrue(boolean) {
    return boolean === true;
}

// 12. Make a functino named isFalse(boolean)
function isFalse(boolean) {
    return boolean === false;
}

// 13. Make a function named isTruthy(input), remember that values other than true will behave like true
function isTruthy(input) {
    return input == (!false || !0 || !-0 || !0n || !"" || !'' || !`` || !null || !undefined || !NaN);
}

// returnreturn - does not work
// document.all?
// look for simpler way


// 14. Make a function named isFalsy(input), remember that values other than false behave like false
function isFalsy(input) {
    return input === (false || 0 || -0 || 0n || "" || '' || `` || null || undefined || NaN);
}

// returnreturn - does not work
// document.all?
// look for simpler way

// 15. Make a function named isVowel(letter)
function isVowel(letter) {
    return letter === ("a" || "e" || "o" || "i" || "u");
}

// returnreturn - does not work

// 16. Make a function named isConsonant(letter)
function isConsonant(letter) {
    return letter === "b" || "c" || "d" || "f" || "g" || "h" || "j" || "k" || "l" || "m" || "n" || "p" || "q" || "r" || "s" || "t" || "v" || "w" || "x" || "y" || "z";
}

// returnreturn - does not work

// 17. Make a function named isCapital(letter)
function isCapital(letter) {
    return letter === letter.toUpperCase();
}

// 18. Make a function named isLowerCase(letter)
function isLowerCase(letter) {
    return letter === letter.toLowerCase();
}

// 19. Make a function named hasLowerCase(string)
function hasLowerCase(string) {
    return string.includes("a" || "b" || "c" || "d" || "e" || "f" || "g" || "h" || "i" || "j" || "k" || "l" || "m" || "n" || "o" || "p" || "q" || "r" || "s" || "t" || "u" || "v" || "w" || "x" || "y" || "z")
}

// returnreturn - does not work

// 20. Make a function named isSpace(letter)
function isSpace(letter) {
    return letter === " ";
}

// 21. Make a function named isZero(number)
function isZero(number) {
    return number === 0;
}

// 22. Make a function named notZero(input)
function notZero(input) {
    return input !== 0;
}

// 23. Make a function named lowerCase(string)
function lowerCase(string) {
    return string.toLowerCase();
}

// 24. Make a function named double(n) that returns a number times 2
function double(n) {
    return n * 2;
}

// 25. Make a function named triple(n) that returns a number times 3
function triple(n) {
    return n * 3;
}

// 26. Make a function named quadruple(n) that returns a number times 4
function quadruple(n) {
    return n * 4;
}

// 27. Make a function named half(n) that returns 1/2 of the provided input
function half(n) {
    return n / 2;
}

// 28. Make a function named subtract(a, b) that returns a minus b
function subtract(a, b) {
    return a - b;
}

// 29. Make a function named multiply(a, b) that return the product of a times b
function multiply(a, b) {
    return a * b;
}

// 30. Make a function named divide(a, b) that returns a divided by b
function divide(a, b) {
    return a / b;
}

// 31. Make a function named remainder(a, b) that returns remainder after dividing a by b
function remainder(a, b) {
    return a % b;
}

// returnreturn - use standard divide based on descripion?

// 32. Make a function named modulo(a, b) that returns the remainder after dividing a by b
function modulo(a, b) {
    return a % b;
}

// 33. Make a function named cube(n) that returns n * n * n
function cube(n) {
    return n * n * n;
}

// 34. Make a function named squareRoot(n) that returns the square root of the input
function squareRoot(n) {
    return Math.sqrt(n);
}

// 35. Make a function named cubeRoot(n) that returns the cube root of the input
function cubeRoot(n) {
    return Math.cbrt(n);
}

// 36. Make a function named invertSign(number) that returns a negative version of a positive number, a positivie version of a negative, and false for all else
function invertSign(number) {
    if (number === NaN) {
        return false;
    } else {
        return number * (-1);
    }
}

// returnreturn - "false all else"

// 37. Make a function named degreesToRadians(number)
function degreesToRadians(number) {
    return (number * Math.PI) / 180;
}

// 38. Make a function named radiansToDegrees(number)
function radiansToDegrees(number) {
    return number * (180 / Math.PI);
}

// 39. Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs
function isBlank(input) {
    if (input.includes("   ")) {
        return "Tab"
    } else if (input === "\n") {
        return "Newline"
    } else if (input.includes(" ")) {
        return "Space(s)"
    }
}
// returnreturn - misunderstanding description

// 40. Make a function named trim(string) that removes empty spaces before and after the input
function trim(string) {
    return string.trim();
}

// 41. Make a function named areEqual(input1, input2) that returns if both inputs have the same value
function areEqual(input1, input2) {
    if (input1 == input2) {
        return `${input1} has the same value as ${input2}`
    }
}

// 42. Make a function named areIdentical(input1, input2) that returns if both inputs are the same value and data type
function areIdentical(input1, input2) {
    if (input1 === input2) {
        return `${input1} has the same value and data type as ${input2}`
    }
}

// 43. Make a function named not(input) that returns the input a flipped boolean
function not(input) {
    return !input;
}

// 44. Make a function notNot(input) that returns the negation of the negation of the input
function notNot(input) {
    return !!input;
}

// 45. Make a function named and(predicate1, predicate2) that returns the logical operation of AND
function and(predicate1, predicate2) {
    return predicate1 && predicate2;
}

// 46. Make a function named or(predicate1, predicate2) that returns the logical operation of OR
function or(predicate1, predicate2) {
    return predicate1 || predicate2;
}
// returnreturn - misunderstanding description

// 47. Make a function named reverseString(string) that reverses a string
function reverseString(string) {
    console.log("Original string: " + string);

    let stringToArray = string.split(" ");
    console.log("String to array below:");
    console.log(stringToArray);

    let reversedArray = stringToArray.reverse();
    console.log("Reversed array below: ");
    console.log(reversedArray);

    let backToString = reversedArray.join(',');
    console.log("Reversed array to string: " + backToString);
}
// reverseString("Watch the fox run")

// 48. Make a function named absoluteValue(number) that returns the absolute value of a number
function absoluteValue(number) {
    return Math.abs(number);
}

// 49. Make a function named rollDice(sides) that takes in an argument containing the number of sides the die should have.  Generate a random number between 1 up to and including the number of sides
function rollDice(sides) {
    return Math.floor(Math.random() * (sides) + 1);
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor


// SIMPLE FUNCTION DRILLS
//
// 50 - 1.  Make a function called returnTwo() that returns the number 2 when called.  Test this function with console.log(returnTwo())
function returnTwo() {
    return 2;
}
console.log(returnTwo());

// 51 - 2.  Make a function called sayHowdy() whcich console.logs the string "Howdy!".
function sayHowdy() {
    console.log("Howdy!");
}
sayHowdy();

// 52 - 3. Make a function called returnName() that returns the string of your name
function returnName() {
    return "Jeffrey";
}
console.log(returnName());

// 53 - 4. Make a function called addThree() which takes in a number input and returns the number plus 3
function addThree(num) {
    return num + 3;
}
console.log(addThree(5));

// 54 - 5. Make a function called sayString() which returns the string input passed in
function sayString(input) {
    return input;
}
console.log(sayString("codeup"));

// CHALLENGE FUNCTION DRILLS
//
// 55 - 1. Write a function called identity(input) that takes in an argument called input and returns that input
function identity(input) {
    return input;
}
console.log(identity("testing input"));

// 56 - 2. Write a function called getRandomNumber(min, max) that returns a random number between min and max values sent to that function call
function getRandomNumber(min, max) {
    
}