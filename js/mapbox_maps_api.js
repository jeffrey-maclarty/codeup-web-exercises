"use strict";

// let startingLat = 29.4252;
// let startingLon = -98.4916;
//
// let map = initMap(startingLon, startingLat);
// // initMap(startingLon, startingLat)
//
//     mapboxgl.accessToken = MAPBOX_KEY;
//     const map = new mapboxgl.Map({
//         container: 'map', // container ID
//         style: 'mapbox://styles/mapbox/streets-v11', // style URL
//         center: [-74.5, 40], // starting position [lng, lat]
//         zoom: 9 // starting zoom
//     });


let startingLat = 29.4252;
let startingLon = -98.4916;

let map = initMap(startingLon, startingLat);

initMap(startingLon, startingLat);

function initMap(lon, lat) {

    mapboxgl.accessToken = MAPBOX_KEY;

    return new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v10',
        zoom: 10,
        center: [lon, lat]
    });
}