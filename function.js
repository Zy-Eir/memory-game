const cardContainer = document.querySelector(".card-container"); 

const cards = document.querySelectorAll(".card"); 

const icons = [ "🍇", "🍉", "🍊", "🍋", "🍈", "🍋‍🟩", "🍍", "🥭"];

const iconsPairs= [...icons, ...icons] // creates a new array containing 2 icons arrays
//  console.log(iconsPairs);

const iconsCount = iconsPairs.length;

// Game state
let revealedCount = 0;
let activeCard=null;
let awaitingEndofMove=false;


function generateCard(icon){
    const element = document.createElement("div");
    element.classList.add("card");

    

    element.setAttribute("data-icon", icon);
    element.setAttribute("data-revealed", "false");

    const elementBack = document.createElement("div");
    elementBack.classList.add("card-back");

    const elementFront = document.createElement("div");
    elementFront.classList.add("card-front");

    element.append(elementBack, elementFront); // appends card back and front to card div

    elementFront.append(icon);

    element.addEventListener("click", () => {
        const revealed = element.getAttribute("data-revealed");


      if(
        awaitingEndofMove || revealed === "true"
        || element === activeCard
    )  {
        return;
      }

      element.classList.add("card-flip");

      if(!activeCard){
        activeCard=element;


        return;
      }


      const iconToMatch = activeCard.getAttribute("data-icon");

      if(iconToMatch === icon){

        activeCard.setAttribute("data-revealed", "true");
        element.setAttribute("data-revealed", "true");

        awaitingEndofMove=false;
        activeCard=null;
        revealedCount += 2;


        if(revealedCount === iconsCount){
            alert("you won! refresh to replay");
            console.log("you won! refresh to replay");
        }

        return;
      }


    //  console.log(activeCard)

      awaitingEndofMove = true;

      setTimeout(() => {

        element.classList.remove("card-flip");
        activeCard.classList.remove("card-flip");

        awaitingEndofMove=false;
        activeCard=null;

      }, 1000);
    });

   

    return element;


}

// generate cards
for(let i = 0; i < iconsCount; i++){
    const randomIndex = Math.floor(Math.random() * iconsPairs.length);

    const iconsPicked = iconsPairs[randomIndex];

    const card = generateCard(iconsPicked);


    iconsPairs.splice(randomIndex, 1);

    cardContainer.append(card);

  //  console.log(iconsPicked);
}





/* copy of my initial code 

const cards = document.querySelectorAll(".card"); 

let flippedCard = false; // keeps track of whether a card is currently flipped
let lockBoard= false; // Prevents more than 2 cards from being flipped at a time
let firstCard, secondCard; // Stores the 2 flipped cards for comparison


function flipCard(){
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add("card-flip");

    if (!flippedCard) {
        flippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    lockBoard = true;
    checkForMatch();
}

function checkForMatch(){
    let isMatch =
    firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards();
}


function disableCards(){
    firstCard.removeEventListener("click", flipCard);

    secondCard.removeEventListener("click", flipCard);

    resetBoard();

}


function unflipCards(){
    setTimeout(() => {

        firstCard.classList.remove("card-flip");


        secondCard.classList.remove("card-flip");

        resetBoard();
    }, 1500);
}

function resetBoard(){
    [flippedCard, lockBoard] =
        [false, false];
    [firstCard, secondCard] =
        [null, null];
}


(function shuffle(){
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();


function reset(){
   shuffle();
}


 

    cards.forEach(card =>
    card.addEventListener("click", flipCard));
*/


/* 
    const testArea = document.querySelector(".test-area");


     let icons = [ "🍇", "🍉", "🍊", "🍋"];

    // for loops can have up to 3 conditionals. i is a placeholder for index, 

    for(let i = 0; i <= 3; i++){
    
    console.log("test");

    }
*/

/*
    function generateGameBoard() {
    
        const boardDimensions = testArea.getAttribute('data-dimension');

        if (boardDimensions % 2 !== 0) {
            throw new Error("the dimensions of the board are not equal")
        }
   
        arr = ["red", "blue", "green", "alpha"]
        const pickedElements = pickRandomElements(arr, (boardDimensions * boardDimensions) / 2)
      //  const items = shuffle([...pickedElements, ...pickedElements])
 
        const testCards = ``
     

 
 
 
     testArea.append(randomNumber);
 
     console.log(addArray);
 
    }

    */
/*
  const arr = ['red', 'blue', 'green', 'alpha'];

    shuffle(arr);

   // Fisher-Yates Algorithm

    function shuffle(array){

        for(let i = array.length - 1; i > 0; i--) // 
        {
            const random = Math.floor(Math.random() * (i + 1));

            [array[i], array[random]] = [array[random], array[i]]
        }


    }
    console.log(arr);
*/
   
   /*
    let randomNumber = document.querySelector(".random-number");

   function generateRandomNum() {
   
   arr = ["red", "blue", "green", "alpha"]

    randomNumber.textContent="";


   // randomGeneratedNumber = Math.floor(Math.random() * 12);

   // randomGeneratedNumber = arr[Math.floor(Math.random() * arr.length)]; randomly generate element from array

   copyArr = arr.slice();

    //randomPair = randomGeneratedNumber * 2;

    addArray = arr.concat(copyArr);

    randomNumber.textContent = addArray;




    testArea.append(randomNumber);

    console.log(addArray);

   }
*/
   /* 
   function generateRandomNum() {
   
 
 
     randomNumber.textContent="";
 
 
     randomGeneratedNumber = Math.floor(Math.random() * 12);
 
   
 
 
 
     randomNumber.textContent = randomGeneratedNumber;
 
 
 
     testArea.append(randomNumber);
 
     console.log(randomNumber);
    }


    */

/* 
    
    function cardFlip() {
        cards.classList.toggle("card-flip");

    }cards.addEventListener("click", cardFlip);

*/

    /* 
    let icons = [ "🍇", "🍉", "🍊", "🍋"];
    let iconDuplicates = icons.slice();

    let iconPairs =  [icons + iconDuplicates];


    let randomizer = Math.floor(Math.random() * iconPairs.length);
    let  randomValue = iconPairs[randomizer];

    console.log(iconPairs);

    console.log(randomValue);

  //  console.log(icons);

  //  console.log(iconDuplicates);


    const gameArea =document.querySelector(".game-area");

    const generateCard = function(){
        const card = document.createElement("div");
        card.classList.add("card");

        const cardFront = document.createElement("div");
        cardFront.classList.add("card-front");
        
    }
 */