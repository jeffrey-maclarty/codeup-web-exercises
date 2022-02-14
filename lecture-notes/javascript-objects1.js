"use strict";
console.log(`Link Test`);
console.log(`---------`);
console.log();

// https://java.codeup.com/javascript-i/objects/

// CORRECTION: JavaScript _DOES_ HAVE A CONCEPT OF CLASSES

// 2 ways of creating objects:
// prefer object literal notation:

var car = {};
console.log(typeof car);

car.make = "Ford";
console.log(car);

car.model = "Mustang";
console.log("Car model is " + car.model);

// accessing properties:
console.log(car.make);
console.log(car.model);
console.log(`${car.make} ${car.model}`);

let cohort = {
    name: 'fortran',
    startDate: '01/31/2022',
    endDate: '07/31/2022',
}

console.log(cohort);
console.log(cohort.name);
console.log(cohort.startDate);

console.log(Object.keys(car));
car.year = '1994';
console.log(Object.keys(car));

// IN KEYWORD

if (!('numOfWheels' in car)) { // don't forget extra set of parentheses
    car.numOfWheels = 4;
}
console.log(car);
console.log(Object.keys(car));

// NESTED VALUES
let elixirCohort = {
    name: 'Elixir',
    startYear: '2021',
    students: ['Joe', 'John', "Jen", "Ben", "Barb", "Brenda"],
    hasGraduated: false,

}
console.log(elixirCohort);
console.log(elixirCohort.hasGraduated);
console.log(elixirCohort.students);
console.log(elixirCohort.startYear);

elixirCohort.instructors = [
    {
        name: 'Ry',
        age: 27,
    },
    {name: 'Casey', age: 27,},
    {
        name: "Docrob",
        age: 40,
    },
]
console.log(elixirCohort.instructors[0].name);
console.log(elixirCohort);

// ASSIGNING FUNCTIONALITY (BEHAVIORS) TO AN OBJECT
// // THIS

car.honk = function () {
    console.log(`honk honk`);
}
car.honk();

elixirCohort.printAllInstructorNames = function () {
    console.log(this.instructors);
    this.instructors.forEach(function(instructor) {
        console.log(instructor.name);
    })
}
elixirCohort.printAllInstructorNames();

