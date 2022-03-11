"use strict";

"use strict";

// EXERCISE 1: INTRODUCTION
// $(document).ready(function() {
// alert("DOM has finished loading");
// });


// EXERCISE: SELECTORS
// ID SELECTORS
// 3 - Use jQuery to select an element by the id. Alert the contents of the element.

// let idThreeContents = $('#list-item-id-3').html();
// alert(idThreeContents);


// 4 - Update the jQuery code to select and alert a different id.

// let idFiveContents = $('#list-item-id-5').html();
// alert(idFiveContents);


// 5 - Use the same id on 2 elements. How does this change the jQuery selection?

// let idSameId = $('#list-item-id-same').html();
// alert(idSameId);

// chooses the first one


// review:

// let student = [{
//     name: "J",
//     id: 12,
//     role: "student"
// }]
//
// $('body').append(getTemplate(student));
//
// function getTemplate(student) {
//     return (`
// <div>
//
// <h1>TEMPLATES >>>>>> YEAH!!!!</h1>
//
// <p>Hey, ${student[0].name}! Did you know you can use template literals to create HTML?</p>
//
// </div>
//
// <ul>
//     <li>Item 1</li>
//     <li>Item 2</li>
//     <li>Item 3</li>
//     <li>Item 4</li>
//     <li>Item 5</li>
//     <li>Item 6</li>
//     <li>Item 7</li>
// </ul>
// `);
// }


// CLASS SELECTORS
// 3 - Using jQuery, create a border around all elements with the class codeup that is 1 pixel wide and red.
// $('.codeup').css('border', 'solid 1px red')


// ELEMENT SELECTORS
// 2 - Using jQuery, set the font-size of all li elements to 20px.
// $('li').css('font-size', '20px')


// 3 - Craft selectors that highlight all the h1, p, and li elements.
// $('h1, p, li').css('background-color', 'yellow');
// $('h1').css('background-color', 'yellow');
// $('p').css('background-color', 'yellow');
// $('li').css('background-color', 'yellow');


// 4 - Create a jQuery statement to alert the contents of your h1 element(s).
// let hOneContent = $('h1').html();
// alert(hOneContent);


// MULTIPLE SELECTORS
// 1 - Combine your selectors that highlight all the h1, p, and li elements.
// $('h1, p, li').css('background-color', 'yellow');


// EXERCISE: MOUSE EVENTS
// 2 - Add jQuery code that will change the background color of an h1 element when clicked.
// $('h1').click($(this).css('background-color', 'coral'));

// $('h1').click(
//     $(this).css('background-color', 'coral');
// )

$('h1').click(
    function () {
        $(this).css('background-color', 'coral');
    }
);


// 3 - Make all paragraphs have a font size of 18px when they are double clicked.
$('p').dblclick(
    function () {
        $(this).css('font-size', '18px');
    }
);


// 4 - Set all li text color to red when the mouse is hovering; reset to black when it is not.
$('li').hover(
    function () {
        $(this).css('color', 'red');
    },
    function () {
        $(this).css('color', 'black');
    }
);