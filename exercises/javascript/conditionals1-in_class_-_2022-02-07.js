"use strict";
console.log("Link Test");
console.log("---------");
console.log();

// Create a function called getToDestination which will help determine how a person can get to their destination!
//     It will accept 4 arguments and the parameter names are:
//     age - the age of the rider
// isInsured - a boolean telling the function if the rider has insurance
// hasCar - a boolean describing if the rider has a car
// canGetRideshare - boolean describing if the rider can get a ride share (Uber, etc)
// If the rider is over 16, has insurance, and has a car then they can use their own vehicle
// If the rider is not over 16, has no insurance, OR has no car but they CAN get a rideshare, then they call up a rideshare service
// If the rider meets none of the above, they should call a friend for a ride!
//     This getToDestination should not return any value, but rather console log based on the conditions met.
//     getToDestination, part 2
// Create a function called canGetRideshare() which will RETURN a boolean
// It will determine if there are drivers nearby and the person has enough money for the ride
// Now, when you call getToDestination(), instead of passing in a canGetRideShare parameter
// Call canGetRideshare() in the else if after !isLegalDriver &&...
// Be sure to log to the user if they can or cannot get a rideshare

// function getToDestination(age, isInsured, hasCar, canGetRideshare) {
//     if (age > 16 && hasCar) {
//         console.log("Can use their own vehicle.");
//     } else if ((age <= 16 || !isInsured || !hasCar) && canGetRideshare) {
//         console.log("Can get a rideshare.");
//     } else {
//         console.log("They should call a friend for a ride.")
//     }
// }

// function canGetRideShare(driverNear, hasMoney) {
//     if (driverNear && hasMoney) {
//         return true;
//     } else {
//         return false;
//     }
// }

// REVIEW:
// function getToDestination(age, isInsured, hasCar, canGetRideshare) {
//     if (age > 16 && isInsured && hasCar) {
//         console.log("You can use your own vehicle")
//     } else if (age <= 16 && isInsured === false || !hasCar && canGetRideshare) {
//         console.log("you can get a rideshare")
//     } else {
//         console.log("You gotta call a friend")
//     }
// }
//
// getToDestination(17, false, true, true);


// console.log(getToDestination(16, true, true, canGetRideShare(true, false)));
//
// console.log(getToDestination(16, false, false, canGetRideShare(true, true)));
//
// console.log(getToDestination(16, false, false, canGetRideShare(true, false)));

function checkWeather(todaysWeather) {
    // if (todaysWeather === "snowing") {
    //     console.log("Please stay inside")
    // } else if (todaysWeather === "raining") {
    //     console.log("Grab an umbrella")
    // } else if (todaysWeather === "hailing") {
    //     console.log("Cover your car")
    // } else {
    //     console.log("Go play in the sun")
    // }

    switch (todaysWeather.toLowerCase().trim()) {
        case "snowing":
            console.log("Please stay inside");
            break;
        case "raining":
            console.log("Grab an umbrella");
            break;
        case "hailing":
            console.log("Cover your car");
            break;
        default:
            console.log("Go play in the sun");
            break;
    }
}

checkWeather(" HailiNg  ")