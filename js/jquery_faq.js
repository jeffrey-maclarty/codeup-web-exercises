"use strict";

// ATTRIBUTES AND CSS
$("dd").addClass("invisible");

//language=HTML
$("dl").prepend(`
    <button id='visibility-switch' type='submit'>Visibility</button>
    <br><br>`);

$("#visibility-switch").click(function () {
    console.log(`visibility switch click`);
    $("dd").toggleClass("invisible");
})

// $("dt").click(function () {
//     $(this).css("background-color", "coral");
// })


// TRAVERSING
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

$("h3").click(function () {
    console.log(`clicking h3`)
    $(this).next().css("font-weight", "bold");
})

$("li").click(function () {
    $(this).parent().children(":first-child").css("color", "blue");
})

// BONUS
$("button1").click(function() {
    $("#image1").htm
})