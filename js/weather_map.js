"use strict";

/*
ToDo

1 - fix card background images
2 - finish basic userLocs
3 - finish nav modals

4 - find missing mapbox functions in old commits
5 - finish theme properties
6 - userLocs error checking and limits

 */


// VARIABLES AND DEFAULTS
let hoverBgWeatherId;
let hoverBgClass;
let userTheme;
let userLocs;

let map;
let geocoder;
let newLon;
let newLat;
let newMarker;
let setMarker;
let activeMarkers = [];

mapboxgl.accessToken = MAPBOX_KEY;

let tempLon = -70.83;
let tempLat = 42.93;


$(document).ready(function () {
    getWeatherData(tempLon, tempLat);
    runMapbox();
    mapBoxFunctions();
    themeChangerCheck();
    themeChanger()
    navModals();
    // userLocs();
});


function mapBoxFunctions() {
    mapBoxResult();
    mapBoxClick1();
    mapBoxClick2()
}


// BEGIN NAVMODALS
function navModals() {
    $(".nav-modal").addClass("hidden");

    $("#nav-modal-1-link").click(function () {
        console.log(`clicked`);
        $("#nav-modal-1-container").removeClass("hidden");
        $("#nav-modal-2-container").addClass("hidden");
        $("#nav-modal-3-container").addClass("hidden");

    })
    $("#nav-modal-2-link").click(function () {
        console.log(`clicked`);
        $("#nav-modal-2-container").removeClass("hidden");
        $("#nav-modal-1-container").addClass("hidden");
        $("#nav-modal-3-container").addClass("hidden");
    })
    $("#nav-modal-3-link").click(function () {
        console.log(`clicked`);
        $("#nav-modal-3-container").removeClass("hidden");
        $("#nav-modal-1-container").addClass("hidden");
        $("#nav-modal-2-container").addClass("hidden");
    })

    $(".nav-modal-close").click(function () {
        console.log(`clicked`);
        $(".nav-modal").addClass("hidden");
    })
} // END NAVMODALS


// BEGIN USER THEMES
function themeChangerCheck() {
    let checkThemeExists = localStorage.getItem("loc-stor-user-theme");

    if (checkThemeExists) {
        userTheme = localStorage.getItem("loc-stor-user-theme");
    } else {
        userTheme = "default";
    }
    themeChangerSet();
}


function themeChangerSet() {
    $("#theme-default").click(function () {
        userTheme = "default";
        localStorage.setItem("loc-stor-user-theme", "default");
        themeChanger();
    })
    $("#theme-coral").click(function () {
        userTheme = "coral";
        localStorage.setItem("loc-stor-user-theme", "coral");
        themeChanger();
    })
    $("#theme-neon-green").click(function () {
        userTheme = "neon-green";
        localStorage.setItem("loc-stor-user-theme", "neon-green");
        themeChanger();
    })
}

function themeChanger() {
    if (userTheme === 'coral') {
        $(".nav-ul").css("background-color", "#BB6464");
        // $("#duck").attr("src", "img/codeup-chevron-w-duck-transparent.png")
    } else if (userTheme === 'neon-green') {
        $(".nav-ul").css("background-color", "#00FFDD");
        // $("#duck").attr("src", "img/codeup-chevron-w-duck-transparent.png")
    } else {
        $(".nav-ul").css("background-color", "#367588");
        // $("#duck").attr("src", "img/codeup-chevron-w-duck-transparent.png")
    }
} // END USERTHEMES


