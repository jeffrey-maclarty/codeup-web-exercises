"use strict";
console.log("Link Test");
console.log("---------");
console.log();

// a b c d e f g h i j k l m n o p q r s t u v w x y z
// a e o i u
// b c d f g h j k l m n p q r s t v w x y z
// ("a" || "b" || "c" || "d" || "e" || "f" || "g" || "h" || "i" || "j" || "k" || "l" || "m" || "n" || "o" || "p" || "q" || "r" || "s" || "t" || "u" || "v" || "w" || "x" || "y" || "z")

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

