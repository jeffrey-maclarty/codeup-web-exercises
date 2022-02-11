"use strict";
console.log(`Link Test`);
console.log(`---------`);
console.log(`         `);


var dog1 = "Fido";
var dog2 = "Spot";
var dog3 = "Fifi";
var dog4 = "lola";

// each item in an array is called an element

// LOCAL DESIGN CHOICE
// fido is the first element, even though the index is 0
// therefore, for this exercise, Fido is odd
// thus even index values will be considered an odd element
// LOCAL DESIGN CHOICE
var dogNames = ["Fido", "Spot", "Fifi", "Lola", "Fido"];
var dogAges = [5, 2, 3, 10];

// can combine data types in a single array - avoid this
var dogs = ["Fido", 5, "Spot", 2];

// console.log(dogNames);
console.log("Dog names: " + dogNames);

console.log(dogNames.length);

// index numbering starts at 0
// not that index can also be referred to as a subscript
// console.log(dogNames[0]); // should output Fido
// how to verbalize element:
// the element at index 0
// the 0 element in the array

// log the 2nd element
// console.log(dogNames[1]);
// last element is at (index - 1)
var lastIndex = dogNames.length - 1;
// console.log(dogNames[lastIndex]) // should output Lola
// how to verbalize element:
// the last element in the array

// log the 2nd to last element
// console.log(dogNames[dogNames.length - 2]); // should output Fifi

// loops and arrays
// when a loops iterates it executes the body
// var i = 0 makes working with index easy
console.log();
// for (var i = 0; i < dogNames.length; i++) {
//     // output the ith element in the array
//     // output the element sub i
//     // output the element at index i
//     console.log("Dog at index " + i + " is " + dogNames[i]);
// }

// console.log();
// for (var i = dogNames.length - 1; i >= 0; i--) {
//     console.log("Dog at index " + i + " is " + dogNames[i]);
// }

// console.log();
// for (var i = dogNames.length - 1; i >= 0; i--) {
//     // LOCAL DESIGN CHOICE
//     // fido is the first element, even though the index is 0
//     // therefore, for this exercise, Fido is odd
//     // thus even index values will be considered an odd element
//     // LOCAL DESIGN CHOICE
//     if (i % 2 === 0) {
//         console.log("The odd dog at index " + i + " is " + dogNames[i]);
//     }
// }

dogNames.forEach(function(dogName, index, array) {
    // dogName = singular of array's multiple name
    //
    // this function willb executed on each element
    // as the forEach iterates over the array
    // however:
    // if (a certain record) {
    //      skipt that record
    // }
    if (index % 2 === 0) {
        console.log("Dog at index " + index + " is " + dogName)
    }
});


dogNames[0] = "Zantor";
console.log(dogNames);



let fruits = [];

fruits.unshift("apple");
fruits.push("banana");
fruits.unshift("cherry");
fruits.unshift("lemon");
fruits.push("mango");
fruits.unshift("pear");


// fruits.sort();

console.log(fruits);

// indexOf
// var dogNames = ["Fido", "Spot", "Fifi", "Lola", "Fido"];
console.log(dogNames.indexOf("Fido", 1))

// lastIndexOf
console.log(dogNames.lastIndexOf("Fido",))

// slice
console.log(dogNames.slice(1, 3))

// reverse
// forEach
dogNames.reverse().forEach(function (dogName) {
    console.log(dogName);
})