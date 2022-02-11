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


// Can you explain how this works?

let a = [1, 23, 100, 99, 4, 3]

console.log(a);

a.sort(function(a,b) {
  return a - b;
});

console.log(a)

let b = [1, 23, 100, 99, 4, 3]

console.log(b);

b.sort(function(a,b) {
  return b - a;
});

console.log(b)

console.log(schedule);

schedule.sort(function(a,b) {
  return b - a;
});

console.log(schedule)