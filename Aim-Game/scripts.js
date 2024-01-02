const span = document.querySelector('#kills');
const h1 = document.querySelector('h1');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const deaths = document.querySelector('#deaths');
let kD = document.querySelector('#kd');

const box = document.createElement('div');
box.classList = 'box';

let counter = 0;
let size = 100;
let moves = 100;
let speed = 5000;
let isGameRunning = false;
let myInterval;
let deathCounter = 0;

function buttonStyle(start1, pause1) {
  start.style.background = start1;
  pause.style.background = pause1;
}

function BoxMoveSize() {
  boxMove();
  boxSize();
}

function kDInnerText() {
  kD.innerText = (counter / deathCounter).toFixed(2);
}

function boxMove() {
  const width = window.innerWidth - size;
  const height = window.innerHeight - size;
  const randomX = Math.round(Math.random() * width);
  const randomY = Math.round(Math.random() * height);
  box.style.left = `${randomX}px`;
  box.style.top = `${randomY}px`;
}

function changeSpeed() {
  if (moves % 10 === 0) {
    speed -= 150;
  }
}

function boxSize() {
  moves--;
  box.style.width = `${size}px`;
  box.style.height = `${size}px`;

  if (moves % 10 === 0) {
    size -= 10;
  }
  if (moves === 0) {
    h1.innerText = 'GAME OVER';
    clearInterval(myInterval);
  }
}

window.addEventListener('click', function () {
  if (isGameRunning === false) return;
  deathCounter++;
  kDInnerText();
  deaths.innerText = deathCounter;
});

pause.addEventListener('click', function () {
  clearInterval(myInterval);
  isGameRunning = false;
  buttonStyle('none', 'red');
});
start.addEventListener('click', function () {
  document.body.appendChild(box);
  if (isGameRunning === true) return;
  isGameRunning = true;

  deathCounter--;
  boxMove();
  changeSpeed();
  myInterval = setInterval(BoxMoveSize, speed);
  buttonStyle('green', 'none');
});

box.addEventListener('click', function () {
  if (isGameRunning === false) return;
  deathCounter--;
  counter++;
  moves--;
  span.innerText = counter;
  clearInterval(myInterval);
  boxMove();
  changeSpeed();
  kDInnerText();
  myInterval = setInterval(BoxMoveSize, speed);
});

myInterval = setInterval(() => {
  if (isGameRunning === false) return;
  BoxMoveSize();
  changeSpeed();
}, speed);
