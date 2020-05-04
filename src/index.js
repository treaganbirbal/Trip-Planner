// const mapboxgl = require("mapbox-gl");


// const map = new mapboxgl.map({
//   container: "map",
//   center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
//   zoom: 12, // starting zoom
//   style: "mapbox://styles/mapbox/streets-v10",
// });

var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
mapboxgl.accessToken = 'pk.eyJ1IjoiY2VzYXJkb25lIiwiYSI6ImNrOXN3MmhuNTE2ZmwzaW1veGdqN3BtZ2cifQ.b54TuqQ-5q5j2iBDaNW0qg';
var map = new mapboxgl.Map({
    center: [-74.009, 40.705],
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11'
});
