'use strict';

const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const diceElem = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const player0Elem = document.querySelector('.player--0');
const player1Elem = document.querySelector('.player--1');

let currentScore = 0;
let dice = 0;
let activePlayer = 0;

let scorePlayers = [0,0];
let playing = true;

score0.textContent = 0;
score1.textContent = 0;

diceElem.classList.add('hidden');

const rollDice = function () {
  dice = Math.trunc(Math.random() * 6) + 1;
  //diceElem.src = `./img/dice-${dice}.png`;
  diceElem.setAttribute('src', `./img/dice-${dice}.png`);
  diceElem.classList.remove('hidden');
};

const updateCurrentScore = function () {
  currentScore += dice;
  document.getElementById(`current--${activePlayer}`).textContent = currentScore;
};

const switchPlayer = function () {
  currentScore = 0;
  dice = 0; // my code needs to redefine the dice value
  
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0; // switch player
  player0Elem.classList.toggle('player--active');
  player1Elem.classList.toggle('player--active');
  updateCurrentScore();
};

const getCurrentScore = function () {
  // The condition to switch to next player is based in dice value. When the value is 1 occurs the switching
  if (dice !== 1) {
    updateCurrentScore();
  } else {
    switchPlayer();
  }
};

btnRoll.addEventListener('click', function () {
  if (playing){
    rollDice();
    getCurrentScore();
  }
});

btnHold.addEventListener('click', function (){
  if (playing){
    //calculate score
    scorePlayers[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scorePlayers[activePlayer];
  
    if (scorePlayers[activePlayer] >= 20){
      playing = false;
      diceElem.classList.add('hidden');

      const sectionPlayer = document.querySelector(`.player--${activePlayer}`);
      sectionPlayer.classList.add('player--winner');
      sectionPlayer.classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});
