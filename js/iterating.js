(function () {
    "use strict";
    console.log("Link Test");
    console.log("---------");
    console.log();

    console.log();
    console.log("Exercise 1")
    console.log("----------");
    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    let names = ['Villanelle', 'Baby', 'Claire', 'Hammy'];
    console.log(`The 'names' variable is a ${typeof names}.`);

    console.log();
    console.log("Exercise 2")
    console.log("----------");
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log(`There are ${names.length} elements/names in the 'names' array.`)

    console.log();
    console.log("Exercise 3")
    console.log("----------");
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(`Names in array (.log):`);
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);


    console.log();
    console.log("Exercise 4")
    console.log("----------");
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    listNames();

    function listNames() {
        console.log(`Names in array (for):`);
        for (let i = 0; i < names.length; i++) {
            console.log(names[i]);
        }
    }

    console.log();
    console.log("Exercise 5")
    console.log("----------");
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    console.log(`Names in array (forEach)`);
    names.forEach(function (name) {
        console.log(name);
    })

    console.log();
    console.log("Exercise 6")
    console.log("----------");

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    let names2 = ['Villanelle', 'Baby', 'Claire', 'Hammy', 'FortyTwo'];

    console.log(names2);

    returnOne(names2);
    returnTwo(names2);
    returnFive(names2);

    return names2;

    function returnOne(array) {
        console.log(array[0]);
        return name;
    }

    function returnTwo(array) {
        console.log(array[1]);
        return (array[1]);
    }

    function returnFive(array) {
        console.log(array[4]);
        return names2[4];
    }

})();
