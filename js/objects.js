(function () {
    "use strict";
    console.log(`Link Test`);
    console.log(`---------`);
    console.log();

    console.log();
    console.log(`Exercise 1`)
    console.log(`----------`);
    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

        // let person = {
        //     firstName: "Jeffrey",
        //     lastName: "MacLarty",
        // };

    let person = {};
    person.firstName = "Jeffrey";
    person.lastName = "MacLarty";

    // console.log(`Object: ${person}`);
    console.log(person);
    // console.log(`Object:`, person);
    // console.log(`Object (JSON.stringify): ${JSON.stringify(person)}`)
    console.log(`firstName: ${person.firstName}`);
    console.log(`lastName: ${person.lastName}`);

    // https://stackoverflow.com/questions/44597208/javascript-es6-console-log-object-using-template-literal

    console.log();
    console.log(`Exercise 2`)
    console.log(`----------`);
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function () {
        console.log("Hello from " + person.firstName + " " + person.lastName);
        // OR USING 'this.'
        return ("Hello from " + this.firstName + " " + this.lastName);
    }

    console.log(person.sayHello());
    // console.log(Object.keys(person));

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    console.log();
    console.log(`Exercise 3 - forEach`)
    console.log(`----------`);

    hebDiscountForEach();

    function hebDiscountForEach() {
        shoppers.forEach(function (shopper) {
            if (shopper.amount >= 200) {
                let discount = (shopper.amount * .12);
                let amountAfterDiscount = (shopper.amount - discount);
                console.log(shopper.name + ", your amount before discount is $" + shopper.amount + ", your discount is $" + discount + " and your total is $" + amountAfterDiscount);
            } else {
                console.log(shopper.name + "'s receives no discount and the total is $" + shopper.amount);
            }
        })
    }

    console.log();
    console.log(`Exercise 3 - for`)
    console.log(`----------`);

    hebDiscount();

    function hebDiscount() {
        let shopperDiscount;
        let shopperDiscountPrice;

        for (let i = 0; i < shoppers.length; i++) {
            if (shoppers[i].amount >= 200) { // YES DISCOUNT
                shopperDiscount = (shoppers[i].amount * .12).toFixed(2);
                shopperDiscountPrice = (shoppers[i].amount - shopperDiscount).toFixed(2);
                console.log(`${shoppers[i].name}'s original price: $${shoppers[i].amount}, Discount: $${shopperDiscount}, Final Price: $${shopperDiscountPrice}`);
            } else { // NO DISCOUNT
                console.log(`${shoppers[i].name} does not get a discount and pays $${shoppers[i].amount}`);
            }

        }
    }


    console.log();
    console.log(`Exercise 4`)
    console.log(`----------`);
    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    let books = [
        {
            title: "The Salmon of Doubt",
            author: {
                firstName: "Douglas",
                lastName: "Adams",
            }
        },
        {
            title: "The Brothers Karamazov",
            author: {
                firstName: "Fyodor",
                lastName: "Dostoyevsky",
            }
        },
        {
            title: "Foundation",
            author: {
                firstName: "Isaac",
                lastName: "Asimov",
            }
        },
        {
            title: "Post Office",
            author: {
                firstName: "Charles",
                lastName: "Bukowski",
            }
        },
        {
            title: "All of Us",
            author: {
                firstName: "Raymond",
                lastName: "Carver",
            }
        },

    ]

    console.log(books[0].title);
    console.log(books[0].author.firstName);
    console.log(books[0].author.lastName);
    console.log();
    console.log(books[3].title);
    console.log(books[3].author.firstName);
    console.log(books[3].author.lastName);


    console.log();
    console.log(`Exercise 5`)
    console.log(`----------`);
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    bookList();

    function bookList() {
        for (let i = 0; i < books.length; i++) {
            console.log(`Book # ${(i + 1)}`);
            console.log(`Title: ${books[i].title}`);
            console.log(`Author: ${books[i].author.firstName} ${books[i].author.lastName}`)
            console.log(`---`);
        }
        console.log(`...`)
    }

    console.log();
    console.log(`Exercise 5 - forEach version`)
    console.log(`----------`);
    bookList2();

    function bookList2() {
        books.forEach(function (book, index) {
            console.log(`Book # ${(index + 1)}`);
            console.log(`Title: ${book.title}`);
            console.log(`Author: ${book.author.firstName} ${book.author.lastName}`)
            // showBookInfo(book);
            console.log(`---`);
        })
        console.log(`...`)
    }

    console.log();
    console.log(`Exercise 6 - BONUS`)
    console.log(`----------`);

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    // let books2 = [];
    //
    // function createBook(bookTitle, firstName, lastName) {
    //     books2 = {
    //         title: bookTitle,
    //         author: {
    //             firstName: firstName,
    //             lastName: lastName,
    //         }
    //     }
    //     books.push(books2);
    //     bookList();
    // }
    //
    // createBook("Lighthousekeeping", "Jeanette", "Winterson");
    //
    // console.log(books2);

    // REVIEW:
    // function createBook(title, authorName) {
    //     let authorNameSplit = authorName.split(' ');
    //     return {
    //         title: title,
    //         author: {
    //             firstName: authorNameSplit[0],
    //             lastName: authorNameSplit[1],
    //         }
    //     }
    // }

    // console.log(createBook('Clean Code', 'Bob Martin'));
    //
    // function addBook(book) {
    //     books.push(book);
    // }
    //
    // console.log(book);
    //
    // function showBookInfo(book) {
    //     // console.log(`Book # ${(index + 1)}`);
    //     console.log(`Title: ${book.title}`);
    //     console.log(`Author: ${book.author.firstName} ${book.author.lastName}`)
    //     console.log(`---`);
    // }
})();
