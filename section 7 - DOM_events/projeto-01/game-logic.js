'use strict';

const generateNumber = function () {
  return Math.trunc(Math.random() * 20 + 1);
};

// generate random number once
const secretNumber = generateNumber();
document.querySelector('.number').textContent = secretNumber;

let score = 20;

const checkNumber = function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
    document.querySelector('body').style.backgroundColor = '#353333';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Corret Number';
    document.querySelector('body').style.backgroundColor = 'green';
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low';

      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = '#353333';
    } else {
      document.querySelector('.message').textContent = 'You Lost the Game';

      score = 0;
      document.querySelector('.score').textContent = score;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High';

      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = '#353333';
    } else {
      document.querySelector('.message').textContent = 'You Lost the Game';

      score = 0;
      document.querySelector('.score').textContent = score;
    }
  }
};

const checkBtn = document.querySelector('.check');
checkBtn.addEventListener('click', checkNumber);
