"use strict";


// $('#codeup').html();
// console.log($('#codeup').html());
// var h1Contents = $('#codeup').html();
// alert(h1Contents);

// $('#codeup').click(function() {
//     var h1Contents = $('#codeup').html();
//     alert(h1Contents);
// });

// $('#codeup').click(function() {
//     alert($(this).html());
// });

// $('#codeup').click(function() {
//     $(this).html('Codeup Rocks!');
// });
// $("*").css("outline", "solid 1px black");
// console.log($('#my-element').css('width'));

// $('h2').css('color', 'firebrick')
// $('#my-element').css('color', 'firebrick').css('background-color', 'papayawhip');

// $('#my-element').css({
//     'color': 'firebrick',
//     'background-color': 'papayawhip'
// });

var highlightedStyles = {
    'color': 'red',
    'background-color': 'yellow',
    'font-size': '28px'
};

$('#my-element').css(highlightedStyles);

 $(document).ready(function() {
            $('#highlight-important').click(function(event) {
                event.preventDefault();
                $('.important').addClass('highlighted');
            });
        });
