"use strict";

$("dd").addClass("invisible");
// let visible = false;

//language=HTML
$("dl").prepend(`
    <button id='visibility-switch' type='submit'>Visibility</button>
    <br><br>`);

// $("#visibility-switch").click(function () {
//     if (visible) {
//         visible = false;
//         $("dd").removeClass("invisible");
//     } else {
//         visible = true;
//         $("dd").addClass("invisible")
//     }
// })

$("visibility-switch").click(function () {
    $("dd").toggleClass("invisible");
})














$("dt").click(function () {
    $(this).css("background-color", "yellow");
})

//
$(".parks").prepend(`
    <button id='last-li-yellow' type='submit'>Last li to yellow</button>
    <br><br>`);

$("#last-li-yellow").click(function () {
    $("ul").each(function () {
        $(this).children().last().css("background-color", "yellow");
    })

})