var inputbox = document.querySelector(".inputbox");
var btn = document.querySelector("#btn");
var result = document.querySelector("#result");
var randomNumber = Math.floor(Math.random() * 10) + 1;
var guessCount = 0;
var guessedNumbers=[]

btn.addEventListener("click", function () {
  var guess = Number(inputbox.value);
  guessCount++;
  guessedNumbers.push(guess);

  if (randomNumber < guess) {
    result.textContent = `Your guess is too high. 
        No of guesses ${guessCount}.
        guessed numbers ${guessedNumbers}`;
  } else if (randomNumber == guess) {
    result.textContent = `Yippie You Win!!  
        No of guesses ${guessCount}.
        guessed numbers ${guessedNumbers}`;
  } else {
    result.textContent = `Your guess is too low.
         No of guesses ${guessCount}.
         guessed numbers ${guessedNumbers}`;
  }
});

function changeColor(){
    document.body.style.backgroundColor=
    `rgb(${Math.round(Math.random()*255)},
    ${Math.round(Math.random()*255)},
    ${Math.round(Math.random()*255)})
    `
}

