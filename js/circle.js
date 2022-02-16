(function () {
    "use strict";

    console.log(`Link Test`);
    console.log(`---------`);
    console.log();


    var circle = {
        radius: 3,

        getArea: function () {
            // return Math.PI * (this.radius^2); // DO NOT USE ^ FOR EXPONENTS
            return Math.PI * (this.radius ** 2);
            // return Math.PI * (Math.pow(this.radius, 2));
        },

        logInfo: function (doRounding) {
            if (doRounding) {
                console.log(`Area of a circle with radius: ${this.radius} is ${Math.round(this.getArea())}`)
            } else {
                console.log(`Area of a circle with radius: ${this.radius} is ${this.getArea()}`);
            }
        }
    };

    console.log(`Raw circle information`);
    circle.logInfo(false);
    console.log(`Circle information rounded to the nearest whole number`);
    circle.logInfo(true);

    console.log(`=======================================================`);

    circle.radius = 5;

    console.log(`Raw circle information`);
    circle.logInfo(false);
    console.log(`Circle information rounded to the nearest whole number`);
    circle.logInfo(true);


    // create a circle object
    // var circle = {
    //     radius: 3,
    //
    //     getArea: function () {
    //         // TODO: complete this method
    //         // hint: area = pi * radius^2
    //         // let area = Math.PI * (Math.pow(this.radius, 2));
    //         return Math.PI * (Math.pow(this.radius, 2)); // TODO: return the proper value
    //     },
    //
    //     logInfo: function(doRounding) {
    //         // TODO: complete this method.
    //
    //         if (doRounding) {
    //             console.log("Area of a circle with radius: " + this.radius + ", is: " + Math.round(this.getArea()));
    //         } else {
    //             console.log("Area of a circle with radius: " + this.radius + ", is: " + this.getArea());
    //         }
    //         // If doRounding is true, round the result to the nearest integer.
    //         // Otherwise, output the complete value
    //
    //         // console.log("Area of a circle with radius: " + this.radius + ", is: " + this.getArea());
    //     }
    // };
    //
    // // log info about the circle
    // console.log("Raw circle information");
    // circle.logInfo(false);
    // console.log("Circle information rounded to the nearest whole number");
    // circle.logInfo(true);
    //
    // console.log("=======================================================");
    // // TODO: Change the radius of the circle to 5.
    // circle.radius = 5;
    // // log info about the circle
    // console.log("Raw circle information");
    // circle.logInfo(false);
    // console.log("Circle information rounded to the nearest whole number");
    // circle.logInfo(true);

})();
