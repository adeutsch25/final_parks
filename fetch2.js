
//Icon Spec
var  Satellite = L.Icon.extend({
    options: {
        iconSize: [15, 15], 
        iconAnchor: [5, 5],
        popupAnchor: [0, -5],
    }
})

var  ISS = new Satellite({iconUrl: 'ISS.png'})
    
   
let url = 'https://api.wheretheiss.at/v1/satellites/25544'

let issLat = document.querySelector('#iss-lat')
let issLong = document.querySelector('#iss-long')
let timeElement = document.querySelector('#time')

    //Sets Initial value for the ISS.
    fetch(url)
        .then( res => res.json() )
        .then( issData => {
            console.log(issData)
            let lat = issData.latitude
            let long = issData.longitude
            issLat.innerHTML = lat
            issLong.innerHTML = long
            IssLocation(lat,long)
        })

    //Sets the initial value for the date.
    let date = Date()
    timeElement.innerHTML = date


    //Gets the current ISS coordinates    
    function updateIssLocation()
    {
        fetch(url)
        .then( res => res.json() )
        .then( issData => {
            console.log(issData)
            let lat = issData.latitude
            let long = issData.longitude
            issLat.innerHTML = lat
            issLong.innerHTML = long
            IssLocation(lat,long)
        })
    }

    //Get the current time and location function
    function timeAndLocation()
    {
        let date = Date()
        timeElement.innerHTML = date
    }

    setInterval(updateIssLocation,10000)//Updates ISS location every 10 sec
    setInterval(timeAndLocation, 10000)//Updates time every 10 sec

//Adds marker and a circle on the map
  function IssLocation(lat,long)
  {
        // Satellite marker  
        let issCoordinates = [lat,long]
        let issMarker = L.marker(issCoordinates,{icon: ISS})
        .bindPopup("<a href='https://en.wikipedia.org/wiki/International_Space_Station'>International Space Station (ISS)</a>")
            .addTo(map)

        // Green circle
        var issArea = L.circle(issCoordinates , {
            color: 'green',  
            radius: 300000,
            fillOpacity: 0.2
        })
        .addTo(map)
  }

  // Centers the map
  let WorldMapCoordinates = [0,0]

  // Create the map 
  let map = L.map('worldMap').setView(WorldMapCoordinates,2)

  // Add the tile layer - roads, streets etc. Without this, nothing to see 
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoiY2xhcmFsIiwiYSI6ImNqcmdwenViYTAwcHQ0Ym5yYmZ1Z3E2bjgifQ.QQfUvVaqPsWb_jJbP2gvHg'
  }).addTo(map)