// BEGIN FETCH AND RENDER HTML
function getWeatherData(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lon}&lon=${lat}&units=imperial&appid=${OPENWEATHER_KEY}`)
        // returnreturn - lat lon are not working correctly, have to be reversed
        .then(response => response.json())
        .then(data => {


                // BEGIN HOVER AND CLASS/IMAGE CHANGE
                $(".hover-bg").hover(function () {
                    // console.log(`typeof hoverBgWeatherId`, typeof hoverBgWeatherId)
                    // console.log(`value of hoverBgWeatherId`, hoverBgWeatherId)


                    // DETERMINE WEATHER FOR HOVERED ELEMENT
                    if ($(this).hasClass("hover-bg-1")) {
                        hoverBgWeatherId = data.daily[1].weather[0].id;
                    } else if ($(this).hasClass("hover-bg-2")) {
                        hoverBgWeatherId = data.daily[2].weather[0].id;
                    } else if ($(this).hasClass("hover-bg-3")) {
                        hoverBgWeatherId = data.daily[3].weather[0].id;
                    } else if ($(this).hasClass("hover-bg-4")) {
                        hoverBgWeatherId = data.daily[4].weather[0].id;
                    } else if ($(this).hasClass("hover-bg-5")) {
                        hoverBgWeatherId = data.daily[5].weather[0].id;
                    }
                    // console.log(`typeof hoverBgWeatherId`, typeof hoverBgWeatherId)
                    // console.log(`value of hoverBgWeatherId`, hoverBgWeatherId)


                    // DETERMINE APPROPRIATE CLASS TO ADD
                    switch (true) {
                        case hoverBgWeatherId >= 801:
                            hoverBgClass = "hover-bg-clouds";
                            break;
                        case hoverBgWeatherId === 800:
                            hoverBgClass = "hover-bg-clear";
                            break;
                        case hoverBgWeatherId >= 701 && hoverBgWeatherId <= 781:
                            hoverBgClass = "hover-bg-warning";
                            break;
                        case hoverBgWeatherId >= 600 && hoverBgWeatherId <= 622:
                            hoverBgClass = "hover-bg-snow";
                            break;
                        case hoverBgWeatherId >= 500 && hoverBgWeatherId <= 531:
                            hoverBgClass = "hover-bg-rain";
                            break;
                        case hoverBgWeatherId >= 300 && hoverBgWeatherId <= 321:
                            hoverBgClass = "hover-bg-rain";
                            break;
                        case hoverBgWeatherId >= 200 && hoverBgWeatherId <= 232:
                            hoverBgClass = "hover-bg-thunderstorm";
                            break;
                        default:
                            hoverBgClass = "hover-bg-kittens";
                            break;
                    }
                    // console.log(`typeof hoverBgWeatherId`, typeof hoverBgWeatherId)
                    // console.log(`value of hoverBgWeatherId`, hoverBgWeatherId)


                    // ADD CLASS / REMOVE CLASS
                    $(this).addClass(hoverBgClass);
                    $(this).next().addClass(hoverBgClass);
                }, function () {
                    $(this).removeClass("hover-bg-clouds hover-bg-clear hover-bg-warning hover-bg-snow hover-bg-rain hover-bg-thunderstorm hover-bg-kittens");
                    $(this).next().removeClass("hover-bg-clouds hover-bg-clear hover-bg-warning hover-bg-snow hover-bg-rain hover-bg-thunderstorm hover-bg-kittens");
                    // removing only the recently added class wasn't working all the time
                    // couldn't determine reason

                }) // END HOVER AND CLASS/IMAGE CHANGE


                // SMALL SCREEN CARD FUNCTIONALITY
                $('.card-sml').click(function () {
                    if ($(this).hasClass("card-sml-display")) {
                        $(this).addClass("card-sml-hidden");
                        $(this).removeClass("card-sml-display");
                        $(this).next().addClass("card-sml-display");
                        $(this).next().removeClass("card-sml-hidden");
                    }
                    if ($(this).hasClass("card-sml-last")) {
                        $(".card-sml-first").addClass("card-sml-display");
                        $(".card-sml-first").removeClass("card-sml-hidden");
                    }
                })


                for (let i = 1; i <= 5; i++) {

                    // UNIX TIME CONVERSIONS
                    let dayName = new Date(data.daily[i].dt * 1000).toLocaleDateString('en', {weekday: 'long'});
                    let dayDate = new Date(data.daily[i].dt * 1000).toISOString().split('T')[0];  // ryan
                    let sunriseHour = new Date(data.daily[i].sunrise * 1000).getHours();
                    sunriseHour = ((sunriseHour + 11) % 12 + 1);
                    let sunriseMinute = new Date(data.daily[i].sunrise * 1000).getMinutes();
                    let sunsetHour = new Date(data.daily[i].sunset * 1000).getHours();
                    sunsetHour = ((sunsetHour + 11) % 12 + 1);
                    let sunsetMinute = new Date(data.daily[i].sunset * 1000).getMinutes();


                    // PRECIPITATION CONVERTER
                    let rainProb = (data.daily[i].pop * 100).toFixed(0);


                    // SIMPLER VARIABLES FOR HTML RENDER
                    let humidity = data.daily[i].humidity;
                    let tempDay = data.daily[i].temp.day;
                    let description = data.daily[i].weather[0].description;
                    let icon = data.daily[i].weather[0].icon;
                    let windGust = data.daily[i].wind_gust;

                    // console.log(data.daily[i].weather[0].icon)


                    //language=HTML
                    // FRONT OF CARDS
                    $("#card-" + [i]).html(`
                        <div><h3>${dayName}</h3></div>
                        <div><img src="http://openweathermap.org/img/w/${icon}.png" class="hover-bg" alt="Daily weather icon">
                        </div>
                        <div><h5>${description}</h5></div>
                        <div><h4>${parseInt(tempDay)}&#176;</h4></div>
                    `)


                    //language=HTML
                    // BACK OF CARDS
                    $("#card-back-" + [i]).html(`
                        <div><h3>${dayDate}</h3></div>
                        <div><h5>Humidity: ${humidity}&#37;</h5></div>
                        <div><h5>Sunrise: ${sunriseHour}:${sunriseMinute} AM</h5></div>
                        <div><h5>Sunset: ${sunsetHour}:${sunsetMinute}  PM</h5></div>
                        <div><h5>Precipitation Chance: ${rainProb}&#37;</h5></div>
                        <div><h5>Wind Gust: ${windGust}mph</h5></div>
                    `)


                } // END OF RENDERING LOOP

            }
        )
} // END FETCH AND RENDER HTML


// BEGIN MAPBOX
// INITIALIZE MAP
function runMapbox() {

    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/outdoors-v11',
        zoom: 11,
        center: [-70.83, 42.93]
    });

    // ADD SEARCH
    map.addControl(
        geocoder = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl,
            marker: true,
        })
    );
}


function mapBoxResult() {
// ON SEARCH RENDER, GET LON LAT, ADD LON LAT OBJECT TO ACTIVEMARKERS[], SEND TO PREFETCH
    geocoder.on('result', function (event) {

        newLon = event.result.geometry.coordinates[0];
        newLat = event.result.geometry.coordinates[1];

        newMarker = event.result.geometry.coordinates;

        setMarker = new mapboxgl.Marker()
            .setLngLat(newMarker)
            .addTo(map);

        activeMarkers.push(newMarker);

        sendToFetch(newLon, newLat);

    })
}


function mapBoxClick1() {
// ON USERCLICK, GET LON LAT, SEND TO PREFETCH
    map.on('click', function (event) {

        newLon = event.lngLat.lng;
        newLat = event.lngLat.lat;
        // console.log(`on userclick, newLon newLat: `, newLon, newLat)

        sendToFetch(newLon, newLat);

    })
}


function mapBoxClick2() {
    map.on('click', function (event) {

        let testLon = event.lngLat.lng;
        let testLat = event.lngLat.lat;

        let testArray = [];
        testArray.push(testLon, testLat);

        let testMarker = new mapboxgl.Marker()
            .setLngLat(testArray)
            .addTo(map);

        activeMarkers.push(newMarker);

    })
} // END MAPBOX


// PREFETCH - RECEIVE, TOFIXED AND FORWARD LON LAT
function sendToFetch(newLon, newLat) {

    newLon = newLon.toFixed(2);
    newLat = newLat.toFixed(2);

    getWeatherData(newLon, newLat)

}


// USER LOCATIONS AND LOCALSTORAGE PREP

/*

formatForUserLocs = [
        {
            id: 1,
            name: "Hampton",
            userlocArray: [longitude, latitude],
        },
    ]

let userLocArray;
- variable to render and manipulate

let userLocStringified
- variable to send to localStorage

userLocsInLocal
- localStorage variable

userloc-1-display
userloc-1-submit
userloc-1-rm

userloc-add-name
userloc-add-submit

*/

function UserLocs() {

    // get from localStorage
    let userLocsArray = JSON.parse(localStorage.getItem('userLocs')) || [];
    // console.log(`userLocsArray out of localStorage: `, userLocsArray);

    // send to localStorage
    let userLocsStringified = JSON.stringify(userLocsArray);
    localStorage.setItem("userLocsInLocal", userLocsStringified);
    // console.log(`userLocsInLocal in localStorage: `, userLocsInLocal);


}


// KEEP UNTIL FINISHED

// ON PAGE LOAD
// map.on('sourcedata', function (event) {
//
//     console.log(`on page load: `, event)
//
//     if (map.loaded()) {
//         map.off('sourcedata');
//     }
//
// })


// ON PAGE IDLE
// map.on('idle', function () {
//
//     console.log(`idle event`)
//
//     idleLoc = map.getCenter();
//     let {lng, lat} = map.getCenter();
//     newLon = idleLoc.lng;
//     newLat = idleLoc.lat;
//
// })

// testLoop();
// function testLoop () {
//     for (let i = 1; i <= 5; i++) {
//         console.log(`testLoop: `, i);
//     }
// }

// CAN'T RECALL WHY I WRAPPED MAP.ON CLICK IN MAP.ON STYLE.LOAD
//
// ON USERCLICK, GET LON LAT AND PLACE MARKER
// map.on('style.load', function () {
//     map.on('click', function (e) {
//         newLon = e.lngLat.lng;
//         newLat = e.lngLat.lat;
//         // sendToFetch(newLon, newLat);
//         new mapboxgl.Marker()
//             .setLngLat(e.lngLat)
//             .addTo(map);
//     });
// });

// console.log(data)
// console.log(data.daily[i].weather[0].main)
// console.log(($(".hover-bg").this()))
// console.log(Object.values(weatherBgcheck).includes("div#card-back-3.card-back.hover-bg.hover-bg-kittens"))
// console.log(`hoverBgWeatherId in if`, hoverBgWeatherId);
// console.log(`description in if`, hoverBgClass = data.daily[5].weather[0].main);
// console.log(`after if - typeof and value of hoverBgClass: `, typeof hoverBgClass, hoverBgClass)
// console.log(`hoverBgWeatherId after switch`, hoverBgWeatherId);
// console.log(`description after switch`, hoverBgClass = data.daily[5].weather[0].main);
// console.log(`after switch - typeof and value of hoverBgClass: `, typeof hoverBgClass, hoverBgClass)