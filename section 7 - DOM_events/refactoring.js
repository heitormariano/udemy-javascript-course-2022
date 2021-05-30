'use strict';

const generateNumber = function () {
  return Math.trunc(Math.random() * 20 + 1);
};

let secretNumber = generateNumber();
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

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
  displayMessage('Start guessing...');

  restoreBasicElems();
};

const checkGuessAndScore = function (guess) {
  let message = guess > secretNumber ? 'Too High' : 'Too low';

  if (score > 1) {
    displayMessage(message);

    score--;
    document.querySelector('.score').textContent = score;
    restoreBasicElems();
  } else {
    displayMessage('You Lost the Game');

    score = 0;
    document.querySelector('.score').textContent = score;
    restoreBasicElems();
  }
};

const checkNumber = function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('No Number');
    restoreBasicElems();
  } else if (guess === secretNumber) {
    displayMessage('Correct Number');

    document.querySelector('body').style.backgroundColor = '#157515';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    checkGuessAndScore(guess);
  }
};

const checkBtn = document.querySelector('.check');
checkBtn.addEventListener('click', checkNumber);

const againBtn = document.querySelector('.again');
againBtn.addEventListener('click', restorePage);
