"use strict";
console.log(`Link Test`);
console.log(`---------`);
console.log(`         `);

// Write a function called findAverage that takes in an
// array of integers representing grades and returns
// the average.
// Example input: [95, 74, 86, 100]
// Example output: 88.75 (edited)

let grades = [95, 74, 86, 100];

findAverage(grades);
function findAverage(array) {
    let sumOfGrades = 0;
    let avgOfGrades;

    for (let i = 0; i < array.length; i++) {
        sumOfGrades += array[i];
    }

    avgOfGrades = (sumOfGrades / array.length);

    console.log(avgOfGrades);

    return avgOfGrades;
}

