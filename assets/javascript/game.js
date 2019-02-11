// variables to hold wins and losses count. setting them to 0.
var wins = 0;
var losses = 0;

// variable to hold user's guess count. Setting it to 10.
var guessCount = 10;

// alphabets for the computer to guess from. 
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
 "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 
var guessedLetters =[];
// setting the key press event function
document.onkeyup = function(event){
    var userGuess = event.key;
    guessedLetters.push(userGuess); // to automatically record guessed letters in the guessedLetters var. 
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]; // math random formula for the computer to guess.
    
    // joining guessed letters with a comma, and the innerHTML to change the DOM. 
    document.getElementById("userguessestext").innerHTML = ("Your guesses so far: " + guessedLetters.join(', '));

    // setting our win condition
    if (userGuess === computerGuess) {
        wins++;
        guessCount = 10; // check comments beneath loss condition. 
        guessedLetters = [];


    } else {
        guessCount--;
    }
    // setting the loss condition
    if (guessCount === 0) {
        losses++;
        // when guesses reach 0, reset the count back to 10, and clear guessedLetters var to record letters from the new round of play.
        // this also avoids writing too many letters on the HTML document or DOM. 
        guessCount = 10;
        guessedLetters = [];
    } 
    // changing the p id tags in our HTML to reflect the javascript vars and functions. 
    document.getElementById("guessesnumbertext").innerHTML = ("Guess Left: " + guessCount);
    document.getElementById("winstext").innerHTML = ("wins: " + wins);
    document.getElementById("lossestext").innerHTML = ("Losses: " + losses);
};