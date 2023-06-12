'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const showModalList = document.querySelectorAll('.show-modal');

for (let i = 0; i < showModalList.length; i++) {
  console.log(showModalList[i].textContent);
}
