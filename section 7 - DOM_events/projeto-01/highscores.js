'use strict';

const generateNumber = function () {
  return Math.trunc(Math.random() * 20 + 1);
};

let secretNumber = generateNumber();
let score = 20;
let highscore = 0;

const restoreBasicElems = function () {
  document.querySelector('body').style.backgroundColor = '#353333';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
};
const restorePage = function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  secretNumber = generateNumber();
  document.querySelector('.message').textContent = 'Start guessing...';

  restoreBasicElems();
};

const checkNumber = function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
    restoreBasicElems();
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number';

    document.querySelector('body').style.backgroundColor = '#157515';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low';

      score--;
      document.querySelector('.score').textContent = score;
      restoreBasicElems();
    } else {
      document.querySelector('.message').textContent = 'You Lost the Game';

      score = 0;
      document.querySelector('.score').textContent = score;
      restoreBasicElems();
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High';

      score--;
      document.querySelector('.score').textContent = score;
      restoreBasicElems();
    } else {
      document.querySelector('.message').textContent = 'You Lost the Game';

      score = 0;
      document.querySelector('.score').textContent = score;
      restoreBasicElems();
    }
  }
};

const checkBtn = document.querySelector('.check');
checkBtn.addEventListener('click', checkNumber);

const againBtn = document.querySelector('.again');
againBtn.addEventListener('click', restorePage);
