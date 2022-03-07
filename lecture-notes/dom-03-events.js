"use strict";
console.log(`Link Test`);
console.log(`---------`);
console.log();

// URL


// clicking anywhere on document:
// document.addEventListener('click', function () {
//     alert("you clicked something in 'document'")
// })
//
// window.addEventListener('click', function () {
//     alert("you clicked something in 'window'")
// })

// let handler = function () {
//     alert("you clicked something, this is 'let handler'")
// }
//
// document.addEventListener('click', handler);


// THREE STEPS:
//
// ACCESS (GRAB) ELEMENT
let header = document.querySelector('#main-header');
// console.log(header);
// attach event listener
header.addEventListener("click", headerClick)

// WHAT HAPPENS ON HEADER CLICK
function headerClick() {
    header.style.backgroundColor = 'yellow';
}

let input = document.querySelector('#search');
// input.addEventListener('keyup', function () {
//     console.log(input.value);
// })

// print key code
// let input = document.querySelector('#search');
// input.addEventListener('keyup', function () {
//     console.log(event.target);
//     console.log(event.code);
// })

input.addEventListener("keyup", upperCaseTextInput)

function upperCaseTextInput (event) {
    console.log(event.target.value);
    event.target.value = event.target.value.toUpperCase();
}

////////////////////

let moreBtn = document.querySelector('#more');

moreBtn.addEventListener('click', function(e) {
    let p = e.target.previousElementSibling;
    if (p.classList.contains("hidden")){
        p.classList.remove("hidden");
        e.target.innerText = "Less";
    } else {
        p.classlist.add("hidden");
        e.target.innerText = "more";
    }
    // e.target.previousElementSibling.classList.remove('hidden');
    // e.target.innerText = "less";
})
// returnreturn - fix this ^ code should be in fortran-web-exercises







