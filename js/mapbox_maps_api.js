"use strict";
console.log(`Link Test`);
console.log(`---------`);
console.log();

mapboxgl.accessToken = MAPBOX_KEY;
const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/mapbox/streets-v11', // style URL
center: [-74.5, 40], // starting position [lng, lat]
zoom: 9 // starting zoom
});