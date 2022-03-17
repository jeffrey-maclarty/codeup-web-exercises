"use strict";

// VARIABLES AND DEFAULTS
let clicklon;
let clickLat;
let fetchVariable = "";

// console.log('fetchVariable before getWeather: ', fetchVariable);

getWeather();

// BEGIN GETWEATHER FUNCTION WRAPPING OPENWEATHER TO INCORPORATE USER CLICK
function getWeather(clicklon, clickLat) {
    // console.log(`clicklon - in getWeather: `, clicklon)
    // console.log(`userLit - in getWeather: `, clickLat)
    // console.log(`typeof clicklon - in getWeather: `, typeof clicklon)
    if (typeof clicklon === 'number') {
        // console.log(`clicklon - in if: `, clicklon)
        // console.log(`userLit - in if: `, clickLat)
        fetchVariable = "https://api.openweathermap.org/data/2.5/onecall?lat=" + clickLat + "&lon=" + clicklon + "&&units=imperial&appid=";
    } else {
        fetchVariable = "https://api.openweathermap.org/data/2.5/onecall?lat=42.93&lon=-70.83&&units=imperial&appid=";
        // console.log(`clicklon - in else if: `, clicklon)
        // console.log(`userLit - in else if: `, clickLat)
    }
// } // END GETWEATHER ORIGINAL


// FETCH AND DAY OBJECTS
    fetch(fetchVariable + OPENWEATHER_KEY)
        .then(response => response.json())
        .then(data => {
            day1.dailyClouds = data.daily[0].clouds;
            day1.dailyClouds = data.daily[0].clouds;
            day1.dailyDewPoint = data.daily[0].dew_point;
            day1.dailyDate = data.daily[0].dt;
            day1.dailyFeelsLikeDay = data.daily[0].feels_like.day;
            day1.dailyFeelsLikeEve = data.daily[0].feels_like.eve;
            day1.dailyFeelsLikeMorn = data.daily[0].feels_like.morn;
            day1.dailyFeelsLikeNight = data.daily[0].feels_like.night;
            day1.dailyHumidity = data.daily[0].humidity;
            day1.dailyMoonPhase = data.daily[0].moon_phase;
            day1.dailyMoonRise = data.daily[0].moonrise;
            day1.dailyMoonSet = data.daily[0].moonset;
            day1.dailyProbablityPrecip = data.daily[0].pop;
            day1.dailyPressure = data.daily[0].pressure;
            day1.dailySunrise = data.daily[0].sunrise;
            day1.dailySunset = data.daily[0].sunset;
            day1.dailyTempDay = data.daily[0].temp.day;
            day1.dailyTempEve = data.daily[0].temp.eve;
            day1.dailyTempMax = data.daily[0].temp.max;
            day1.dailyTempMin = data.daily[0].temp.min;
            day1.dailyTempMorn = data.daily[0].temp.morn;
            day1.dailyUltravioletIndex = data.daily[0].uvi;
            day1.dailyWeatherMain = data.daily[0].weather[0].main;
            day1.dailyWeatherDescription = data.daily[0].weather[0].description;
            day1.dailyWeatherIcon = data.daily[0].weather[0].icon;
            day1.dailyWindDeg = data.daily[0].wind_deg;
            day1.dailyWindGust = data.daily[0].wind_gust;
            day1.dailyWindSpeed = data.daily[0].wind_speed;

            day2.dailyClouds = data.daily[1].clouds;
            day2.dailyClouds = data.daily[1].clouds;
            day2.dailyDewPoint = data.daily[1].dew_point;
            day2.dailyDate = data.daily[1].dt;
            day2.dailyFeelsLikeDay = data.daily[1].feels_like.day;
            day2.dailyFeelsLikeEve = data.daily[1].feels_like.eve;
            day2.dailyFeelsLikeMorn = data.daily[1].feels_like.morn;
            day2.dailyFeelsLikeNight = data.daily[1].feels_like.night;
            day2.dailyHumidity = data.daily[1].humidity;
            day2.dailyMoonPhase = data.daily[1].moon_phase;
            day2.dailyMoonRise = data.daily[1].moonrise;
            day2.dailyMoonSet = data.daily[1].moonset;
            day2.dailyProbablityPrecip = data.daily[1].pop;
            day2.dailyPressure = data.daily[1].pressure;
            day2.dailySunrise = data.daily[1].sunrise;
            day2.dailySunset = data.daily[1].sunset;
            day2.dailyTempDay = data.daily[1].temp.day;
            day2.dailyTempEve = data.daily[1].temp.eve;
            day2.dailyTempMax = data.daily[1].temp.max;
            day2.dailyTempMin = data.daily[1].temp.min;
            day2.dailyTempMorn = data.daily[1].temp.morn;
            day2.dailyUltravioletIndex = data.daily[1].uvi;
            day2.dailyWeatherMain = data.daily[1].weather[0].main;
            day2.dailyWeatherDescription = data.daily[1].weather[0].description;
            day2.dailyWeatherIcon = data.daily[1].weather[0].icon;
            day2.dailyWindDeg = data.daily[1].wind_deg;
            day2.dailyWindGust = data.daily[1].wind_gust;
            day2.dailyWindSpeed = data.daily[1].wind_speed;

            day3.dailyClouds = data.daily[2].clouds;
            day3.dailyClouds = data.daily[2].clouds;
            day3.dailyDewPoint = data.daily[2].dew_point;
            day3.dailyDate = data.daily[2].dt;
            day3.dailyFeelsLikeDay = data.daily[2].feels_like.day;
            day3.dailyFeelsLikeEve = data.daily[2].feels_like.eve;
            day3.dailyFeelsLikeMorn = data.daily[2].feels_like.morn;
            day3.dailyFeelsLikeNight = data.daily[2].feels_like.night;
            day3.dailyHumidity = data.daily[2].humidity;
            day3.dailyMoonPhase = data.daily[2].moon_phase;
            day3.dailyMoonRise = data.daily[2].moonrise;
            day3.dailyMoonSet = data.daily[2].moonset;
            day3.dailyProbablityPrecip = data.daily[2].pop;
            day3.dailyPressure = data.daily[2].pressure;
            day3.dailySunrise = data.daily[2].sunrise;
            day3.dailySunset = data.daily[2].sunset;
            day3.dailyTempDay = data.daily[2].temp.day;
            day3.dailyTempEve = data.daily[2].temp.eve;
            day3.dailyTempMax = data.daily[2].temp.max;
            day3.dailyTempMin = data.daily[2].temp.min;
            day3.dailyTempMorn = data.daily[2].temp.morn;
            day3.dailyUltravioletIndex = data.daily[2].uvi;
            day3.dailyWeatherMain = data.daily[2].weather[0].main;
            day3.dailyWeatherDescription = data.daily[2].weather[0].description;
            day3.dailyWeatherIcon = data.daily[2].weather[0].icon;
            day3.dailyWindDeg = data.daily[2].wind_deg;
            day3.dailyWindGust = data.daily[2].wind_gust;
            day3.dailyWindSpeed = data.daily[2].wind_speed;

            day4.dailyClouds = data.daily[3].clouds;
            day4.dailyClouds = data.daily[3].clouds;
            day4.dailyDewPoint = data.daily[3].dew_point;
            day4.dailyDate = data.daily[3].dt;
            day4.dailyFeelsLikeDay = data.daily[3].feels_like.day;
            day4.dailyFeelsLikeEve = data.daily[3].feels_like.eve;
            day4.dailyFeelsLikeMorn = data.daily[3].feels_like.morn;
            day4.dailyFeelsLikeNight = data.daily[3].feels_like.night;
            day4.dailyHumidity = data.daily[3].humidity;
            day4.dailyMoonPhase = data.daily[3].moon_phase;
            day4.dailyMoonRise = data.daily[3].moonrise;
            day4.dailyMoonSet = data.daily[3].moonset;
            day4.dailyProbablityPrecip = data.daily[3].pop;
            day4.dailyPressure = data.daily[3].pressure;
            day4.dailySunrise = data.daily[3].sunrise;
            day4.dailySunset = data.daily[3].sunset;
            day4.dailyTempDay = data.daily[3].temp.day;
            day4.dailyTempEve = data.daily[3].temp.eve;
            day4.dailyTempMax = data.daily[3].temp.max;
            day4.dailyTempMin = data.daily[3].temp.min;
            day4.dailyTempMorn = data.daily[3].temp.morn;
            day4.dailyUltravioletIndex = data.daily[3].uvi;
            day4.dailyWeatherMain = data.daily[3].weather[0].main;
            day4.dailyWeatherDescription = data.daily[3].weather[0].description;
            day4.dailyWeatherIcon = data.daily[3].weather[0].icon;
            day4.dailyWindDeg = data.daily[3].wind_deg;
            day4.dailyWindGust = data.daily[3].wind_gust;
            day4.dailyWindSpeed = data.daily[3].wind_speed;

            day5.dailyClouds = data.daily[4].clouds;
            day5.dailyClouds = data.daily[4].clouds;
            day5.dailyDewPoint = data.daily[4].dew_point;
            day5.dailyDate = data.daily[4].dt;
            day5.dailyFeelsLikeDay = data.daily[4].feels_like.day;
            day5.dailyFeelsLikeEve = data.daily[4].feels_like.eve;
            day5.dailyFeelsLikeMorn = data.daily[4].feels_like.morn;
            day5.dailyFeelsLikeNight = data.daily[4].feels_like.night;
            day5.dailyHumidity = data.daily[4].humidity;
            day5.dailyMoonPhase = data.daily[4].moon_phase;
            day5.dailyMoonRise = data.daily[4].moonrise;
            day5.dailyMoonSet = data.daily[4].moonset;
            day5.dailyProbablityPrecip = data.daily[4].pop;
            day5.dailyPressure = data.daily[4].pressure;
            day5.dailySunrise = data.daily[4].sunrise;
            day5.dailySunset = data.daily[4].sunset;
            day5.dailyTempDay = data.daily[4].temp.day;
            day5.dailyTempEve = data.daily[4].temp.eve;
            day5.dailyTempMax = data.daily[4].temp.max;
            day5.dailyTempMin = data.daily[4].temp.min;
            day5.dailyTempMorn = data.daily[4].temp.morn;
            day5.dailyUltravioletIndex = data.daily[4].uvi;
            day5.dailyWeatherMain = data.daily[4].weather[0].main;
            day5.dailyWeatherDescription = data.daily[4].weather[0].description;
            day5.dailyWeatherIcon = data.daily[4].weather[0].icon;
            day5.dailyWindDeg = data.daily[4].wind_deg;
            day5.dailyWindGust = data.daily[4].wind_gust;
            day5.dailyWindSpeed = data.daily[4].wind_speed;
        }).then(function () {

        renderForecasts();
    })

    function renderForecasts() {

        // UNIX TIME TO DAY OF THE WEEK
        (function () {
            console.log(`time working`)
            day1.dayOfWeekName = new Date(day1.dailyDate * 1000).toLocaleDateString('en', {weekday: 'long'})
            day2.dayOfWeekName = new Date(day2.dailyDate * 1000).toLocaleDateString('en', {weekday: 'long'})
            day3.dayOfWeekName = new Date(day3.dailyDate * 1000).toLocaleDateString('en', {weekday: 'long'})
            day4.dayOfWeekName = new Date(day4.dailyDate * 1000).toLocaleDateString('en', {weekday: 'long'})
            day5.dayOfWeekName = new Date(day5.dailyDate * 1000).toLocaleDateString('en', {weekday: 'long'})
        })();

        // LOOP FOR RENDERING
        for (let i = 1; i <= 5; i++) {
            //language=html
            $("#day" + [i]).html(`
                <div class="daily daily-large">${day1.dayOfWeekName}</div>
                <div class="daily"><img src="http://openweathermap.org/img/w/${day1.dailyWeatherIcon}.png"
                                        alt="Icon indicating daily weather" class="daily"></div>
                <div class="daily daily-normal">${day1.dailyWeatherDescription}</div>
                <div class="daily daily-large">${parseInt(day1.dailyTempDay)}&#176;</div>
            `)
        }

        //language=HTML
        // $("#day1").html(`
        //     <div class="daily daily-large">${day1.dayOfWeekName}</div>
        //     <div class="daily"><img src="http://openweathermap.org/img/w/${day1.dailyWeatherIcon}.png" alt="Icon indicating daily weather" class=daily></div>
        //     <div class="daily daily-normal">${day1.dailyWeatherDescription}</div>
        //     <div class="daily daily-large">${parseInt(day1.dailyTempDay)}&#176;</div>
        // `)

        //language=HTML
        $("#day2").html(`
        <div class="daily daily-large">${day2.dayOfWeekName}</div>
        <div class="daily"><img src="http://openweathermap.org/img/w/${day2.dailyWeatherIcon}.png"
                                alt="Icon indicating daily weather" class="daily"></div>
        <div class="daily daily-normal">${day2.dailyWeatherDescription}</div>
        <div class="daily daily-large">${parseInt(day2.dailyTempDay)}&#176;</div>
    `)

        //language=HTML
        $("#day3").html(`
            <div class="daily daily-large">${day3.dayOfWeekName}</div>
            <div class="daily"><img src="http://openweathermap.org/img/w/${day3.dailyWeatherIcon}.png"
                                    alt="Icon indicating daily weather" class="daily"></div>
            <div class="daily daily-normal">${day3.dailyWeatherDescription}</div>
            <div class="daily daily-large">${parseInt(day3.dailyTempDay)}&#176;</div>
        `)

        //language=HTML
        $("#day4").html(`
        <div class="daily daily-large">${day4.dayOfWeekName}</div>
        <div class="daily"><img src="http://openweathermap.org/img/w/${day4.dailyWeatherIcon}.png"
                                alt="Icon indicating daily weather" class="daily"></div>
        <div class="daily daily-normal">${day4.dailyWeatherDescription}</div>
        <div class="daily daily-large">${parseInt(day4.dailyTempDay)}&#176;</div>
    `)

        //language=HTML
        $("#day5").html(`
            <div class="daily daily-large">${day5.dayOfWeekName}</div>
            <div class="daily"><img src="http://openweathermap.org/img/w/${day5.dailyWeatherIcon}.png"
                                    alt="Icon indicating daily weather" class="daily"></div>
            <div class="daily daily-normal">${day5.dailyWeatherDescription}</div>
            <div class="daily daily-large">${parseInt(day5.dailyTempDay)}&#176;</div>
        `)
    }

} // END GETWEATHER FUNCTION WRAPPING OPENWEATHER TO INCORPORATE USER CLICK


