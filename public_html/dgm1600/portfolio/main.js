import {films} from './swapi_assets/films.js';
import {people} from './swapi_assets/people.js';
import {planets} from './swapi_assets/planets.js';


let charList = document.querySelector(".charList");
let charListItem = document.createElement('li');
let charButton = document.querySelector('#swapi-charButton');
let cardList = document.querySelector(".cardList");



/* ---------------------------------- ARROW FUNCTION USE ------------------------*/

films.forEach((film) =>  {
   let listItem = document.createElement('li');
   listItem.textContent = film.title;
   cardList.appendChild(listItem);
})








people.forEach((people) => {
  let charListItem = document.createElement('li');
  charListItem.textContent = people.name;
charList.appendChild(charListItem);
 
});





/*------------------------------------  SWAPI BUTTON TEST  ----------------------------------------------------*/

let planetButton = document.querySelector('.planetButton');
let returnSpace = document.querySelector('.buttonCard');
let returnPara = document.createElement('p');
console.log(planets[0]);

function randomPlanet(number) {
  return Math.floor(Math.random()*(number + 1));
}

planetButton.onclick = () => {
  returnPara.textContent = planets[(randomPlanet(50))].name;
  returnSpace.appendChild(returnPara);
}








let swapiFilms = [
  "https://swapi.co/api/fims/2/",
  "https://swapi.co/api/fims/3/",
  "https://swapi.co/api/fims/4/",
  "https://swapi.co/api/fims/5/",
  "https://swapi.co/api/fims/6/",
  "https://swapi.co/api/fims/7/"
]

const filmMap = (swapiFilms.map(film => film.length)); 

let nums = [45, 32, 12, 29, 23];
const numsByTwo = nums.map(num => num * 2);


console.log(numsByTwo);
console.log(filmMap);






