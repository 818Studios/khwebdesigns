import { bond } from './bond.js';
//USE OF IMPORT STATEMENT
let count = 1;

// USE OF CONST VARIABLES (lines 9, 11 and 37)

//USE OF LET VARIABLES (lines 12, 14, 15, 17, etc.)

const bondContainer = document.querySelector('.bondContainer')

const frontSide = (element) => {
    let frontDiv = document.createElement('div')
    frontDiv.className = "card__face card__face--front"
    let movieCard = document.createElement('div') 
    let cardBodyFront = document.createElement('div')
    cardBodyFront.className = "card-body" 
    let cardTitleFront = document.createElement('h5')
    cardTitleFront.className = "card-text"
    let moviePoster = document.createElement('img')
    moviePoster.className = "card-img-top"
    moviePoster.src= `MoviePosters/${element.imdb}.jpg`
    moviePoster.alt= cardTitleFront
    cardTitleFront.textContent = element.title


    
    cardBodyFront.appendChild(cardTitleFront)
    movieCard.appendChild(moviePoster)
    movieCard.appendChild(cardBodyFront)
    frontDiv.appendChild(movieCard)

    
    return frontDiv
}

// USE OF ARROW FUNCTION
const backSide = (element) => {


    //USE OF LET VARIABLE
    let cardBodyBack = document.createElement('div')
    cardBodyBack.className = "card-body"
    let year = document.createElement('p')
    year.textContent = `Year: ${element.year}`
    year.className="card-text"
    let cardStats = document.createElement('div')
    let actor = document.createElement('p')
    actor.textContent = `Bond: ${element.stars[0]}`
    let movieCardBack = document.createElement('div')
    movieCardBack.className = "card__face card__face--back"

    cardStats.appendChild(actor)
    cardStats.appendChild(year)
    cardBodyBack.appendChild(cardStats)
    movieCardBack.appendChild(cardBodyBack)
    
    

    return movieCardBack
}

//Iteration through an Array using loops and Array method

bond.forEach(bond => {
    let card = document.createElement('div')
    card.className="card"
    card.appendChild(frontSide(bond))
    card.appendChild(backSide(bond))
    bondContainer.appendChild(card)
    card.addEventListener( 'click', function() {
       card.classList.toggle('is-flipped');
    });
    })

let blankCard = {

    "title": "Spectre", 
    "year": 2015,
    "stars": [
            "Daniel Craig",
            "LeaSeydoux",
            "Christoph Waltz"

    ],
    "director": "Sam Mendes",
    "imdb": "tt2379713",
    "theme": {
        "title": "Writing's On The Wall",
        "artist": "Sam Smith"
    },
    "synopsis": "A cryptic message from Bond's past sends him on a trail to uncover a sinister organization. While M battles political forces to keep the secret service alive, Bond peels back the layers of deceit to reveal the terrible truth behind SPECTRE."

}


let addButton = document.querySelector('#addCardBtn')
addButton.addEventListener('click', () => {
    let card = document.createElement('div')
    card.className="card"
    card.appendChild(frontSide(blankCard))
    card.appendChild(backSide(blankCard))
    bondContainer.appendChild(card)
    console.log("The Button Was Clicked, Thanks for That!")
})




