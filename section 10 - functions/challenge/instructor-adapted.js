(function () {
  let header = document.querySelector('h2');

  document.querySelector('body').addEventListener('click', function () {
    header.classList.toggle('clicked');
  });
})();
