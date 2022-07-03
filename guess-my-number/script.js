'use strict';

// TODO
// 1. Generate a random number for guessing
// 2. Add event to check if the guessed number is correct or NOT and show the notification for the player
// 3. Update win state
// 4. Update score
// 5. Save the high score
// 6. Reset the game

// Generate a random number from 1 to 100
let correctNumber = genCorrectNumber();

const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');
const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');
const guessEl = document.querySelector('.guess');
const bodyEl = document.querySelector('body');
const messageEl = document.querySelector('.message');
const numberEl = document.querySelector('.number');
guessEl.focus();

let highscore = Number(highscoreEl.textContent);
console.log('correct number:', correctNumber);

btnCheck.addEventListener('click', function () {
  let guessNumber = Number(guessEl.value);
  let score = Number(scoreEl.textContent);
  guessEl.value = '';
  guessEl.focus();
  console.log('guess number:', guessNumber);
  if (guessNumber) {
    if (score > 1) {
      if (guessNumber === correctNumber) {
        displayMessage('Correct!!!');
        numberEl.textContent = correctNumber;
        bodyEl.style.backgroundColor = '#60b347';
        guessEl.disabled = true;
        btnCheck.disabled = true;
        if (highscore < score) {
          highscore = score;
          highscoreEl.textContent = highscore;
        }
      } else if (guessNumber >= correctNumber) {
        displayMessage('Too high!!! 👆');
        score--;
        scoreEl.textContent = score;
      } else {
        // guessNumber <= correctNumber
        displayMessage('Too low!!! 👇');
        score--;
        scoreEl.textContent = score;
      }
    } else {
      displayMessage('💥 You lost the game!');
      scoreEl.textContent = 0;
      disableInput(true);
    }
  } else {
    displayMessage('No number!🚩🚩🚩');
  }
});

// 6. Reset the game
btnAgain.addEventListener('click', function () {
  scoreEl.textContent = 100;
  guessEl.value = '';
  guessEl.focus();
  messageEl.textContent = 'Start guessing...';
  numberEl.textContent = '?';
  bodyEl.style.backgroundColor = '#222';
  disableInput(false);
  correctNumber = genCorrectNumber();
});

// Add event press enter button
guessEl.addEventListener('keypress', function (event) {
  if (event.key == 'Enter') {
    event.preventDefault();
    btnCheck.click();
  }
});

function genCorrectNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

function displayMessage(message) {
  messageEl.textContent = message;
}

function disableInput(isDisabled) {
  guessEl.disabled = isDisabled;
  btnCheck.disabled = isDisabled;
}
