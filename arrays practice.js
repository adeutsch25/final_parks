let animals = ['duck', 'bear', 'squirrel']

console.log(animals) //[ 'duck', 'bear', 'squirrel' ]

// Access elements by index
console.log(animals[0]) // duck
let first_animal = animals[0] // first_animal = 'duck'

// Modify elements by index
animals[2] = 'mouse'
console.log(animals) // [ 'duck', 'bear', 'mouse' ]

// Add to the end of an array
animals.push('ladybug')
console.log(animals)  // [ 'duck', 'bear', 'mouse', 'ladybug' ]

// Remove last element of array, returns that element
let last_animal = animals.pop()
console.log(animals)  // [ 'duck', 'bear', 'mouse' ]
console.log(last_animal)  // ladybug

// Older style, familiar to Java and C# developers
for (let i = 0; i < animals.length; i++){
    console.log('Animal ${i} is ${animals[i}')

}

// Newer style - less typing
animals.forEach(function(animal, i) {
    console.log('Animal ${i} is ${animal}')

})

// If you dont need the array indes, can simply as so
// Newer style - less typing
animals.forEach(function(animal) {
    console.log('One of the animals is ${animal}')

})

//How long is an array
numberOfAnimals = animals.length
console.log('There are ${numberOfAnimals} animals.')

// Sorting an array
animals.sort()
console.log(animals)

// Reversing an array 
animals.reverse()
console.log(animals)

// Adding data to a non-existent array element
animals[6] = 'squid'
console.log(animals)

// Reading a non-existent array element
animal_ten = animals[10]
console.log(animal_ten)  // undefined

//Create an object. Use JSON syntax to specify variables and their values 
let user = {username: 'Zoe', password: 'kittens'};

//Read data
console.log(user.username) // prints Zoe