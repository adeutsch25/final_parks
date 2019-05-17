// Array with latitude and longitude
let longestBridgeCoordinates = [40.4173, -100.9071]

// Create the map
let map = L.map('bridge-map').setView(longestBridgeCoordinates, 9)
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a     href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 4,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYWRldXRzY2giLCJhIjoiY2pzNWFzaGtzMGRxazRhbmk2a3pmcDI5aSJ9._34PfUVCLD7PZ-5CxTwrOQ'
  }).addTo(map)

  // Add some markers
  let verrazanoBridgeCoordinates = [40.6066, -74.0447]
  let verrazanoMarker = L.marker(verrazanoBridgeCoordinates).addTo(map)
    .bindPopup("Verrazano-Narrows Bridge<br><a href='http://web.mta.info/bandt/html/veraz.html'>Website</a>")
    .addTo(map)

  let goldenBridgeCoordinates = [37.8199, -122.4783]
  let goldenMarker = L.marker(goldenBridgeCoordinates).addTo(map)
    .bindPopup("Golden Gate Bridge<br><a href='http://www.goldengatebridge.org'>Website</a>")
    .addTo(map)

  let mackinacBridgeCoordinates = [45.8174, -84.7278]
  let mackinacMarker = L.marker(mackinacBridgeCoordinates).addTo(map)
    .bindPopup("Mackinac Bridge<br><a href='https://www.mackinacbridge.org/'>Website</a>")
    .addTo(map)
  
  let gwBridgeCoordinates = [40.8517, -73.9527]
  let gwMarker = L.marker(gwBridgeCoordinates).addTo(map)
    .bindPopup("George Washington Bridge<br><a href='http://www.panynj.gov/bridges-tunnels/george-washington-bridge.html'>Website</a>")
    .addTo(map)

  let tacomaBridgeCoordinates = [47.2690, -122.5517]
  let tacomaMarker = L.marker(tacomaBridgeCoordinates).addTo(map)
    .bindPopup("Tacoma Narrows Bridge<br><a href=http://www.wsdot.wa.gov/TNBhistory/>Website</a>")
    .addTo(map)

  










  
