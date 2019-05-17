//Icon Spec
var  Satellite = L.Icon.extend({
    options: {
        iconSize: [15, 15], 
        iconAnchor: [5, 5],
        popupAnchor: [0, -5],
    }
})

var  ISS = new Satellite({iconUrl: 'ISS.png'})

var url = 'https://api.wheretheiss.at/v1/satellites/25544'

var issLat = document.querySelector('#iss-lat')
var issLong = document.querySelector('#iss-long')
let timeElement = document.querySelector('#time')

var issMarker // Leaflet marker
var update = 10000 // 10 seconds

var planeIcon = L.icon({
    iconUrl: 'plane-icon.png'

    iconSize:     [38, 95], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var map = L.map('iss-map').setView( [0, 0], 1)  // Center at 0, 0 and max zoom out
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a     href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 7,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYWRldXRzY2giLCJhIjoiY2pzNWFzaGtzMGRxazRhbmk2a3pmcDI5aSJ9._34PfUVCLD7PZ-5CxTwrOQ'
}).addTo(map)

iss() // initial call to function
setInterval(iss, update) // Call the iss function every update seconds

function iss() {
fetch(url)
    .then(res => res.json())
    .then(issData => {
        console.log(issData)
        let lat = issData.latitude
        let long = issData.longitude
        issLat.innerHTML = lat
        issLong.innerHTML = long

        if (!issMarker) {
            issMarker = L.marker([lat, long], {icon: planeIcon}).addTo(map) // Create the marker
        } else {
            issMarker.setLatLng([lat, long])  // Already exists - move to new location
        }

    })
    .catch( err => {
        console.log(err)
    })
}