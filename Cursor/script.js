const smCircle = document.querySelector('.small-circle');
const dot = document.querySelector('.dot');
let timer;

window.addEventListener('mousemove', function (e) {
  smCircle.style.top = e.pageY + 'px';
  smCircle.style.left = e.pageX + 'px';
  smCircle.classList.add('grow-animation');
  const y = e.pageY + smCircle.offsetHeight / 2;
  const x = e.pageX + smCircle.offsetWidth / 2;
  dot.style.top = y - dot.offsetHeight / 2 + 'px';
  dot.style.left = x - dot.offsetWidth / 2 + 'px';

  clearTimeout(timer);

  timer = setTimeout(() => {
    smCircle.classList.add('grow3-animation');

    smCircle.classList.remove('grow-animation');

    setTimeout(() => {
      smCircle.classList.remove('grow3-animation');
    }, 1000);
  }, 2000);
});

window.addEventListener('click', function () {
  if (
    smCircle.classList.contains('small-circle') &&
    smCircle.classList.length < 2
  ) {
    smCircle.classList.add('grow2-animation');

    setTimeout(() => {
      smCircle.classList.remove('grow2-animation');
      smCircle.classList.remove('grow-animation');
      smCircle.classList.remove('grow3-animation');
      clearTimeout(timer);
    }, 4000);
  }

  if (smCircle.classList.contains('grow-animation')) {
    smCircle.classList.add('grow1-animation');
    smCircle.classList.remove('grow-animation');

    setTimeout(() => {
      smCircle.classList.remove('grow1-animation');
      smCircle.classList.remove('grow-animation');
      smCircle.classList.remove('grow3-animation');
      clearTimeout(timer);
    }, 4000);
  }
});
