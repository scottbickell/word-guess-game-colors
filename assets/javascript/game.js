var totalWins = 0;
var totalLoses = 0;
var lettersTried = "";
var typed = "";
var numberGuessesRemaining = 0;
var Guessed = 0;
var totalGuesses = 0;
var wordToGuess = "";
var emptyWord = [];
var showWord = "";
var placeholder = [];


function getRandomWord() {
    var randomWordArr = ["purple", "orange", "red", "green", "blue", "black", "white", "cyan", "magenta", "yellow", "grey", "aquamarine"];
    var j = Math.floor((Math.random() * randomWordArr.length));

    wordToGuess = randomWordArr[j];

    //This will clear the existing array by setting its length to 0.
    emptyWord.length = 0;
    showWord.length = 0;

    //initializing display array and word array to match against master word.
    for (var i = 0; i < wordToGuess.length; i++) {
        showWord[i] = " _ ";
        emptyWord[i] = "_";
    }
}

function resetGame() {
    // number of guesses is wordToGuess.length + 3
    totalGuesses = wordToGuess.length + 3;
    numberGuessesRemaining = totalGuesses;
    lettersTried = "";
    Guessed = 0;
}

function checkifMatch() {
    matchFound = true;
    for (var x = 0; x < wordToGuess.length; x++) {
        if (wordToGuess[x] != emptyWord[x]) {
            matchFound = false;
        }
    }
}

function showGame() {
    document.getElementById("guessesRemaining").textContent = numberGuessesRemaining;
    document.getElementById("successfulGuess").textContent = Guessed;
    document.getElementById("wins").textContent = totalWins;
    document.getElementById("losses").textContent = totalLoses;
}

getRandomWord();
resetGame();
showGame();



document.onkeyup = function (event) {

    checkifMatch();
    if (matchFound) {
        totalWins++;
        alert("Hurray! You won!");
        getRandomWord();
        resetGame();
    } else if (numberGuessesRemaining == 0) {
        totalLoses++;
        alert("Oops! Sorry, You Lost this time! The randomWord was: " + wordToGuess);
        getRandomWord();
        resetGame();
    } else {

        numberGuessesRemaining--;
        if (lettersTried == "") {
            lettersTried = event.key;
        } else {
            lettersTried = lettersTried + " , " + event.key;
        }


        for (var i = 0; i < wordToGuess.length; i++) {
            if (wordToGuess[i] === event.key) {
                Guessed++;
                typed = typed + event.key;
                emptyWord[i] = event.key;
                showWord[i] = event.key;
                document.getElementById("successfulGuess").textContent = Guessed;
            }
        }
        placeholder = emptyWord.join(" ");

        document.getElementById("guessesRemaining").textContent = numberGuessesRemaining;
        document.getElementById("lettersTried").textContent = lettersTried;
        document.getElementById("blank").textContent = placeholder;

        showGame();
    }
};