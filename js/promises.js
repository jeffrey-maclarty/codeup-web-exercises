"use strict";


// fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})
//
// function getGithubData () {
//     fetch(api.github.com/users/jeffrey-maclarty/events,
//         {headers:
//                 {'Authorization': 'GITHUB_KEY'}
//         })
// }
//
//
// getGithubData();


// fetch('https://api.github.com/repos/jeffrey-maclarty/codeup-web-exercises/commits', {
//     authorization: 'GITHUB_KEY', // Useful for including session ID (and, IIRC, authorization headers)
// })
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//         writeToPage(data);
//         // console.log(data[0].actor.login) // Prints result from `response.json()`
//     })
//     .catch(error => console.error(error))
//
// function writeToPage (data) {
//     // console.log(data);
//     // document.write(data[0].actor.login);
// }


// REVIEW:
// const baseURL = 'https://api.github.com'
//
// function getUserLastPushEvent(username) {
//     return fetch(baseURL + `/users/${username}/events/public`)
//         .then(res => res.json())
//         .then(events => {
//             for (let event of events) {
//                 if (event.type === 'PushEvent') {
//                     return event;
//                 }
//             }
//         })
// }

// getUserLastPushEvent('mojombo').then(event => console.log(event.actor.login));
// getUserLastPushEvent('mojombo').then(event => {
//     $('body').html('<h1>' + 'last event created at ' + event.created_at + '</h1>')
// });

// document.body.innerHTML = ('<h1>' + 'last event created at ' + event.created_at + '</h1>');


// restful

