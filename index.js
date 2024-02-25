let randomNumber = Math.round(Math.random()*100 + 1);


const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");
let numGuess = 0;

let playGame = true;

if(playGame){
    submit.addEventListener("click", (e)=>{
        e.preventDefault();
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

const validateGuess = (guess) =>{
    if(isNaN(guess) || guess < 1 || guess > 100){
        alert("Please enter a valid guess")

    }else{
        if(numGuess === 9){
            displayGuess(guess)
            displayMessage(`Game Over , Random Number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}

const checkGuess = (guess)=>{
if (guess === randomNumber){
    displayMessage(`Your guess was right you won`)
    endGame();
}else if(guess < randomNumber){
    displayMessage(`Your guess is too low `)
}else if(guess > randomNumber){
    displayMessage(`Your guess is too high `)
}
}

const displayGuess = (guess) => {
    userInput.value = "";
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${10 - numGuess}`;
}


const displayMessage = (message)=>{
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
const endGame = () => {
userInput.value="";
userInput.setAttribute("disabled", "");
p.classList.add('button');
p.innerHTML = `<h2 id="newGame">Start new game</h2>`;
startOver.appendChild(p)
playGame = false;
newGame();

}
const newGame = () => {
const newGameButton = document.querySelector("#newGame")
newGameButton.addEventListener("click", () =>{
    randomNumber = Math.round(Math.random()*100 + 1);
    numGuess = 1;
    guessSlot.innerHTML = ""
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled")
    startOver.removeChild(p)
    displayMessage("")
    playGame = true; 
})
}