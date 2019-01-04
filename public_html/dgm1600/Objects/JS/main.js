//CONSTRUCTOR, OBJECT WITH KEY PAIR VALUES, DECLARATION OF OBJECTS

function Dog(name, color) {
    this.name = name;
    this.color = color;
}
const colorButton = document.querySelector('#colorButton');
const nameButton = document.querySelector('#nameButton');
let colorInput = document.querySelector('#colorInput');
let nameInput = document.querySelector('#nameInput');


let dogHead = document.querySelector('.head');
let dogEar1 = document.querySelector('.ear1');
let dogEar2 = document.querySelector('.ear2');


//USE OF CUSTOM JAVASCRIPT OBJECTS
let newDog = new Dog(colorInput.value, nameInput.value);
newDog.name = "no-name";
newDog.color = "no-color";












colorButton.addEventListener('click', () => {
dogHead.style.backgroundColor = colorInput.value;    
dogEar1.style.backgroundColor = colorInput.value;  
dogEar2.style.backgroundColor = colorInput.value;   

newDog.color = colorInput.value;
console.log(`A Dog's face is now the color ${newDog.color}`)

})
 
//USE OF STRING MANIPULATION
//USE OF TEMPLATE LITERAL
nameButton.addEventListener('click', () => {
//USE OF DOT NOTATION   
   
    newDog.name =nameInput.value;

let stringManip = document.querySelector('.aDogPara');
let headerText = `A Dog has a name of ${newDog.name}. To change the name (or color), enter a name(or color) into the text boxes below.`;


stringManip.textContent = headerText;
 console.log(`A Dog's name is now ${newDog.name}`);
})






