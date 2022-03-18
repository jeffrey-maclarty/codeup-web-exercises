"use strict";

// VARIABLES AND DEFAULTS
let newLon;
let newLat;
let clickLoc;
let idleLoc;
let cardBgImage;

// REFACTORING
let geocoder;
let userLocation;
let marker;
let popup;

let tempLon = -70.83;
let tempLat = 42.93;

getWeatherData(tempLon, tempLat)


// BEGIN FETCH AND RENDER HTML
function getWeatherData(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lon}&lon=${lat}&units=imperial&appid=${OPENWEATHER_KEY}`)
        // returnreturn - lat lon are not working correctly, have to be reversed
        .then(response => response.json())
        .then(data => {
                //
                // console.log(data);
                // console.log(data.daily[1].weather[0].id)
                for (let i = 0; i <= 5; i++) {

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
                    let rainProb = data.daily[i].pop;
                    rainProb = rainProb * 100;

                    // SIMPLER VARIABLES
                    let humidity = data.daily[i].humidity;
                    let tempDay = data.daily[i].temp.day;
                    let description = data.daily[i].weather[0].description;
                    let icon = data.daily[i].weather[0].icon;
                    let windGust = data.daily[i].wind_gust;
                    // let rainProb = data.daily[i].pop;

                    cardBgImage = parseInt(data.daily[i].weather[0].id)

                    switch (cardBgImage) {
                        case cardBgImage >= 801:
                            cardBgImage = "../img/weather-bg-scattered_clouds.png";
                            break;
                        case cardBgImage == 800 :
                            cardBgImage = "../img/weather-bg-clear_sky.png";
                            break;
                        case cardBgImage >= 701 && cardBgImage <= 781:
                            cardBgImage = "../img/weather-bg-warning.png";
                            break;
                        case cardBgImage >= 600 && cardBgImage <= 622:
                            cardBgImage = "../img/weather-bg-snow.png";
                            break;
                        case cardBgImage >= 500 && cardBgImage <= 531:
                            cardBgImage = "../img/weather-bg-snow.png";
                            break;
                        case cardBgImage >= 300 && cardBgImage <= 321:
                            cardBgImage = "../img/weather-bg-rain.png";
                            break;
                        case cardBgImage >= 200 && cardBgImage <= 232:
                            cardBgImage = "../img/weather-bg-thunderstorm.png";
                            break;
                        default:
                            cardBgImage = "../img/weather-bg-cthulhu.png";
                            break;
                    }
                    console.log(typeof cardBgImage)
                    $(".card-front").css("background-image", "url(${cardBgImage}) ");

                    //language=HTML
                    // FRONT OF CARDS
                    $("#card-" + [i]).html(`
                        <div class="card-content-large card-content-date">${dayName}</div>
                        <div><img src="http://openweathermap.org/img/w/${icon}.png" alt="Daily weather icon"
                                  class="card-content-normal">
                        </div>
                        <div class="card-content-normal">${description}</div>
                        <div class="card-content-large card-content-temp">${parseInt(tempDay)}&#176;</div>
                    `)

                    //language=HTML
                    // BACK OF CARDS
                    $("#card-back-" + [i]).html(`
                        <div class="card-content-large card-content-date">${dayDate}</div>
                        <div class="card-content-small">Humidity: ${humidity}&#37;</div>
                        <div class="card-content-small">Sunrise: ${sunriseHour}:${sunriseMinute} AM</div>
                        <div class="card-content-small">Sunset: ${sunsetHour}:${sunsetMinute}  PM</div>
                        <div class="card-content-small">Precipitation Chance: ${rainProb}&#37;</div>
                        <div class="card-content-small">Wind Gust: ${windGust}mph</div>
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


    // ON USERCLICK, GET LON LAT AND PLACE MARKER
    map.on('style.load', function () {
        map.on('click', function (e) {
            newLon = e.lngLat.lng;
            newLat = e.lngLat.lat;
            sendToFetch(newLon, newLat);
            new mapboxgl.Marker()
                .setLngLat(e.lngLat)
                .addTo(map);
        });
    });


    // AFTER SEARCH RENDERS, GET LON LAT
    map.on('idle', function (result) {
        idleLoc = map.getCenter();
        let {lng, lat} = map.getCenter();
        newLon = idleLoc.lng;
        newLat = idleLoc.lat;
        sendToFetch(newLon, newLat);
    })

    //
    // // REFACTORING ABOVE CODE FROM CASEY'S EXAMPLES
    // init();
    // setGeocoderEventListener();
    //
    // function init() {
    //
    //     /*Make the mapbox map object, set to map variable declared above*/
    //     // map = new mapboxgl.Map({
    //     //     container: 'map', // container ID
    //     //     style: 'mapbox://styles/mapbox/streets-v11', // style URL
    //     //     center: [-96.7969, 32.7763], // starting position [lng, lat]
    //     //     zoom: 12 // starting zoom
    //     // });
    //
    //     /*Make the geocoder object, set to the geocoder variable declared above*/
    //     geocoder = new MapboxGeocoder({
    //         accessToken: MAPBOX_KEY,
    //         mapboxgl: mapboxgl,
    //         marker: false
    //     });
    //
    //     /*Add the geocoder variable value to the map as a control (form input)*/
    //     map.addControl(geocoder);
    // }
    //
    // /**
    //  * Utility function to get a new Marker object whenever invoked
    //  * param coordinates: number array containing the lng lat of the location
    //  * **/
    // function getMarker(coordinates) {
    //     return new mapboxgl.Marker()
    //         .setLngLat(coordinates)
    //         .addTo(map);
    // }
    //
    //
    // /**
    //  * Utility function to get a new Popup object whenever invoked
    //  * param description: string represented details of the location
    //  * param coordinates: number array containing the lng lat of the location
    //  * **/
    // function getPopup(description, coordinates) {
    //     return new mapboxgl.Popup()
    //         .setLngLat(coordinates)
    //         .setHTML(`<p>${description}</p>`)
    //         .addTo(map);
    // }
    //
    //
    // /**
    //  * Encapsulates code to listen for the geocoder to return a result and allows us to get new Marker and Popup objects
    //  * **/
    // function setGeocoderEventListener() {
    //     geocoder.on("result", function (e) {
    //         /*We need to ensure marker/popup variables hoisted at the top actual *have* a value
    //         * Otherwise, calling a remove() method on a non-existent object will result in a runtime error
    //         * */
    //         if (marker) {
    //             marker.remove();
    //         }
    //         if (popup) {
    //             popup.remove();
    //         }
    //
    //         /*Finally, set the hoisted marker/popup variables to new respective objects*/
    //         // marker = getMarker(e.result.geometry.coordinates);
    //         // popup = getPopup(e.result.place_name, e.result.geometry.coordinates);
    //
    //         // console.log(`marker: `, marker);
    //         // console.log(`popup: `, popup)
    //
    //         console.log(`e:`, e)
    //         console.log(`test location name: `, e.result.place_name)
    //     });
    // }
    //

    // END REFACTORING

} // END MAPBOX


function sendToFetch(newLon, newLat) {
    newLon = newLon.toFixed(2);
    newLat = newLat.toFixed(2);
    getWeatherData(newLon, newLat)
}
