"use strict";
console.log(`testing`);

mapboxgl.accessToken = MAPBOX_KEY;

let activeMarkers = [];
let newMarker;

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-77.589, 43.1440], // starting position [lng, lat]
    zoom: 18 // starting zoom
});


map.on('click', function (event) {

    let testLon = event.lngLat.lng;
    let testLat = event.lngLat.lat;

    let testArray = [];
    testArray.push(testLon, testLat);
    console.log(testLon, testLat);

    let testMarker = new mapboxgl.Marker()
        .setLngLat(testArray)
        .addTo(map);

    activeMarkers.push(newMarker);

})


let restaurants = [
    {
        name:   "dac hoa",
        lon:    -77.589,
        lat:    43.1440
    },
    {
        name:   "dogtown",
        lon:    -77.5897,
        lat:    43.1437
    },
    {
        name:   "sea",
        lon:    -77.5884,
        lat:    43.1433
    },
]