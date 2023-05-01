//Store Random Number Generated
let secretNumber = Math.floor(Math.random()*100)+1;

let guessInput = document.getElementById("guess");

let message = document.getElementById("message");

//checkGuess function is called when the user clicks the Guess Btn and compare the user's guess to the SecretNumber
function checkGuess(){

    let guess = parseInt(guessInput.value);

    if(guess === secretNumber){
        message.innerHTML = "Congratulations! You guessed the secret number!";
        message.style.color = "green";
    }
    else if(guess <secretNumber){
        message.innerHTML = "Too Low, try again.";
        message.style.color = "red";
    }
    else if(guess > secretNumber){
        message.innerHTML = "Too High, try again.";
        message.style.color = "red";
    }

}

//resetGame function is called when user clicks the reset btn
function resetGame(){
    secretNumber = Math.floor(Math.random()*100)+1;
    guessInput.value = "";
    message.innerHTML = "";
}
