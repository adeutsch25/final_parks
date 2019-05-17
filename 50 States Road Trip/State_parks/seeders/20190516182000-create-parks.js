'use strict';

const parks = [  
  {  
     "name":"Saint Croix",
     "lat":45.410492,
     "lon":-92.644582,
     "zoom":5
  },
  {
    "name":"Mississippi",
    "lat":44.943256,
    "lon":-93.098412,
    "zoom":3
 },
 {  
    "name":"Pipestone",
    "lat":44.027001,
    "lon":-96.256658,
    "zoom":3
 },
 {
     "name":"Minuteman Missile",
     "lat":44.039433,
     "lon":-101.665144,
     "zoom":3
 },
 {
     "name":"Badlands",
     "lat":43.734837,
     "lon":-101.939636,
     "zoom":3
 },
 {
     "name":"Wind Cave",
     "lat":43.422798,
     "lon":-103.483902,
     "zoom":3
 },
 {
     "name":"Jewel Cave",
     "lat":43.766651,
     "lon":-103.598808,
     "zoom":3
 },
 {
    "name":"Mount Rushmore",
    "lat":43.895542,
    "lon":-103.418243,
    "zoom":3
 },
 {
     "name":"Theodore Roosevelt",
     "lat":46.913903,
     "lon":-103.524354,
     "zoom":3
 }
]
module.exports = {
    up: (queryInterface, Sequelize) => {
      /*
        Add altering commands here.
        Return a promise to correctly handle asynchronicity.
  
        Example:
        return queryInterface.bulkInsert('People', [{
          name: 'John Doe',
          isBetaMember: false
        }], {});
      */
      var parksVisited = parks.map(function(s) { 
        s.visited = false; 
        s.createdAt = new Date(), 
        s.updatedAt = new Date()
        return s 
      })
      
      return queryInterface.bulkInsert('Parks', parksVisited, {})
    },
  
    down: (queryInterface, Sequelize) => {
      /*
        Add reverting commands here.
        Return a promise to correctly handle asynchronicity.
      */
        Example:
        return queryInterface.bulkDelete('Parks', null, {});
      
    }
  };