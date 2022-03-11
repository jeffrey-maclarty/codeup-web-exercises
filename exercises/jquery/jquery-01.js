"use strict";
console.log(`Link Test`);
console.log(`---------`);
console.log();

$('#textfield').keydown(function() {
    alert('A key was pushed down!');
});

//

$('#textfield2').keyup(function() {
    alert('a key was released!');
});