"use strict";
console.log(`Link Test`);
console.log(`---------`);
console.log();

console.log();
console.log(`Exercise 1`);
console.log(`------------`);
// Warmup: Write a function called removeAll that takes two parameters
// One that represents an array and another that represents a value to be
// removed from that array. When called this function should return an
// array with all the values of the original array except the specified
// value to be removed.

// var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
//
// console.log(removeAll(bugs, "ant"));
//
// // should print
// [
//   'mosquito',
//   'scorpion',
//   'mosquito',
//   'typo',
//   'reference error',
//   'type error'
// ]

// var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
// let newArray = [];
//
// function removeOne (array, remove) {
//     for (let i = 0; i <= array.length; i++) {
//         if (array[i] === remove) {
//             newArray = array.splice(i, 1);
//             console.log(array.splice(i, 1));
//         }
//     }
    // console.log(bugs);
    // console.log(newArray);
    // console.log(bugs);
// }

// REVIEW
let anArr = [];
var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
function removeAll (anArray, valueToRemove) {
    let filteredArr = [];
    anArr.forEach(function (ele) {
        if (valueToRemove !== ele) {
            filteredArr.push(ele);
        }
    });
    console.log(filteredArr);
}

// console.log(bugs);
removeAll(bugs, "ant");