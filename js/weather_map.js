"use strict";

// VARIABLES AND DEFAULTS
let day1 = [];
let day2 = [];
let day3 = [];
let day4 = [];
let day5 = [];
let days = [];
let newLon;
let newLat;
let fetchVariable = "";
let clickLoc;
let idleLoc;

let tempLon = -70.83;
let tempLat = 42.93;

getWeatherData(tempLon, tempLat)


// BEGIN FETCH AND SANITIZE
function getWeatherData(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lon}&lon=${lat}&units=imperial&appid=${OPENWEATHER_KEY}`)
        // returnreturn - lat lon are not working correctly
        .then(response => response.json())
        .then(data => {

                // function extractWeatherData(dayObj) {
                //     console.log(`test`)
                //     return {
                //
                //         date: dayObj.dt,
                //         dailyTemp: dayObj.temp.day,
                //         humidity: dayObj.humidity,
                //         pressure: dayObj.pressure
                //     }
                // }

                // for (let i = 0; i < 5; i++) { // BEGIN
                day1.date = data.daily[0].dt;
                day1.feelsLikeDay = data.daily[0].feels_like.day;
                day1.feelsLikeNight = data.daily[0].feels_like.night;
                day1.humidity = data.daily[0].humidity;
                day1.sunrise = data.daily[0].sunrise;
                day1.sunset = data.daily[0].sunset;
                day1.tempDay = data.daily[0].temp.day;
                day1.tempEvening = data.daily[0].temp.eve;
                day1.tempMorning = data.daily[0].temp.morn;
                day1.description = data.daily[0].weather[0].description;
                day1.icon = data.daily[0].weather[0].icon;
                day1.windTemp = data.daily[0].wind_deg;
                day1.windGust = data.daily[0].wind_gust;
                // } // END FOR LOOP

                day2.date = data.daily[1].dt;
                day2.feelsLikeDay = data.daily[1].feels_like.day;
                day2.feelsLikeNight = data.daily[1].feels_like.night;
                day2.humidity = data.daily[1].humidity;
                day2.sunrise = data.daily[1].sunrise;
                day2.sunset = data.daily[1].sunset;
                day2.tempDay = data.daily[1].temp.day;
                day2.tempEvening = data.daily[1].temp.eve;
                day2.tempMorning = data.daily[1].temp.morn;
                day2.description = data.daily[1].weather[0].description;
                day2.icon = data.daily[1].weather[0].icon;
                day2.windTemp = data.daily[1].wind_deg;
                day2.windGust = data.daily[1].wind_gust;

                day3.date = data.daily[2].dt;
                day3.feelsLikeDay = data.daily[2].feels_like.day;
                day3.feelsLikeNight = data.daily[2].feels_like.night;
                day3.humidity = data.daily[2].humidity;
                day3.sunrise = data.daily[2].sunrise;
                day3.sunset = data.daily[2].sunset;
                day3.tempDay = data.daily[2].temp.day;
                day3.tempEvening = data.daily[2].temp.eve;
                day3.tempMorning = data.daily[2].temp.morn;
                day3.description = data.daily[2].weather[0].description;
                day3.icon = data.daily[2].weather[0].icon;
                day3.windTemp = data.daily[2].wind_deg;
                day3.windGust = data.daily[2].wind_gust;

                day4.date = data.daily[3].dt;
                day4.feelsLikeDay = data.daily[3].feels_like.day;
                day4.feelsLikeNight = data.daily[3].feels_like.night;
                day4.humidity = data.daily[3].humidity;
                day4.sunrise = data.daily[3].sunrise;
                day4.sunset = data.daily[3].sunset;
                day4.tempDay = data.daily[3].temp.day;
                day4.tempEvening = data.daily[3].temp.eve;
                day4.tempMorning = data.daily[3].temp.morn;
                day4.description = data.daily[3].weather[0].description;
                day4.icon = data.daily[3].weather[0].icon;
                day4.windTemp = data.daily[3].wind_deg;
                day4.windGust = data.daily[3].wind_gust;

                day5.date = data.daily[4].dt;
                day5.feelsLikeDay = data.daily[4].feels_like.day;
                day5.feelsLikeNight = data.daily[4].feels_like.night;
                day5.humidity = data.daily[4].humidity;
                day5.sunrise = data.daily[4].sunrise;
                day5.sunset = data.daily[4].sunset;
                day5.tempDay = data.daily[4].temp.day;
                day5.tempEvening = data.daily[4].temp.eve;
                day5.tempMorning = data.daily[4].temp.morn;
                day5.description = data.daily[4].weather[0].description;
                day5.icon = data.daily[4].weather[0].icon;
                day5.windTemp = data.daily[4].wind_deg;
                day5.windGust = data.daily[4].wind_gust;

                // console.log(`day 1`, day1);
                // console.log(`day 2`, day2);
                // console.log(`day 3`, day3);
                // console.log(`day 4`, day4);
                // console.log(`day 5`, day5);
            }
        ).then(function () {
        renderForecasts();
    })
}

// END FETCH AND SANITIZE

// BEGIN RENDER HTML
function renderForecasts() {

    // UNIX TIME TO DAY OF THE WEEK
    (function () {
        day1.dayOfWeekName = new Date(day1.date * 1000).toLocaleDateString('en', {weekday: 'long'})
        day2.dayOfWeekName = new Date(day2.date * 1000).toLocaleDateString('en', {weekday: 'long'})
        day3.dayOfWeekName = new Date(day3.date * 1000).toLocaleDateString('en', {weekday: 'long'})
        day4.dayOfWeekName = new Date(day4.date * 1000).toLocaleDateString('en', {weekday: 'long'})
        day5.dayOfWeekName = new Date(day5.date * 1000).toLocaleDateString('en', {weekday: 'long'})

        // console.log(`new date`, day1.dayOfWeekName)
        // console.log(`new date`, day2.dayOfWeekName)
        // console.log(`new date`, day3.dayOfWeekName)
        // console.log(`new date`, day4.dayOfWeekName)
        // console.log(`new date`, day5.dayOfWeekName)
    })();


    // RENDER
    (function () {
        //language=HTML
        $("#day1").html(`
            <div class="daily daily-large">${day1.dayOfWeekName}</div>
            <div class="daily"><img src="http://openweathermap.org/img/w/${day1.icon}.png"
                                    alt="Icon indicating daily weather" class="daily"></div>
            <div class="daily daily-normal">${day1.description}</div>
            <div class="daily daily-large">${parseInt(day1.tempDay)}&#176;</div>
        `)

        //language=HTML
        $("#day2").html(`
            <div class="daily daily-large">${day2.dayOfWeekName}</div>
            <div class="daily"><img src="http://openweathermap.org/img/w/${day2.icon}.png"
                                    alt="Icon indicating daily weather" class="daily"></div>
            <div class="daily daily-normal">${day2.description}</div>
            <div class="daily daily-large">${parseInt(day2.tempDay)}&#176;</div>
        `)

        //language=HTML
        $("#day3").html(`
            <div class="daily daily-large">${day3.dayOfWeekName}</div>
            <div class="daily"><img src="http://openweathermap.org/img/w/${day3.icon}.png"
                                    alt="Icon indicating daily weather" class="daily"></div>
            <div class="daily daily-normal">${day3.description}</div>
            <div class="daily daily-large">${parseInt(day3.tempDay)}&#176;</div>
        `)

        //language=HTML
        $("#day4").html(`
            <div class="daily daily-large">${day4.dayOfWeekName}</div>
            <div class="daily"><img src="http://openweathermap.org/img/w/${day4.icon}.png"
                                    alt="Icon indicating daily weather" class="daily"></div>
            <div class="daily daily-normal">${day4.description}</div>
            <div class="daily daily-large">${parseInt(day4.tempDay)}&#176;</div>
        `)

        //language=HTML
        $("#day5").html(`
            <div class="daily daily-large">${day5.dayOfWeekName}</div>
            <div class="daily"><img src="http://openweathermap.org/img/w/${day5.icon}.png"
                                    alt="Icon indicating daily weather" class="daily"></div>
            <div class="daily daily-normal">${day5.description}</div>
            <div class="daily daily-large">${parseInt(day5.tempDay)}&#176;</div>
        `)

    })();
}

// END RENDER HTML


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

// INITIALIZE MAP
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
}

// END MAPBOX


function sendToFetch(newLon, newLat) {
    newLon = newLon.toFixed(2);
    newLat = newLat.toFixed(2);
    getWeatherData(newLon, newLat)
}
