"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// let usersWithThreeOrMoreLanguages = users.filter(
//     user.languages >= 3
// );
// console.log(`usersWithThreeOrMoreLanguages: `, usersWithThreeOrMoreLanguages);
// returnreturn

let emailAddresses = users.map(function (user) {
    return user.email;
})
// console.log(emailAddresses)

// let totalYears = users.reduce(totalYears, user) => {
//     return totalYears + user.yearsOfExperience;
// }, 0}
// let averageYearsExp = totalYears / users.length;
// console.log(totalYears)
// returnreturn

// let longestEmail = users.reduce((longest, user) => {
//     if (user.email.length > longest.length) {
//         longest = user.email;
//     }
//     return longest;
// }, '')

// let instructorString = users.reduce((resultString, user) => {
//     return resultString += user.name + ", ";
// }, "Your instructors are: ")
// console.log(instructorString);

// let languages = users.reduce((listOfLanguages, user) => {
//
//     user.languages.forEach(function (lang) {
//         if (!listOfLanguages.includes(lang)) {
//             listOfLanguages.push(lang;
//         }
//
//     })
//     return listOfLanguages
// }, [])
//
// console.log(languages)
