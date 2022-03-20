"use strict";

// VARIABLES AND DEFAULTS
let newLon;
let newLat;
let clickLoc;
let idleLoc;
let hoverBgWeatherId;
let hoverBgClass;

let tempLon = -70.83;
let tempLat = 42.93;


getWeatherData(tempLon, tempLat)


// BEGIN FETCH AND RENDER HTML
function getWeatherData(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lon}&lon=${lat}&units=imperial&appid=${OPENWEATHER_KEY}`)
        // returnreturn - lat lon are not working correctly, have to be reversed
        .then(response => response.json())
        .then(data => {


                // TODO:
                // mapbox
                //      - remove old pins
                //      - replace 'idle' event - it is adding an additional fetch call every reload
                //          - could wrap fetch in a function, use idle for initial load if low on time
                //          - or ignore it
                //      - possibly finish 'you are here', but results from data are not consistent and sometimes
                //        require pruning due to length
                //
                // css
                //      - text color contrast for background images
                //          - https://coolors.co/contrast-checker/ffffff-62788d
                //      - rewrite - too many classes, too many properties, out of order
                //      - ? theme change
                //          - change queryselector to jquery or just use jquery to change colors
                //              * document.querySelector('#css-default').innerHTML = '<link id="css-darkmode" rel="stylesheet" href="style-darkmode.css">'
                //
                // render
                //      - hover / image change is still buggy
                //
                // other
                //      - ? navbar and footer, finish css select menu from last week


                // returnreturn - FETCH IS BEING CALLED TWICE EVERY RELOAD BECAUSE OF MAPBOX IDLE EVENT


                // BEGIN HOVER AND CLASS/IMAGE CHANGE
                $(".hover-bg").hover(function () {

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


                    // DETERMINE APPROPRIATE CLASS TO ADD
                    switch (true) {
                        case hoverBgWeatherId >= 801:
                            hoverBgClass = "hover-bg-clouds";
                            break;
                        case hoverBgWeatherId === 800:
                            hoverBgClass = "hover-bg-clear";
                            break;
                        case hoverBgWeatherId >= 701 && choverBgWeatherId <= 781:
                            hoverBgClass = "hover-bg-warning";
                            break;
                        case hoverBgWeatherId >= 600 && hoverBgWeatherId <= 622:
                            hoverBgClass = "hover-bg-snow";
                            break;
                        case hoverBgWeatherId >= 500 && hoverBgWeatherId <= 531:
                            hoverBgClass = "hover-bg-rain";
                            break;
                        case hoverBgWeatherId >= 300 && hoverBgWeatherId <= 321:  // 'drizzle'
                            hoverBgClass = "hover-bg-rain";
                            break;
                        case hoverBgWeatherId >= 200 && hoverBgWeatherId <= 232:
                            hoverBgClass = "hover-bg-thunderstorm";
                            break;
                        default:
                            hoverBgClass = "hover-bg-kittens";
                            break;
                    }


                    // ADD CLASS / REMOVE CLASS
                    $(this).addClass(hoverBgClass);
                    $(this).next().addClass(hoverBgClass);
                }, function () {
                    $(this).removeClass("hover-bg-clouds hover-bg-clear hover-bg-warning hover-bg-snow hover-bg-rain hover-bg-thunderstorm hover-bg-kittens");
                    $(this).next().removeClass("hover-bg-clouds hover-bg-clear hover-bg-warning hover-bg-snow hover-bg-rain hover-bg-thunderstorm hover-bg-kittens");
                    // removing only the recently added class wasn't working all the time
                    // couldn't determine reason
                }) // END HOVER AND CLASS/IMAGE CHANGE


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
                    let rainProb = data.daily[i].pop * 100;


                    // SIMPLER VARIABLES FOR HTML RENDER
                    let humidity = data.daily[i].humidity;
                    let tempDay = data.daily[i].temp.day;
                    let description = data.daily[i].weather[0].description;
                    let icon = data.daily[i].weather[0].icon;
                    let windGust = data.daily[i].wind_gust;


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
                }
            }
        )
} // END FETCH AND RENDER HTML


// BEGIN MAPBOX
mapboxgl.accessToken = MAPBOX_KEY;

navigator.geolocation.getCurrentPosition(foundLoc, errorLoc);

function foundLoc(position) {
    // CENTER HARDCODED DUE TO VPN
    centerHere([position.coords.longitude, position.coords.latitude])
}


function errorLoc() {
    centerHere([-70.83, 42.93])
}


// INITIALIZE MAPBOX
function centerHere(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-70.83, 42.93],
        zoom: 11
    });


    // ADD SEARCH
    map.addControl(
        new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl,
            marker: true,
        })
    );


    // ON USERCLICK, GET LON LAT, PLACE MARKER, CALL SENDTOFETCH()
    map.on('click', function (e) {
        newLon = e.lngLat.lng;
        newLat = e.lngLat.lat;
        sendToFetch(newLon, newLat);
        new mapboxgl.Marker()
            .setLngLat(e.lngLat)
            .addTo(map);
    });


    // AFTER SEARCH RENDERS, GET LON LAT, CALL SENDTOFETCH()
    map.on('idle', function (result) {
        idleLoc = map.getCenter();
        let {lng, lat} = map.getCenter();
        newLon = idleLoc.lng;
        newLat = idleLoc.lat;
        sendToFetch(newLon, newLat);
    })


} // END MAPBOX


// RECEIVE AND FORWARD LON LAT
function sendToFetch(newLon, newLat) {
    newLon = newLon.toFixed(2);
    newLat = newLat.toFixed(2);
    getWeatherData(newLon, newLat)
}


// KEEP UNTIL FINISHED

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