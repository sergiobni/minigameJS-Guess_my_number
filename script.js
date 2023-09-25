'use strict';

/// DOM MANIPULATION ///
const displayMessage = message =>
  (document.querySelector('.message').textContent = message);
const displayScore = score =>
  (document.querySelector('.score').textContent = score);

/// DEFINITION OF SECRET NUMBER ///
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

/// DEFITION OF SCORE /// PART OF APPLICATION STATE
let score = 20;
let highscore = 0;
/// EVENTS ///

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // IF THERE IS NO INPUT AFTER CLICK, INDICATE
  if (!guess) {
    displayMessage('No number');
  } else if (guess === secretNumber) {
    /// WINNING THE GAME
    displayMessage('🎉 Correct Number!');
    ///PAINT BACKGROUND COLOR
    document.querySelector('body').style.backgroundColor = 'green';
    /// MAKE BOX NUMBER BIGGER ///
    document.querySelector('.number').style.width = '30rem';
    ///DISPLAY CORRECT NUMBER ///
    document.querySelector('.number').textContent = secretNumber;
    /// SETTING HIGHSCORE ///
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // IF NUMBER IS NOT SECRETNUMBER
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? 'Number too high!' : 'Number too low'
      );
      score--;
      displayScore(score);
    } else {
      displayMessage('Game Over');
      displayScore(0);
    }
  }

  /// PLAY AGAIN ///

  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(secretNumber);
    displayMessage('Start guessing!');
    displayScore(score);
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
  });
});
