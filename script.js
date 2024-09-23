
let attempts =0;
let randomNumber = Math.floor(Math.random()*100)+1


function submitGuess(){
    const userGuess = document.getElementById('guess').value 
    const message= document.getElementById('message').textContent

// To check if guess is correct, too high or too low

if (userGuess == randomNumber){
    console.log("You guess correct Number")
}else if (userGuess > randomNumber){
    console.log("Number guessed is too high ")
}else if (userGuess < randomNumber){
    console.log("Number guess is too low")
}else {
    console.log("Enter a valid number")
}
}

function resetGame(){
    // generated a new random number
     randomNumber = Math.floor(Math.random() * 100) + 1;
    // clear input field and message
     document.getElementById('guess').value = '';
     document.getElementById('message').textContent = '';
    alert("Game has been reset. Try guessing the new number!");
}