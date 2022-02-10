"use strict";
console.log("Link Test");
console.log("---------");
console.log("         ");

let schedule = ['wake up', 'breakfast', 'drive to work', 'work', 'drive home', 'dinner'];

let numbers = [132, 2535, 6232, 245];

console.log(schedule);
console.log(numbers);

console.log(schedule[2]);
console.log(numbers[3]);

// ARRAY.push() - add item to end of array
schedule.push('sleep');
console.log(schedule);

// ARRAY.pop() - remove last item in the array
numbers.pop();
console.log(numbers);

// ARRAY.shift() - remove first item in the array
schedule.shift();
console.log(schedule);

// ARRAY.indexOf(ITEM) - identify index of item
let workIndex = schedule.indexOf('work');
console.log(workIndex);
