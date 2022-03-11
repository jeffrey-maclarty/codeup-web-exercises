"use strict";

// https://java.codeup.com/jquery/

// console.log($(".TableImage"));

// CHANGING STYLES OR ATTRIBUTE CONTENT
// 1. Get the thing
// 2. Change the thing
$(".TableImage").css("background-color", "green");

//  $(".div.cotainer-fluid > p.col-12");
//  console.log($(".div.cotainer-fluid > p.col-12"));
let originalBackgroundColor;
$("ul > li").hover(function () {
    // hover-in function
    // get original background color
    originalBackgroundColor = $(this).css("background-color");
    $(this).css("background-color");
    console.log($(this).html("BACON"))
    // set original background color
    $(this).css("background-color", "gray");
}, function() {
    // reset original background-color
    $(this).css("background-color", originalBackgroundColor)
})

console.log($(window));