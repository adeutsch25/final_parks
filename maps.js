// Array with latitude and longitude
let metroAreaCenterCoordinates = [44.96, -93.2]

// Create the map
let map = L.map('mctc-map').setView(metroAreaCenterCoordinates, 9)
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a     href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYWRldXRzY2giLCJhIjoiY2pzNWF2MWhpMGR3ZTQ0dGZ0ZDVpMTJoMyJ9.KaJslnWMjHZVHyFYBG2zdQ'
  }).addTo(map)
  
  // Add some markers
  let mctcCoordinates = [44.9724, -93.2844]
  let mctcMarker = L.marker(mctcCoordinates).addTo(map)
    .bindPopup("Minneapolis College<br><a href='https://minneapolis.edu'>Website</a>")
    .addTo(map)

  let stPaulCoordinates = [44.94839, -93.1099]
  let stpMarker = L.marker(stPaulCoordinates).addTo(map)
    .bindPopup("Saint Paul College<br><a href='https://saintpaul.edu'>Website</a>")
    .addTo(map)

  let normandaleCommunityCollegeCoordinates = [44.8297, -93.3312]
  let nccMarker = L.marker(normandaleCommunityCollegeCoordinates).addTo(map)
    .bindPopup("Normandale Community College<br><a href='https:www.normandale.edu'>Website</a>")
    .addTo(map)
    
  // Add a circle
  var metroAreaCircle = L.circle(metroAreaCenterCoordinates, {
        color: 'green',
        radius: 30000,
        fillOpacity: 0.2
  })
  .bindPopup("Twin Cities Metro Area")
  .addTo(map)

