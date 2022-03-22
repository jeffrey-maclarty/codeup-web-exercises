// console.log(`link test`);

/*
 * Complete the TODO items below
 */
const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
];

// TODO: fill in your name and email and add some programming languages you know
// to the languages array
// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
// var name = 'your_name_here';
// var email = '';
// var languages = [];

let name = "Jeff";
let email = "j@mail.com"
let languages = ["html", "css", "javascript"];

console.log(users);

// TODO: rewrite the object literal using object property shorthand
// users.push({
//   name: name,
//   email: email,
//   languages: languages
// });
// returnreturn

users.push({
  name,
  email,
  languages,
});

// TODO: replace `var` with `let` in the following variable declarations
// var emails = [];
// var names = [];

let emails = [];
let names = [];

// TODO: rewrite the following using arrow functions
users.forEach(function(user) {
  return emails.push(user.email);
});

users.forEach => (user)


users.forEach(function(user) {
  return names.push(user.name);
});

// TODO: replace `var` with `let` in the following declaration
var developers = [];
users.forEach(function(user) {
  // TODO: rewrite the code below to use object destructuring assignment
  //       note that you can also use destructuring assignment in the function
  //       parameter definition
  const name = user.name;
  const email = user.email;
  const languages = user.languages;

  // TODO: rewrite the assignment below to use template strings
  developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));
});

// TODO: Use `let` for the following variable
var list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop
developers.forEach(function (developer) {

  // TODO: rewrite the assignment below to use template strings
  list += '<li>' + developer + '</li>';
});
list += '</ul>';


// ARROW FUNCTIONS
function sum(a, b) {
  function sum(a: any), b: any)
  any

  function isPositive(number) {
  return number >= 0
  }

  function randomNumber() {
  return Math.random
  }

  document.addEventListener('click', function() {
    console.log('Click')
  })
}
