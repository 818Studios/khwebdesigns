import { vehicles } from './swapi_assets/vehicles.js'


let peppermintBark = "Peppermint Bark";
var iceCreamFlavors = ["Mint", "Chocolate", "Vanilla", peppermintBark];
console.log("This is the first array");
console.log(iceCreamFlavors);

iceCreamFlavors.push("Mocca");
console.log("This is the array with a value added to it");
console.log(iceCreamFlavors);


//ITERATION THROUGH AN ARRAY USING LOOPS AND ARRAY METHODS
for ( var i = 0; i<10; i++) {
    iceCreamFlavors.push("newFlavor");

} 
console.log(iceCreamFlavors);




//COMPLEX ARRAY and BRACKET NOTATION ARRAY ITEM CALL
//GOOD USE OF ARRAYS
var Ingredients = [
    ['dough', 'chocolate chips', 'butter',
        ['batter', 
            ['lard', 'sugar', 'flour', 'vanilla extract'],
        'frosting', 'sprinkles'],
    ]
]

console.log("This will show us a complex (nested) array and call an item from an array 2-levels deep.")
console.log(Ingredients);
console.log(Ingredients[0][1]);





//USE OF ARRAYS WITH FILTER, MAP AND REDUCE===========================================

//USE OF ARROW FUNCTION
//USE OF MAP FUNCTION
const vehicleMap = (vehicles.map(vehicle => vehicle.model));
console.log("Using a map function, we will view the vehicle model of each vehicle in the Vehicle's array.");
console.log(vehicleMap);


//USE OF FILTER

const walkers = vehicles.filter(function (vehicle) {
    return vehicle.vehicle_class === "walker";
})
console.log("Using a filter function, we will view which vehicles have a vehicle class of Walker");
console.log(walkers);



//USE OF REDUCE

console.log("In this section, we'll use the REDUCE function to find the total cargo load of the vehicles in SWAPI.")
let crewFilter = vehicles.filter(vehicle => vehicle.crew);
let crewSize = crewFilter.map(vehicle => vehicle.crew);
let totalCrewSize = crewSize.reduce((acc, crew) => acc + parseInt(crew), 0);
console.log(crewSize);
console.log(totalCrewSize);




console.log("Here, we'll use conditional logic to find the first instance of a vehicle being manufactured @ Kuat Drive Yards (The first one is a ways down the array list)");

let manufacturerMap = (vehicles.map(vehicle => vehicle.manufacturer));
var i = 0;

if (manufacturerMap[i] = "Kuat Drive Yards, Imperial Department of Military Research") {
    console.log(manufacturerMap[i]);

}  else { i++}
    


