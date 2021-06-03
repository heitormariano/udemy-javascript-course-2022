'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const showModalList = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < showModalList.length; i++) {
  console.log(showModalList[i].addEventListener('click', openModal));
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
