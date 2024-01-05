const clickBtn = document.querySelector('#click-btn');
const even = document.querySelector('#box-container-even');
const odd = document.querySelector('#box-container-odd');
const d3 = document.querySelector('#box-container-3');
const d5 = document.querySelector('#box-container-5');
const d15 = document.querySelector('#box-container-15');

let counter = 0;

function createBox(mod) {
  boxCreated = true;
  numberBox = document.createElement('button');
  numberBox.innerText = counter;
  numberBox.classList = 'number-box numbers';
  mod.appendChild(numberBox);

  numberBox.addEventListener('click', function (e) {
    if (e.target.classList.contains('number-box')) {
      e.target.remove();
    }
  });
}

function clickCounter() {
  counter++;
  clickBtn.innerText = counter;

  if (counter % 2 === 0 && counter < 17) {
    createBox(even);
  } else if (counter % 2 !== 0 && counter < 16) {
    createBox(odd);
  }
  if (counter % 3 == 0 && counter < 25) {
    createBox(d3);
  }
  if (counter % 5 == 0 && counter < 41) {
    createBox(d5);
  }
  if (counter % 15 == 0 && counter < 121) {
    createBox(d15);
  }
}


clickBtn.addEventListener('click', clickCounter);


clickBtn.addEventListener('mousedown', function() {
    if (e) {
        clickBtn.style.border = '5px solid red';
    } else clickBtn.style.border = 'none';
});

clickBtn.addEventListener('mouseup', function () {
  clickBtn.style.border = 'none';
});


