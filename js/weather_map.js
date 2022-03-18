"use strict";

// VARIABLES AND DEFAULTS
let newLon;
let newLat;
let clickLoc;
let idleLoc;

let tempLon = -70.83;
let tempLat = 42.93;


getWeatherData(tempLon, tempLat)


// BEGIN FETCH AND RENDER HTML
function getWeatherData(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lon}&lon=${lat}&units=imperial&appid=${OPENWEATHER_KEY}`)
        // returnreturn - lat lon are not working correctly, have to be reversed
        .then(response => response.json())
        .then(data => {

             
                for (let i = 0; i <= 5; i++) {

                    let dayName = new Date(data.daily[i].dt * 1000).toLocaleDateString('en', {weekday: 'long'});
                    let dayDate = new Date(data.daily[i].dt * 1000).toISOString().split('T')[0];

                    let humidity = data.daily[i].humidity;
                    let sunrise = data.daily[i].sunrise;
                    let sunset = data.daily[i].sunset;
                    let tempDay = data.daily[i].temp.day;
                    let description = data.daily[i].weather[0].description;
                    let icon = data.daily[i].weather[0].icon;
                    let windGust = data.daily[i].wind_gust;

                    //language=html
                    $("#card-" + [i]).html(`
<!--                        <div class="container-cards">-->
<!--                            <div class="flip-card-inner">-->
<!--                                <div class="flip-card-front">-->
                                    <div class="card-content-large card-content-large-date">${dayName}</div>
                                    <div><img src="http://openweathermap.org/img/w/${icon}.png" alt="Daily weather icon">
                                    </div>
                                    <div class="card-content-normal">${description}</div>
                                    <div class="card-content-large">${parseInt(tempDay)}&#176;</div>
<!--                                </div>-->
                    `)

                    $("#card-back-" + [i]).html(`
                        
<!--                                <div class="flip-card-back">-->
                                    <div class="card-content-large card-content-large-date">${dayDate}</div>
                                    <div class="card-content-small">Humidity: ${humidity}</div>
                                    <div class="card-content-small">Sunrise: ${sunrise}</div>
                                    <div class="card-content-small">Sunset: ${sunset}</div>
                                   
                                    <div class="card-content-small">Wind Gust: ${windGust}</div>
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
                    `)

                    //language=HTML
                    // $("#day" + [i]).html(`
                    //     <div>${dayName}</div>
                    //     <div><img src="http://openweathermap.org/img/w/${icon}.png" alt="Daily weather icon"></div>
                    //     <div>${description}</div>
                    //     <div>${parseInt(tempDay)}&#176;</div>
                    // `)

                    //language=HTML
                    // $("#day" + [i] + "-flip").html(`
                    //     <div>${dayDate}</div>
                    //     <div class="">${humidity}</div>
                    //     <div class="">${sunrise}</div>
                    //     <div class="">${sunset}</div>
                    //     <div class="">${windTemp}</div>
                    //     <div class="">${windGust}</div>
                    // `)
                }

            }
        ) // END FETCH AND RENDER HTML
}


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


    // GET LON LAT AFTER A SEARCH AND RENDER
    map.on('idle', function () {
        idleLoc = map.getCenter();
        let {lng, lat} = map.getCenter();
        newLon = idleLoc.lng;
        newLat = idleLoc.lat;
        sendToFetch(newLon, newLat);
    })


} // END MAPBOX


function sendToFetch(newLon, newLat) {
    newLon = newLon.toFixed(2);
    newLat = newLat.toFixed(2);
    getWeatherData(newLon, newLat)
}
