"use strict";

"use strict";

// EXERCISE 1
$(document).ready(function() {

    // alert("DOM has finished loading");

});


// EXERCISE 2
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


// 6 - Remove the duplicate id. Each id should be unique on that page.


// CLASS SELECTORS
// 3 - Using jQuery, create a border around all elements with the class codeup that is 1 pixel wide and red.
$('.codeup').css('border', 'solid 1px red')


// ELEMENT SELECTORS
// 2 - Using jQuery, set the font-size of all li elements to 20px.
$('li').css('font-size', '20px')


// 3 - Craft selectors that highlight all the h1, p, and li elements.
// $('h1, p, li').css('background-color', 'yellow');
// $('h1').css('background-color', 'yellow');
// $('p').css('background-color', 'yellow');
// $('li').css('background-color', 'yellow');


// 4 - Create a jQuery statement to alert the contents of your h1 element(s).
let hOneContent = $('h1').html();
alert(hOneContent);


// MULTIPLE SELECTORS
// 1 - Combine your selectors that highlight all the h1, p, and li elements.
$('h1, p, li').css('background-color', 'yellow');