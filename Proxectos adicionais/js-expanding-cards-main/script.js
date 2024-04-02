container = document
  .querySelector('.container')
  .addEventListener('click', function (e) {
    document.querySelector('.active').classList.toggle('active');
    e.target.classList.toggle('active');
  });
