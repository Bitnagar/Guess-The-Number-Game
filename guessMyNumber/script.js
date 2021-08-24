'use strict';

//This generates a random number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;

//for displaying messages ("too low", "Too high", etc)
const displayMessage = function (message) {
  document.querySelector('.output').textContent = message;
};

//For 'Check!' button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.number-input').value);
  console.log(guess, typeof guess);

  
  // When there is no input
  if (!guess) {
    displayMessage('⛔️ No number!');

    // When guess is out of range
  } else if (guess > 20) {

    const overlay = document.querySelector('.overlay');

    const openOverlay = function () {
      overlay.classList.remove('hidden');
    }
    
    openOverlay();

    const closeOverlay = function () {
      overlay.classList.add('hidden');
    }

    overlay.addEventListener('click', closeOverlay);

    // When player wins
  } else if (guess === secretNumber) {
    
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highScore-span').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score-span').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('body').style.backgroundColor = 'rgb(187, 25, 25)';
      document.querySelector('.score-span').textContent = 0;
    }
  }
});

document.querySelector('.btn2').addEventListener('click', function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score-span').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number-input').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
});

document.querySelector('.btn').addEventListener('click', function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score-span').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number-input').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
});
