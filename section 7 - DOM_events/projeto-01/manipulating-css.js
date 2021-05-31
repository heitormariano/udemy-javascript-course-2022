'use strict';

const generateNumber = function () {
  return Math.trunc(Math.random() * 20 + 1);
};

const secretNumber = generateNumber();
document.querySelector('.number').textContent = secretNumber;

let score = 20;

const checkNumber = function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';

    document.querySelector('body').style.backgroundColor = '#353333';
    document.querySelector('.number').style.width = '15rem';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number';

    document.querySelector('body').style.backgroundColor = '#157515';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low';

      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = '#353333';
      document.querySelector('.number').style.width = '15rem';
    } else {
      document.querySelector('.message').textContent = 'You Lost the Game';

      score = 0;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = '#353333';
      document.querySelector('.number').style.width = '15rem';
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High';

      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = '#353333';
      document.querySelector('.number').style.width = '15rem';
    } else {
      document.querySelector('.message').textContent = 'You Lost the Game';

      score = 0;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = '#353333';
      document.querySelector('.number').style.width = '15rem';
    }
  }
};

const checkBtn = document.querySelector('.check');
checkBtn.addEventListener('click', checkNumber);