// BEGIN MAPBOX
mapboxgl.accessToken = 'pk.eyJ1IjoiamVmZnJleS1tYWNsYXJ0eSIsImEiOiJjbDB1YzR3djAwNGtxM2RvMmhxYmlpM3Y0In0.aPhDJkVZqz4gMPgq0RNV0Q';

navigator.geolocation.getCurrentPosition(foundLoc, errorLoc);

function foundLoc(position) {
    centerHere([position.coords.longitude, position.coords.latitude])
}

function errorLoc() {
    centerHere([.77, 43])
}

let coordinates;

function centerHere(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-70.83, 42.93],
        zoom: 11
    });
    map.addControl(
        new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
        })
    );
    map.on('style.load', function () {
        map.on('click', function (e) {
            coordinates = e.lngLat;
        });
    });
}


// GRAB LON LAT ON CLICK
$('#map').click(function () {
    clicklon = parseFloat(coordinates.lng.toFixed(2));
    clickLat = parseFloat(coordinates.lat.toFixed(2));
    getWeather(clicklon, clickLat)
    // console.log(`clicklon - in jq: `, clicklon)
    // console.log(`userLit - in jq: `, clickLat)
    // console.log(`typeof clicklon - in jq: `, typeof clicklon)
    // testLonLat();
})

// function testLonLat() {
// console.log(`clicklon - in testLonLat: `, clicklon)
// console.log(`userLit - in testLonLat: `, clickLat)
// }

