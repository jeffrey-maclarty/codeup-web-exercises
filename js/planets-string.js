(function () {
    "use strict";

    console.log(`Link Test`);
    console.log(`---------`);
    console.log();

    // https://java.codeup.com/javascript-i/arrays/manipulating/

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    console.log();
    console.log(`Exercise 1`)
    console.log(`----------`);
    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsArray = planetsString.split('|');

    console.log(planetsArray);

    console.log();
    console.log(`Exercise 2`)
    console.log(`----------`);
    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     **/
    let planetsStringBreak = planetsArray.join('<br>');

    document.write(planetsStringBreak);

    console.log(planetsStringBreak);
    console.log(`This would be useful to add strings to HTML via JavaScript.`)

    console.log();
    console.log(`Exercise Bonus`)
    console.log(`---------------`);
    /**
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     **/
    let planetsStringList1 = planetsArray.join('</li><li>');
    let planetsStringList2 = (`<ul><li>${planetsStringList1}</li></ul>`)

    console.log(planetsStringList2);

    document.write(planetsStringList2);

})();
