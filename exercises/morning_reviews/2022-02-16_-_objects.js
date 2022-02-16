"use strict";
console.log(`Link Test`);
console.log(`---------`);
console.log();

// URL

console.log();
console.log(`Exercise 1`);
console.log(`------------`);

// JS Object Warmup, pt 1:
// Create an object representing a person. It should have properties
// representing:
// names (an array of strings)
// date of birth
// occupation
// Hard code some values in that object, then log it and its properties
// to the console

// IN-CLASS REVIEW
// let person = {
//     names:
//         [
//             "Jeffrey",
//             "M",
//             "MacLarty",
//         ],
//     birthday: "1971-01-01",
//     occupation: "student",
// }
// console.log(person);
// person.names.forEach(function(name) {
//     console.log(name);
// })

// let person2 = Object.create(person);
// // person2["names"] = ["Ry", "Sutton"];
// person2.names = ["Ry", "Sutton"];
// person2.occupation = "Instructor";
// person2.birthday = "1992-01-01";
// console.log(person2);
//
// person2.birthday = "1992-01-02";
// console.log(person2);
//
// console.log(person);
// console.log(person.birthday);
// console.log(person.name);

// let person3 = person; // did not make a copy of person, it points to person
// console.log(person3);
//
// person3.birthday = "NONSENSE";
//
// console.log(person);

// JS Object Warmup, pt 2:
// Create an object representing a person’s contact info. It should have:
// phone number
// street address
// state
// postal code
// email address
// Hard code some values in that object, then log it and its properties
// to the console

// let contactInfo = {
//     phoneNumber: "555-342-3355",
//     streetAddress: "43 Riley Ave",
//     city: "Radish",
//     state: "MA",
//     postalCode: "84354",
//     email: "c.wall@gmail.com",
// }
// console.log(contactInfo);

// function contactInfo(phoneNumber, streetAddress, city, state, postalCode, email) {
//     this.phoneNumber = phoneNumber;
//     this.streetAddress = streetAddress;
//     this.city = city;
//     this.state = state;
//     this.postalCode = postalCode;
//     this.email = email;
// }
// TODO: Print out formatted address of contactInfo:
// like this:
// 123 Anywhere Ln.
// Beverly Hills, CA 90210

// printContactInfo(contactInfo);

// function printContactInfo(object) {
//     // console.log(this.streetAddress);
//     // console.log(`${this.city}, ${this.state}, ${this.postalCode}`);
//     console.log(contactInfo.streetAddress);
//     console.log(`${contactInfo.city}, ${contactInfo.state} ${contactInfo.postalCode}`);
// }

// JS Object Warmup, pt 3:
// Create a property on the person object to store their contact info
// -> Assign the contact info variable to that property
// -> Log that entire object and its properties to the console

// person.contactInfo = person;
// console.log(person);

// let contactInfo = contactInfo;

// Defines a person object
// function Person(names, occupation, dob, contactInfo) {
//     this.names = names;
//     this.occupation = occupation;
//     this.dob = dob;
//     this.contactInfo = contactInfo;
//     console.log(typeof this);
// }
//
// // makes a new person object instance
// let person2 = new Person(
//     names: ["Casey", "J", "Edwards"],
//     occupation: "Cat Herder / Firefighter",
//     dob: "1989-11-30")



// console.log(person2);




// function car(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
// }

// console.log(car);
// let myCar = new car('Eagle', 'Talon TSi', 1993);
// console.log(car);
// console.log(myCar);
// let myCar2 = new car("Chevrolet", "Colorado", 2012);
// console.log(myCar2);



// Defines a contact info object
function ContactInfo(phoneNumber, streetAddress, city, state, postalCode, emailAddress){
    this.phoneNumber = phoneNumber;
    this.streetAddress = streetAddress;
    this.city = city;
    this.state = state;
    this.postalCode = postalCode;
    this.emailAddress = emailAddress;
}
// Defines a person object
function Person(names, occupation, dob, contactInfo) {
    this.names = names;
    this.occupation = occupation;
    this.dob = dob;
    this.contactInfo = contactInfo;
}
// makes a new person object instance (by invoking the constructor)
let person2 = new Person(
    ["Casey", "J", "Edwards"],
    "Cat Herder / Firefighter",
    "11.30.1989",
    new ContactInfo(
        '123.456.7890',
        '123 Anywhere Ln',
        'Beverly Hills',
        'CA',
        '90210',
        'nope@no-no-no.no'));

console.log(person2.contactInfo.emailAddress);