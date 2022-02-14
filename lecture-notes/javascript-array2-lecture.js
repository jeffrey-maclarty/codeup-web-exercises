"use strict";
console.log(`Link Test`);
console.log(`---------`);
console.log(`         `);

// REVERSING:
// avg();
function avg() {
    let numbers = [1, 2, 3, 4, 5, 6];

    for (let i = numbers.length - 1; i >= 0; i--) {
        if (i % 2 === 0) {
            console.log(numbers[i]);
        }
    }
}

// SORT
// note: case sensitive
// sorting();
function sorting() {
    let instructors = ["Casey", "Docrob", "Ry", "Jay", "David"];
    instructors.sort();
    console.log(instructors);
}

// sorting2();
function sorting2() {
    let numbers = [1, 8, 3, 2, 5, -1];
    console.log(numbers);
    numbers.sort();
    console.log(numbers);
}

// SPLITTING AND JOINING
// split - convert string to array
// join - convert string to array
let userInfo = "ry, sutton, 08/11/1994, rysutton, ford, mustang";

splitJoin1();
function splitJoin1() {
    let userInfoArr = userInfo.split(',');
    console.log(userInfoArr);

    let userInfoAgain = userInfoArr.join(',');
    console.log(userInfoAgain);

    let dt = new Date().toISOString();
    console.log(dt.split('T'));

}
