const greet = function () {
  window.alert('Hello!');
};

const elemBody = document.body;
elemBody.addEventListener('click', greet);
