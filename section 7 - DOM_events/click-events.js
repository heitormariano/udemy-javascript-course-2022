'use strict';

// code with increments
const generateNumber = function () {
  return Math.floor(Math.random() * 10 + 1);
};

// generate random number once
const random = generateNumber();

const checkNumber = function () {
  const inputValue = Number(document.querySelector('.guess').value);
  if (inputValue) {
    if (random === inputValue) {
      document.querySelector('.message').textContent = 'Correct Number';
      document.querySelector('body').style.backgroundColor = 'green';
    } else {
      document.querySelector('.message').textContent = 'Try Again';
    }
  } else {
    document.querySelector('.message').textContent = 'No Number';
  }
};

const checkBtn = document.querySelector('.check');
checkBtn.addEventListener('click', checkNumber);
