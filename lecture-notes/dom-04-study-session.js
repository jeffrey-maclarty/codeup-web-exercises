"use strict";

// // 1. select the element to appy listener
// $('main div:first-child').hover(function () {
//     // 2. get the content from the hovered element
//     let content = $(this).html();
//     // console.log(content);
//     // 3. set the content of a different element
//     $('main div:nth-child(3)').html(content);
//     // console.log($('main div:nth-child(3)'));
// })

// 1. select the element to appy listener
// $('main div:first-child').click(function () {
//     let content = $(this).html();
//     $('main div:nth-child(3)').html(content);
// })

// let originalColor;
//
// $('.card').hover(
//
//     function () {
//         originalColor = $(this).css('background-color');
//         $(this).toggleClass('bg-dark')
//         $(this).toggleClass('text-light');
//         $(this).css('background-color', 'seagreen');
//     },
//     function () {
//         $(this).css('background-color', 'originalColor');
//     }
// );

// let originalColor;
//
// $('.card').hover(
//     function () {
//         originalColor = $(this).css('background-color');
//         $(this).css('background-color', 'seagreen');
//     },
//     function () {
//         $(this).css('background-color', 'originalColor');
//     }
// );

$('#user-input').keyup(
    function () {

        console.log(`keyup event is working`);

        let content = $(this).val();

        console.log(`content: `, content);

        $('#user-output').text(content);
    }
)
