"use strict";
console.log(`Link Test`);
console.log(`---------`);
console.log(`         `);

// https://www.youtube.com/watch?v=aAAS9cEuFYI
//
// 20min


// const user1 = {
//     name: "Will",
//     score: 3,
//     incremement: function() {
//         user1.score++;
//     }
// };
//
// console.log(user1);
// user1.incremement();
// console.log(user1);
//
// const user3 = Object.create(null);
//
// console.log(user3);
//
// user3.name = "Eva";
// user3.score = 9;
//
// console.log(user3);
//
// user3.incremement = function () {
//     user3.score++;
// };
//
// console.log(user3);
//
// user3.incremement();
//
// console.log(user3);

// solution 1: generate objects using a function

function userCreator(name, score) {
    const newUser = {};
    newUser.name = name;
    newUser.score = score;
    newUser.incremement = function() {
        newUser.score++;
    };
    return newUser;
}

// console.log(user1);
// console.log(user2);
const user1 = userCreator("will", 3);
const user2 = userCreator("Tim", 5);
console.log(user1);
console.log(user2);
user1.incremement();
console.log(user1);